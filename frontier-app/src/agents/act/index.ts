import { PRPlan } from "../plan"

export async function act(plan: PRPlan): Promise<string> {
  // 最小のテンプレ（後でeverything-claude-codeに差し替え）
  return `
【ターゲット】${plan.target}

【ベネフィット】
${plan.benefit}

【エビデンス】
${plan.evidence}

【PR文（試作）】
${plan.target} に向けて、
${plan.benefit} を実現するための価値を、
${plan.evidence} に基づいて訴求します。
  `.trim()
}