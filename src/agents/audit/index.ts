export function audit(output: string): string {
  if (!output.includes("ターゲット")) {
    return "❌ ターゲットが不足しています"
  }
  if (!output.includes("ベネフィット")) {
    return "❌ ベネフィットが不足しています"
  }
  if (!output.includes("エビデンス")) {
    return "❌ エビデンスが不足しています"
  }
  return "✅ ロジックOK"
}