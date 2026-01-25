import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

interface FeaturedTestCardProps {
    icon: ReactNode
    title: string
    description: string
    ctaText: string
    ctaLink: string
}

export function FeaturedTestCard({
    icon,
    title,
    description,
    ctaText,
    ctaLink,
}: FeaturedTestCardProps) {
    return (
        <div className="bg-[#F8F9FA] border border-brand-fog rounded-[32px] p-10 flex flex-col items-start text-left transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-[#E8F2F2] flex items-center justify-center mb-8 text-brand-teal">
                {icon}
            </div>
            <h3 className="text-2xl font-semibold text-brand-slate mb-4 font-heading">
                {title}
            </h3>
            <p className="text-[#5C6E71] leading-relaxed mb-10 flex-grow">
                {description}
            </p>
            <Link to={ctaLink} className="w-full">
                <Button className="h-[52px] w-full md:w-auto px-8 rounded-xl bg-brand-teal text-white hover:bg-brand-glow text-[16px] font-medium transition-all flex items-center justify-center gap-2 group">
                    {ctaText}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                </Button>
            </Link>
        </div>
    )
}

interface ProcessStepCardProps {
    number: number
    icon: ReactNode
    title: string
    description: string
}

export function ProcessStepCard({
    number,
    icon,
    title,
    description,
}: ProcessStepCardProps) {
    return (
        <div className="bg-[#F8F9FA] border border-brand-fog rounded-[32px] p-10 flex flex-col items-start text-left">
            <div className="relative mb-8">
                <div className="w-16 h-16 rounded-full bg-[#E8F2F2] flex items-center justify-center text-brand-teal">
                    {icon}
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-brand-teal text-white text-[13px] font-bold flex items-center justify-center border-2 border-[#F8F9FA]">
                    {number}
                </div>
            </div>
            <h3 className="text-2xl font-semibold text-brand-slate mb-4 font-heading">
                {title}
            </h3>
            <p className="text-[#5C6E71] leading-relaxed">
                {description}
            </p>
        </div>
    )
}

interface TraitPillProps {
    icon: ReactNode
    text: string
}

export function TraitPill({ icon, text }: TraitPillProps) {
    return (
        <div className="bg-[#F8F9FA] border border-brand-fog rounded-2xl p-4 flex items-center gap-4 transition-all hover:border-brand-teal/30">
            <div className="w-10 h-10 rounded-xl bg-[#E8F2F2] flex items-center justify-center text-brand-teal flex-shrink-0">
                {icon}
            </div>
            <span className="text-[15px] font-medium text-brand-slate leading-tight">
                {text}
            </span>
        </div>
    )
}
