import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PageHeroProps {
    title: string
    description: ReactNode
    footer?: ReactNode
    className?: string
}

export function PageHero({
    title,
    description,
    footer,
    className,
}: PageHeroProps) {
    return (
        <section
            className={cn(
                "relative w-full min-h-[420px] flex flex-col items-center justify-center text-center px-6 md:px-[75px] py-10 md:py-[120px] overflow-hidden",
                className
            )}
            style={{
                background: `linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, rgba(21, 112, 111, 0.05), rgba(21, 112, 111, 0.05))`,
                backgroundBlendMode: 'overlay'
            }}
        >

            <div className="relative z-10 max-w-[840px] w-full flex flex-col items-center gap-[10px]">
                <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold text-brand-slate leading-tight tracking-tight mb-2">
                    {title}
                </h1>

                <div className="text-lg md:text-[20px] text-[#5C6E71] max-w-[700px] leading-relaxed mb-4">
                    {description}
                </div>

                {footer && (
                    <div className="mt-2 text-sm md:text-[16px] text-[#5C6E71]/80 italic">
                        {footer}
                    </div>
                )}
            </div>
        </section>
    )
}
