import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface InsightSectionProps {
    title: string
    description: ReactNode
    className?: string
    bgColor?: string
    textColor?: string
    subTextColor?: string
}

export function InsightSection({
    title,
    description,
    className,
    bgColor = '#14716F',
    textColor = 'text-white',
    subTextColor = 'text-white/90',
}: InsightSectionProps) {
    return (
        <section className={cn("w-full px-6 md:px-[75px] py-12 md:py-20 flex items-center justify-center", className)}>
            <div
                className="w-full max-w-[1290px] min-h-[480px] md:min-h-[584px] rounded-[42px] flex flex-col items-center justify-center text-center px-8 py-16 md:px-20 md:py-24 shadow-sm border border-brand-fog/5"
                style={{ backgroundColor: bgColor }}
            >
                <div className="max-w-[880px] w-full">
                    <h2 className={cn("text-3xl md:text-[44px] font-bold mb-10 leading-tight tracking-tight font-heading", textColor)}>
                        {title}
                    </h2>
                    <div className={cn("text-lg md:text-[21px] leading-relaxed font-sans font-light", subTextColor)}>
                        {description}
                    </div>
                </div>
            </div>
        </section>
    )
}
