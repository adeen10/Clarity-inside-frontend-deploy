import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ShieldCheck } from "lucide-react"

interface SplitInfoSectionProps {
    title: string
    description: ReactNode
    linkText: string
    linkHref: string
    graphic: ReactNode
    className?: string
}

export function SplitInfoSection({
    title,
    description,
    linkText,
    linkHref,
    graphic,
    className,
}: SplitInfoSectionProps) {
    return (
        <section className={cn("w-full px-6 md:px-[75px] pt-6 md:pt-8 pb-20 md:pb-32", className)}>
            <div className="max-w-[1290px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[100px] items-center">
                <div className="flex flex-col items-start text-left">
                    <h2 className="text-3xl md:text-[44px] font-bold text-brand-slate mb-8 leading-tight tracking-tight font-heading">
                        {title}
                    </h2>
                    <div className="text-lg md:text-[20px] text-[#5C6E71] leading-relaxed mb-10 space-y-6">
                        {description}
                    </div>
                    <a
                        href={linkHref}
                        className="text-brand-teal font-medium hover:underline flex items-center gap-2 text-[17px]"
                    >
                        {linkText} <span className="text-xl">→</span>
                    </a>
                </div>

                <div className="flex items-center justify-center">
                    {graphic}
                </div>
            </div>
        </section>
    )
}

interface ReadyToStartSectionProps {
    title: string
    subtitle: ReactNode
    children: ReactNode
    footerLinkText?: string
    footerLinkHref?: string
    className?: string
    variant?: 'light' | 'dark'
}

export function ReadyToStartSection({
    title,
    subtitle,
    children,
    footerLinkText,
    footerLinkHref,
    className,
    variant = 'light'
}: ReadyToStartSectionProps) {
    const isDark = variant === 'dark';

    return (
        <section className={cn(
            "w-full py-20 md:py-[120px] px-6",
            isDark ? "bg-[#14716F] text-white" : "bg-[#F4F9F9] text-brand-slate",
            className
        )}>
            <div className="max-w-[720px] mx-auto flex flex-col items-center text-center">
                <h2 className={cn(
                    "relative text-3xl md:text-[52px] font-bold mb-8 font-heading tracking-tight inline-block",
                    isDark ? "text-white" : "text-brand-slate"
                )}>
                    {title}
                </h2>
                <p className={cn(
                    "text-lg md:text-[20px] mb-14 leading-relaxed",
                    isDark ? "text-white/90" : "text-[#5C6E71]"
                )}>
                    {subtitle}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    {children}
                </div>

                {footerLinkText && footerLinkHref && (
                    <a
                        href={footerLinkHref}
                        className={cn(
                            "font-medium hover:underline flex items-center gap-2 text-[17px] mt-10",
                            isDark ? "text-white" : "text-brand-teal"
                        )}
                    >
                        {footerLinkText} <span className="text-xl">→</span>
                    </a>
                )}
            </div>
        </section>
    )
}

export function ResponsibleApproachSection({
    title = "A responsible approach",
    testName,
    description,
    icon,
    className
}: {
    title?: string,
    testName?: string,
    description?: ReactNode,
    icon?: ReactNode,
    className?: string
}) {
    return (
        <section className={cn("w-full px-6 md:px-[75px] pt-12 pb-20 md:pb-32 bg-[#F8F9FA]", className)}>
            <div className="max-w-[850px] mx-auto flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-teal/5 flex items-center justify-center text-brand-teal mb-10 border border-brand-teal/10">
                    {icon || <ShieldCheck className="w-8 h-8" />}
                </div>

                <h2 className="text-3xl md:text-[40px] font-bold text-brand-slate mb-8 font-heading tracking-tight">
                    {title}
                </h2>

                <div className="text-lg md:text-[19px] text-[#5C6E71] leading-relaxed space-y-8">
                    {description || (
                        <>
                            <p>
                                This is a <strong className="text-brand-teal font-bold">screening tool</strong>, not a diagnosis. It's designed to help you reflect on potential {testName} traits and decide whether further support may be useful.
                            </p>
                            <p>
                                If your symptoms significantly affect your daily life, consider speaking with a <strong className="text-brand-teal font-bold">licensed professional.</strong>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
