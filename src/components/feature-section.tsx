import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FeatureSectionProps {
    title: string
    subtitle?: string
    children: ReactNode
    footer?: ReactNode
    className?: string
    cols?: number
    variant?: 'light' | 'dark'
}

export function FeatureSection({
    title,
    subtitle,
    children,
    footer,
    className,
    cols = 3,
    variant = 'light',
}: FeatureSectionProps) {
    const isDark = variant === 'dark'
    return (
        <section className={cn("w-full px-6 md:px-[75px] py-12 md:py-20", className)}>
            <div className="max-w-[1290px] mx-auto flex flex-col items-center">
                <div className="text-center mb-16 max-w-2xl">
                    <h2 className={cn(
                        "text-3xl md:text-5xl font-semibold mb-6 font-heading tracking-tight",
                        isDark ? "text-white" : "text-brand-slate"
                    )}>
                        {title}
                    </h2>
                    {subtitle && (
                        <p className={cn(
                            "text-lg md:text-xl",
                            isDark ? "text-white/80" : "text-[#5C6E71]"
                        )}>
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className={cn(
                    "w-full grid grid-cols-1 gap-8 mb-16",
                    cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
                )}>
                    {children}
                </div>

                {footer && (
                    <div className="flex justify-center">
                        {footer}
                    </div>
                )}
            </div>
        </section>
    )
}
