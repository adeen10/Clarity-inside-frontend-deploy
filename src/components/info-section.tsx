import { Separator } from "@/components/ui/separator"

interface SectionProps {
  title: string
  content: string | string[]
}

export function InfoSection({ title, content }: SectionProps) {
  return (
    <div className="mx-auto max-w-3xl py-12">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">{title}</h2>
      <div className="space-y-4">
        {Array.isArray(content) ? (
          content.map((p, i) => (
            <p key={i} className="text-slate-600 leading-relaxed">
              {p}
            </p>
          ))
        ) : (
          <p className="text-slate-600 leading-relaxed">{content}</p>
        )}
      </div>
      <Separator className="mt-12 bg-slate-200 opacity-100" />
    </div>
  )
}
