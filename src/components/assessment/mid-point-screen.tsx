"use client"

import { Check } from "lucide-react"

interface MidPointScreenProps {
  onContinue: () => void
  completed: number
  total: number
  title?: string
  description?: string
}

export function MidPointScreen({ onContinue, completed, total, title, description }: MidPointScreenProps) {
  const remaining = total - completed

  const defaultTitle = "Thanks — we've recorded your initial responses."
  const defaultDescription = "To give you a more meaningful result, we'll now ask a few more questions to understand your experience in more detail."

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center max-w-xl mx-auto py-12">
      <div className="w-16 h-16 bg-[#eef8f8] rounded-full flex items-center justify-center mb-8">
        <Check className="w-8 h-8 text-[#137077]" />
      </div>

      <h2 className="text-3xl font-semibold text-slate-800 mb-6 leading-tight text-balance">
        {title || defaultTitle}
      </h2>

      <p className="text-slate-600 mb-10 leading-relaxed text-balance">
        {description || defaultDescription}
      </p>

      <button
        onClick={onContinue}
        className="bg-[#137077] text-white px-12 py-4 rounded-full font-medium hover:bg-[#0f5a60] transition-colors mb-8 min-w-[200px]"
      >
        Continue
      </button>

      <p className="text-slate-400 text-sm">
        {completed} of {total} questions completed · {remaining} remaining
      </p>
    </div>
  )
}
