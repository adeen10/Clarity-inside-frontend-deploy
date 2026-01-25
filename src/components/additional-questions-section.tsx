import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface QuestionGroupProps {
    icon: ReactNode
    groupNumber?: string
    title: string
    tags?: string[]
    description?: string
}

function QuestionGroup({ icon, groupNumber, title, tags, description }: QuestionGroupProps) {
    return (
        <div className="bg-[#F8F9FA] border border-brand-fog rounded-[32px] p-8 flex flex-col items-start text-left h-full">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#E8F2F2] flex items-center justify-center text-brand-teal flex-shrink-0">
                    {icon}
                </div>
                {groupNumber && (
                    <span className="text-brand-slate/40 text-[13px] font-bold uppercase tracking-wider">
                        {groupNumber}
                    </span>
                )}
            </div>

            <h3 className="text-xl font-bold text-brand-slate mb-4 font-heading">
                {title}
            </h3>

            {description && (
                <p className="text-brand-slate/60 text-[15px] leading-relaxed">
                    {description}
                </p>
            )}

            {tags && (
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-brand-teal/[0.05] border border-brand-teal/10 text-brand-teal text-[12px] font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}

interface AdditionalQuestionsSectionProps {
    title: string
    subtitle: ReactNode
    items: QuestionGroupProps[]
    footerNote: string
    className?: string
}

export function AdditionalQuestionsSection({
    title,
    subtitle,
    items,
    footerNote,
    className
}: AdditionalQuestionsSectionProps) {
    const isFiveItems = items.length === 5;

    return (
        <section className={cn("w-full px-6 md:px-[75px] py-20 md:py-32 bg-[#FDF9F3]/30", className)}>
            <div className="max-w-[1290px] mx-auto flex flex-col items-center">
                <div className="text-center mb-16 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-semibold text-brand-slate mb-6 font-heading tracking-tight">
                        {title}
                    </h2>
                    <div className="text-lg md:text-xl text-[#5C6E71] leading-relaxed">
                        {subtitle}
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="w-full mb-12">
                    {isFiveItems ? (
                        <div className="flex flex-col gap-8 items-center">
                            {/* Top 3 */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                                {items.slice(0, 3).map((item, i) => (
                                    <QuestionGroup key={i} {...item} />
                                ))}
                            </div>
                            {/* Bottom 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[850px]">
                                {items.slice(3, 5).map((item, i) => (
                                    <QuestionGroup key={i} {...item} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {items.map((item, i) => (
                                <QuestionGroup key={i} {...item} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer Note */}
                <div className="inline-flex px-8 py-4 rounded-3xl border border-brand-teal/10 bg-white/50 text-[#5C6E71] text-[15px] md:text-[16px] text-center max-w-3xl">
                    <p dangerouslySetInnerHTML={{ __html: footerNote }} />
                </div>
            </div>
        </section>
    )
}
