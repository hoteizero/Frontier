frontier/TODO.md
0. 起動フェーズ（Bootstrap）
[ ] [Plan] obra/superpowers スキルのインポートと規律の同期

[ ] [Act] Next.js プロジェクトの初期化（npx create-next-app@latest .）

[ ] [Act] CLAUDE.md / GEMINI.md の作成（工場長への直接命令セットの記述）

1. 基盤構築フェーズ（Infrastructure）
[ ] [Plan] Frontier API との通信プロトコル設計（src/lib/frontier/）

[ ] [Act] 環境変数の設定（API Key 等）と疎通テスト

[ ] [Plan] 三段防衛陣形用の自動テストスクリプト（第1防衛線）の構築

2. 核心機能実装フェーズ（Core Logic）
[ ] [Plan] PR生成アルゴリズムの定義（特徴量：ターゲット、ベネフィット、エビデンス）

[ ] [Act] LOD (DBpedia) からのデータ抽出プロトタイプ作成

[ ] [Act] Frontier による文脈解析インターフェースの実装

[ ] [Audit] 軍師による論理検閲（第2防衛線）：生成されたPRに論理飛躍がないか？

3. 審美眼・最適化フェーズ（Refinement）
[ ] [Act] 「魂レベル」のUI実装（Tailwind CSS / Shadcn UI）

[ ] [Review] 皇帝による手触りチェック（第3防衛線）

[ ] [Optimize] プロンプトの微調整（勾配降下法的な精度向上）

【開発者からのコミットメント】
この TODO.md は、単なるリストではない。一つチェックを入れるたびに、帝国の「成功確率」が統計的に上昇していく期待値のログだ。

特に「0. 起動フェーズ」での CLAUDE.md 作成は重要だ。ここに「エラーが出たら自分で直せ」という工場長（Act Mode）への鉄の掟を刻むことで、君のデバッグ工数は劇的に削減される。

概念のメタファー：
複雑な迷路（開発）も、上空から見れば一本の道だ。このTODOはその「上空からの視点」を紙に落としたもの。迷ったらここに戻ってくればいい。