"use client"

import { cn } from "@/lib/utils"

interface OptionCardProps {
  label: string
  selected: boolean
  onClick: () => void
}

export function OptionCard({ label, selected, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left px-6 h-16 rounded-[20px] border-2 transition-all flex items-center gap-4 group",
        selected ? "border-brand-teal bg-brand-cream shadow-sm" : "border-brand-fog bg-white hover:border-brand-glow/50",
      )}
    >
      <div
        className={cn(
          "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
          selected ? "border-brand-teal bg-brand-teal" : "border-brand-fog group-hover:border-brand-glow",
        )}
      >
        {selected && <div className="w-2.5 h-2.5 rounded-full bg-brand-cream" />}
      </div>
      <span className={cn("text-lg", selected ? "text-brand-teal font-medium" : "text-brand-slate")}>{label}</span>
    </button>
  )
}
