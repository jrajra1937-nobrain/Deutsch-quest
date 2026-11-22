#!/usr/bin/env python3
"""Generate real MP3 assets for English Quest. No browser TTS dependency."""
import asyncio
import json
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DATA = json.loads((ROOT / "content.js").read_text(encoding="utf-8").split("window.EQ_DATA=",1)[1].strip().rstrip(";"))
AUDIO = ROOT / "audio"
FILES = {}
ITEMS = []

def add(item_id: str, text: str, subdir: str) -> None:
    if item_id in FILES:
        raise ValueError(f"duplicate audio ID {item_id}")
    rel = f"audio/{subdir}/{item_id}.mp3"
    FILES[item_id] = "./" + rel
    ITEMS.append((text, AUDIO / subdir / (item_id + ".mp3")))

for unit in DATA["units"]:
    for idx, example in enumerate(unit["examples"], 1):
        add(f'{unit["id"]}-ex{idx:02d}', example.split(" = ", 1)[0], "examples")
    for q in unit["questions"]:
        add(q["id"], q["stem"].replace("___", q["correct"]), "questions")
for passage in DATA["readings"]:
    for q in passage["questions"]:
        add(q["id"], q["stem"], "questions")
for task in DATA["speaking"]:
    add(task["id"], task["model"], "speaking")

def offline_audio(text: str, out: Path):
    """Guaranteed offline fallback: eSpeak speech, MP3 encoded by ffmpeg."""
    cmd = shutil.which("espeak-ng") or shutil.which("espeak")
    if not cmd:
        raise RuntimeError("Neither espeak-ng nor espeak installed.")
    pcm = subprocess.run([cmd, "-v", "en-us", "-s", "145", "--stdout", text], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", "pipe:0", "-ar", "24000", "-ac", "1", "-codec:a", "libmp3lame", "-b:a", "56k", str(out)], input=pcm.stdout, check=True, stdout=subprocess.DEVNULL)

async def main():
    try:
        import edge_tts
    except ImportError:
        edge_tts = None
    for _, out in ITEMS:
        out.parent.mkdir(parents=True, exist_ok=True)

    neural_available = False
    if edge_tts:
        try:
            first_text, first_out = ITEMS[0]
            await asyncio.wait_for(edge_tts.Communicate(first_text, "en-US-AriaNeural", rate="-12%").save(str(first_out)), timeout=18)
            neural_available = first_out.exists() and first_out.stat().st_size > 1000
            print("Neural TTS online:", neural_available, flush=True)
        except Exception as exc:
            print("Neural TTS unavailable; using local generated audio:", str(exc)[:160], flush=True)

    async def one(index, text, out, semaphore):
        if out.exists() and out.stat().st_size > 1000:
            return
        if neural_available:
            async with semaphore:
                try:
                    await asyncio.wait_for(edge_tts.Communicate(text, "en-US-AriaNeural", rate="-12%").save(str(out)), timeout=22)
                    if out.stat().st_size > 1000:
                        return
                except Exception:
                    out.unlink(missing_ok=True)
        await asyncio.to_thread(offline_audio, text, out)

    sem = asyncio.Semaphore(3)
    batch = 24
    for off in range(0,len(ITEMS),batch):
        await asyncio.gather(*(one(i,text,out,sem) for i,(text,out) in enumerate(ITEMS[off:off+batch],off)))
        print(f"Generated {min(off+batch,len(ITEMS))}/{len(ITEMS)} recordings",flush=True)

    bad = [str(out) for _,out in ITEMS if not out.exists() or out.stat().st_size < 1000]
    if bad: raise RuntimeError(f"Failed MP3 files: {bad[:5]}")
    (ROOT/"audio-map.json").write_text(json.dumps({"version":1,"count":len(FILES),"files":FILES},ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("Completed:",len(FILES),"MP3 files.",flush=True)

if __name__=="__main__":
    asyncio.run(main())
