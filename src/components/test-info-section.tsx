import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Check, ExternalLink } from "lucide-react"

interface TestInfoSectionProps {
    title: string
    description: ReactNode
    links?: { label: string; href: string }[]
    sidebar: ReactNode
    className?: string
}

export function TestInfoSection({
    title,
    description,
    links,
    sidebar,
    className,
}: TestInfoSectionProps) {
    return (
        <section className={cn("w-full px-6 md:px-[75px] py-20 md:py-32 bg-white", className)}>
            <div className="max-w-[1290px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Main Content */}
                <div className="lg:col-span-2 flex flex-col items-start text-left">
                    <h2 className="text-3xl md:text-[40px] font-bold text-brand-slate mb-8 leading-tight tracking-tight font-heading">
                        {title}
                    </h2>
                    <div className="text-[17px] md:text-[18px] text-[#5C6E71] leading-relaxed mb-8 space-y-6">
                        {description}
                    </div>

                    {links && links.length > 0 && (
                        <div className="flex flex-wrap gap-6 mt-4">
                            {links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-teal font-medium hover:underline flex items-center gap-2 text-[15px]"
                                >
                                    {link.label} <ExternalLink className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sidebar Card */}
                <div className="lg:col-span-1">
                    <div className="bg-[#FCFAF8] border border-brand-fog rounded-[32px] p-8 md:p-10 shadow-sm">
                        {sidebar}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Sidebar Helpers
export function InfoList({ items, title }: { items: string[], title?: string }) {
    return (
        <div className="space-y-4">
            {title && <h4 className="text-brand-slate font-bold mb-4">{title}</h4>}
            {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal flex-shrink-0">
                        <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-[16px] text-brand-slate/80">{item}</span>
                </div>
            ))}
        </div>
    )
}

export function ScreeningItems({ items, title }: { items: { icon: ReactNode, text: string }[], title?: string }) {
    return (
        <div className="space-y-6">
            {title && <h4 className="text-brand-slate font-bold mb-6 text-lg">{title}</h4>}
            {items.map((item, i) => (
                <div key={i} className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-[#E8F2F2] flex items-center justify-center text-brand-teal flex-shrink-0">
                        {item.icon}
                    </div>
                    <span className="text-[16px] font-medium text-brand-slate/90 leading-tight">
                        {item.text}
                    </span>
                </div>
            ))}
        </div>
    )
}

export function GlanceRow({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex justify-between items-center py-4 border-b border-brand-fog last:border-0">
            <span className="text-brand-slate/60 text-[15px]">{label}</span>
            <span className="text-brand-slate font-bold text-[15px]">{value}</span>
        </div>
    )
}

export function SeverityBands() {
    const bands = [
        { label: 'Minimal', color: '#4ADE80' },
        { label: 'Mild', color: '#FACC15' },
        { label: 'Moderate', color: '#FB923C' },
        { label: 'Severe', color: '#F87171' },
    ]
    return (
        <div className="mt-8 pt-6 bg-brand-teal/[0.02] rounded-2xl p-4">
            <h5 className="text-brand-slate/40 text-[11px] font-bold uppercase tracking-wider mb-3 px-1">Severity Bands</h5>
            <div className="grid grid-cols-4 gap-1.5 mb-2 px-1">
                {bands.map((band, i) => (
                    <div key={i} className="h-2 rounded-full" style={{ backgroundColor: band.color }} />
                ))}
            </div>
            <div className="grid grid-cols-4 gap-1 px-1">
                {bands.map((band, i) => (
                    <span key={i} className="text-[10px] text-brand-slate/50 text-center leading-tight">{band.label}</span>
                ))}
            </div>
        </div>
    )
}
