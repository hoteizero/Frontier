export type PRPlan = {
  target: string
  benefit: string
  evidence: string
}

export async function plan(input: string): Promise<PRPlan> {
  // 最小のロジック（後でsuperpowersに差し替え）
  const [target, benefit, evidence] = input.split("|").map(s => s.trim())

  return {
    target,
    benefit,
    evidence
  }
}