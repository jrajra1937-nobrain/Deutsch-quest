# English Quest — Standalone Branch

このブランチは English Quest 専用です。Deutsch Quest のファイルはこのブランチに存在しません。

**注意:** ブランチの分離はGitHubリポジトリの分離ではありません。
GitHub Pagesは一つのリポジトリから一つのサイト設定のみなので、独立のGitHub Pages URLを得るには **English-quest** という別リポジトリを作成し、このブランチを移す必要があります。

## Files

- `index.html`: 英語版ホーム。iPhoneのホーム画面用アイコン指定を含む
- `content.js`: A2〜C1教材
- `audio/`: 304件の英語音声MP3
- `audio-map.json`: 音声ファイル対応表
- `manifest.webmanifest`: 英語版アプリ設定
- `apple-touch-icon.png` / `icon.svg`: English Quest 専用Eアイコン
- `sw.js`: オフライン表示

GitHub Pagesの独立リポジトリに移行すると、`https://jrajra1937-nobrain.github.io/English-quest/`を公開先として設定できます。

## 仕様

各設問のIDは固定し、2連続正解で習得。同じ文法で英文が違う設問は別々に扱う。
