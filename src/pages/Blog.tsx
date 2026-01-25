import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { UsefulLinksSection } from "@/components/useful-links-section"
import { BlogSection } from "@/components/blog-section"

export default function Blog() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <PageHero
                title="Wellbeing Articles & Guides"
                description="Calm, supportive explanations designed to help you understand your anxiety and emotional wellbeing."
                footer="Browse our latest posts or filter topics to find what you need."
            />

            <BlogSection />

            <UsefulLinksSection />

            <Footer />
        </main>
    )
}
