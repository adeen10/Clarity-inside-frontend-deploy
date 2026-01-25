import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { InteractiveBackground } from "./interactive-background"

interface HeroProps {
  badge?: string
  title: string
  description: string
  children?: ReactNode
  footer?: ReactNode
  className?: string
}

export function Hero({
  badge,
  title,
  description,
  children,
  footer,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative w-full min-h-[712px] flex flex-col items-center justify-center text-center px-6 md:px-[75px] py-20 md:py-[120px] overflow-hidden",
        className
      )}
      style={{
        background: `linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, rgba(20, 113, 111, 0.1), rgba(20, 113, 111, 0.1))`,
        backgroundBlendMode: 'overlay'
      }}
    >
      <InteractiveBackground />

      <div className="relative z-10 max-w-[840px] w-full flex flex-col items-center gap-[10px]">
        {badge && (
          <div className="mb-4 inline-flex items-center rounded-full bg-brand-teal/10 px-4 py-1.5 text-sm font-medium text-brand-teal">
            {badge}
          </div>
        )}

        <h1 className="text-4xl md:text-6xl lg:text-[64px] font-semibold text-brand-slate leading-tight lg:leading-[1.1] tracking-tight mb-2">
          {title}
        </h1>

        <p className="text-lg md:text-[20px] text-[#5C6E71] max-w-[700px] leading-relaxed mb-10">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          {children}
        </div>

        {footer && (
          <div className="mt-2 text-sm md:text-[15px] text-[#5C6E71]/60">
            {footer}
          </div>
        )}
      </div>
    </section>
  )
}
