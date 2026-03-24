import { plan } from "@/agents/plan"
import { act } from "@/agents/act"
import { audit } from "@/agents/audit"

export async function POST(req: Request) {
  const { input } = await req.json()

  const p = await plan(input)
  const result = await act(p)
  const check = audit(result)

  return Response.json({
    plan: p,
    output: result,
    audit: check
  })
}