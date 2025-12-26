"use client"

interface AssessmentProgressProps {
  current: number
  total: number
}

export function AssessmentProgress({ current, total }: AssessmentProgressProps) {
  const percentage = (current / total) * 100

  return (
    <div className="w-full mb-[50px]">
      <div className="flex justify-between text-sm text-slate-500 mb-2 font-medium">
        <span>Question {current}</span>
        <span>of {total}</span>
      </div>
      <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#137077] transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
