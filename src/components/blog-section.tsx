import { useState } from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface BlogCardProps {
    category: string
    title: string
    description: string
    slug: string
}

export function BlogCard({ category, title, description, slug }: BlogCardProps) {
    return (
        <div className="flex flex-col bg-white rounded-[24px] border border-brand-fog overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* Visual Placeholder - Reduced height */}
            <div className="h-48 md:h-52 w-full bg-gradient-to-br from-[#CFE2E2] to-[#E8F2F2]" />

            <div className="p-6 flex flex-col items-start text-left flex-grow">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-teal/5 text-brand-teal text-[11px] font-bold uppercase tracking-wider mb-4 border border-brand-teal/10">
                    {category}
                </span>

                <h3 className="text-lg md:text-xl font-bold text-brand-slate mb-3 font-heading leading-tight line-clamp-2">
                    {title}
                </h3>

                <p className="text-[#5C6E71] text-[14px] leading-relaxed mb-6 line-clamp-3">
                    {description}
                </p>

                <Link
                    to={`/blog/${slug}`}
                    className="mt-auto group flex items-center gap-2 text-brand-teal font-bold text-[14px] hover:underline"
                >
                    Read more <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    )
}

interface BlogSectionProps {
    className?: string
}

export function BlogSection({ className }: BlogSectionProps) {
    const categories = ["All", "Anxiety", "ADHD", "Autism"]
    const [activeCategory, setActiveCategory] = useState("All")

    const blogPosts = [
        {
            category: "Anxiety",
            title: "Do I have anxiety? Signs, symptoms and what to do next",
            description: "A simple guide to recognising common anxiety patterns and when they may mean something more.",
            slug: "do-i-have-anxiety"
        },
        // Adding duplicates for the demonstration as per the design reference
        {
            category: "Anxiety",
            title: "Do I have anxiety? Signs, symptoms and what to do next",
            description: "A simple guide to recognising common anxiety patterns and when they may mean something more.",
            slug: "do-i-have-anxiety-2"
        },
        {
            category: "Anxiety",
            title: "Do I have anxiety? Signs, symptoms and what to do next",
            description: "A simple guide to recognising common anxiety patterns and when they may mean something more.",
            slug: "do-i-have-anxiety-3"
        },
        {
            category: "Anxiety",
            title: "Do I have anxiety? Signs, symptoms and what to do next",
            description: "A simple guide to recognising common anxiety patterns and when they may mean something more.",
            slug: "do-i-have-anxiety-4"
        },
        {
            category: "Anxiety",
            title: "Do I have anxiety? Signs, symptoms and what to do next",
            description: "A simple guide to recognising common anxiety patterns and when they may mean something more.",
            slug: "do-i-have-anxiety-5"
        },
        {
            category: "Anxiety",
            title: "Do I have anxiety? Signs, symptoms and what to do next",
            description: "A simple guide to recognising common anxiety patterns and when they may mean something more.",
            slug: "do-i-have-anxiety-6"
        }
    ]

    return (
        <section className={cn("w-full px-6 md:px-[75px] py-12 md:py-20 bg-white", className)}>
            <div className="max-w-[1290px] mx-auto">
                {/* Category Filters - Now scrollable on mobile */}
                <div className="flex flex-nowrap md:flex-wrap items-center gap-2 md:gap-3 mb-12 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-5 py-2 rounded-full text-[14px] font-bold transition-all duration-200 border whitespace-nowrap",
                                activeCategory === cat
                                    ? "bg-brand-teal text-white border-brand-teal shadow-md shadow-brand-teal/10"
                                    : "bg-brand-teal/[0.03] text-brand-teal border-brand-teal/10 hover:bg-brand-teal/5"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Blog Grid - Reduced gap */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {blogPosts.map((post, i) => (
                        <BlogCard key={i} {...post} />
                    ))}
                </div>

                {/* Load More Button */}
                <div className="flex justify-center">
                    <button className="h-14 truncate px-10 rounded-2xl border border-brand-fog bg-white text-brand-slate font-bold text-[16px] hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all duration-300 shadow-sm">
                        Load more articles
                    </button>
                </div>
            </div>
        </section>
    )
}
