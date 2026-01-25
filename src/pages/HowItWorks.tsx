import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { FeatureSection } from "@/components/feature-section"
import { ProcessStepCard } from "@/components/test-cards"
import { ReadyToStartSection } from "@/components/cta-sections"
import { InfoList } from "@/components/test-info-section"
import { UsefulLinksSection } from "@/components/useful-links-section"
import { ClipboardList, BarChart3, FileText } from "lucide-react"
import { Link } from "react-router-dom"

export default function HowItWorks() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <PageHero
                title="How Our Mental Health Tests Work"
                description="A clear, simple overview of how our anxiety, ADHD and autism assessments are built — and how your results are created."
                footer="Each test follows the same calm, accessible process."
            />

            <FeatureSection
                title="A simple three-step process"
                className="bg-white py-12 md:py-20"
            >
                <ProcessStepCard
                    number={1}
                    icon={<ClipboardList className="w-8 h-8" />}
                    title="Take the assessment"
                    description="Short test based on clinically informed questionnaires. Different tests use different question sets (anxiety uses GAD-7, ADHD and autism use established screening indicators)."
                />
                <ProcessStepCard
                    number={2}
                    icon={<BarChart3 className="w-8 h-8" />}
                    title="See your instant results"
                    description="You'll receive a clear summary of your score and what it typically means."
                />
                <ProcessStepCard
                    number={3}
                    icon={<FileText className="w-8 h-8" />}
                    title="Unlock a personalized report (optional)"
                    description="A deeper breakdown tailored to the specific test you completed (anxiety, ADHD or autism)."
                />
            </FeatureSection>

            <ReadyToStartSection
                title="How we build our assessments"
                subtitle={
                    <div className="max-w-[780px] space-y-4">
                        <p>
                            Our tests are shaped using recognised psychological frameworks.
                        </p>
                        <p>
                            The anxiety assessment uses the GAD-7. Our ADHD and autism assessments draw from widely used screening indicators designed to explore thinking patterns, behaviors and sensory or attention-related traits.
                        </p>
                    </div>
                }
                variant="light"
                className="py-12 md:py-20"
            >
                <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
                    <Link to="/gad-7" className="text-brand-teal font-medium hover:underline text-[17px]">Anxiety test</Link>
                    <Link to="/adhd" className="text-brand-teal font-medium hover:underline text-[17px]">ADHD test</Link>
                    <Link to="/autism" className="text-brand-teal font-medium hover:underline text-[17px]">Autism test</Link>
                </div>
            </ReadyToStartSection>

            <FeatureSection
                title="Your results, explained simply"
                className="bg-white py-12 md:py-20"
                cols={2}
            >
                <div className="bg-white border border-brand-fog rounded-[32px] p-8 md:p-10 flex flex-col h-full shadow-sm">
                    <h4 className="text-brand-slate font-bold text-xl mb-6">Free Results</h4>
                    <InfoList
                        items={[
                            "Instant score",
                            "A brief explanation of what that score typically suggests",
                            "No email or account required"
                        ]}
                    />
                </div>

                <div className="bg-[#F9FAF9] border border-brand-fog rounded-[32px] p-8 md:p-10 flex flex-col h-full shadow-sm">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <h4 className="text-brand-slate font-bold text-xl">Personalized Report</h4>
                        <span className="px-2.5 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-[10px] font-bold uppercase tracking-wider">
                            Optional
                        </span>
                    </div>
                    <InfoList
                        items={[
                            "Deeper insight into patterns and behaviors",
                            "Understanding your responses more clearly",
                            "Helpful next steps"
                        ]}
                    />
                    <p className="mt-auto pt-8 text-sm text-[#5C6E71] leading-relaxed italic">
                        Upgrading is optional — the free version always gives you a quick, clear starting point.
                    </p>
                </div>
            </FeatureSection>

            <ReadyToStartSection
                title="A safe, private and responsible approach"
                subtitle={
                    <div className="max-w-[780px] space-y-4">
                        <p>
                            Our assessments are screening tools, not diagnostic tools.
                            They help you reflect on your wellbeing and understand whether further support may be useful.
                        </p>
                    </div>
                }
                variant="light"
                className="py-12 md:py-20"
            >
                <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
                    <Link to="/privacy" className="text-brand-teal font-medium hover:underline text-[17px]">Privacy policy</Link>
                    <Link to="/disclaimer" className="text-brand-teal font-medium hover:underline text-[17px]">Disclaimer</Link>
                    <Link to="/contact" className="text-brand-teal font-medium hover:underline text-[17px]">Contact</Link>
                </div>
            </ReadyToStartSection>

            <UsefulLinksSection />

            <Footer />
        </main>
    )
}
