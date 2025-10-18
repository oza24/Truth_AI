import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExplainCards({
  reasons,
  sources,
}: {
  reasons: string[]
  sources: { title: string; url: string }[]
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card className="col-span-1 md:col-span-2">
        <CardHeader>
          <CardTitle>Why this verdict?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-4 text-sm text-foreground/80">
            {reasons.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            {sources.map((s, i) => (
              <li key={i}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-primary)] underline underline-offset-4 hover:opacity-90"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
