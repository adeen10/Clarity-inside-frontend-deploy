import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function UsefulLinksSection({ className }: { className?: string }) {
    const links = [
        { name: "Take the Anxiety Test", path: "/gad-7" },
        { name: "Take the ADHD Test", path: "/adhd" },
        { name: "Take the Autism Test", path: "/autism" },
        { name: "Read our Blog", path: "/blog" },
    ]

    return (
        <section
            className={cn("w-full py-12 md:py-20 px-6 flex flex-col items-center justify-center text-center", className)}
            style={{
                background: `linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, rgba(20, 113, 111, 0.05), rgba(20, 113, 111, 0.05))`,
                backgroundBlendMode: 'overlay'
            }}
        >
            <div className="max-w-[1440px] w-full flex flex-col items-center gap-[56px]">
                <h2 className="text-3xl md:text-[52px] font-bold text-brand-slate tracking-tight font-heading">
                    Useful links
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    {links.map((link) => (
                        <Link key={link.path} to={link.path}>
                            <Button className="h-[56px] px-8 rounded-2xl bg-white text-brand-slate border border-brand-fog shadow-sm hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all duration-300 font-medium text-[16px]">
                                {link.name}
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
