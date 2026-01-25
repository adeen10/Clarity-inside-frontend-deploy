import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Hero } from "@/components/hero"
import { InsightSection } from "@/components/insight-section"
import { FeatureSection } from "@/components/feature-section"
import { FeaturedTestCard, ProcessStepCard, TraitPill } from "@/components/test-cards"
import { SplitInfoSection, ReadyToStartSection } from "@/components/cta-sections"
import { Brain, Lightbulb, Puzzle, ClipboardList, BarChart3, FileText, Target, Ear, Heart, Calendar, Sparkles, ShieldCheck } from "lucide-react"

export default function Landing() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <Hero
                title="Free Online Mental Health Tests"
                description="Quick, research-informed self-assessments for anxiety, ADHD, and autism. Get instant results and better understand your mental wellbeing in minutes."
                footer={
                    <div className="flex flex-col items-center gap-6 mt-4">
                        <div className="flex flex-wrap items-center justify-center gap-6 text-[15px] text-[#5C6E71]/70">
                            <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                                Private
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                                No sign-up required
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                                Instant results
                            </span>
                        </div>
                        <div className="flex gap-8">
                            <Link to="/about" className="text-brand-teal font-medium hover:underline text-[15px]">Learn more about us</Link>
                            <Link to="/how-it-works" className="text-brand-teal font-medium hover:underline text-[15px]">How our tests work</Link>
                        </div>
                    </div>
                }
            >
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link to="/gad-7">
                        <Button className="h-[52px] px-8 rounded-xl bg-brand-teal text-white hover:bg-brand-glow text-[16px] font-medium transition-all">
                            Take the Anxiety Test
                        </Button>
                    </Link>
                    <Link to="/adhd">
                        <Button className="h-[52px] px-8 rounded-xl bg-brand-teal text-white hover:bg-brand-glow text-[16px] font-medium transition-all">
                            Take the ADHD Test
                        </Button>
                    </Link>
                    <Link to="/autism">
                        <Button className="h-[52px] px-8 rounded-xl bg-brand-teal text-white hover:bg-brand-glow text-[16px] font-medium transition-all">
                            Take the Autism Test
                        </Button>
                    </Link>
                </div>
            </Hero>

            <InsightSection
                title="A simple way to understand your mental wellbeing"
                description={
                    <div className="space-y-6">
                        <p>
                            Clarity Inside offers short, evidence-informed self-assessments designed to help you explore patterns related to anxiety, ADHD, and autistic traits.
                        </p>
                        <p>
                            Each test takes only a few minutes to complete and provides instant feedback to support self-reflection, awareness, and next-step decision-making — without pressure or judgment.
                        </p>
                    </div>
                }
            />

            <FeatureSection
                title="Our Tests"
                subtitle="Choose a free assessment to begin understanding your mental wellbeing"
                className="pb-8 md:pb-12"
            >
                <FeaturedTestCard
                    icon={<Brain className="w-8 h-8" />}
                    title="Anxiety Test"
                    description="Understand patterns related to worry, restlessness, and anxiety-related symptoms using a widely recognized framework."
                    ctaText="Take the Anxiety Test"
                    ctaLink="/gad-7"
                />
                <FeaturedTestCard
                    icon={<Lightbulb className="w-8 h-8" />}
                    title="ADHD Test"
                    description="Explore attention, focus, impulsivity, and organizational challenges commonly linked to ADHD in adults."
                    ctaText="Take the ADHD Test"
                    ctaLink="/adhd"
                />
                <FeaturedTestCard
                    icon={<Puzzle className="w-8 h-8" />}
                    title="Autism Test"
                    description="Reflect on communication style, sensory sensitivity, and behavioral traits associated with autism."
                    ctaText="Take the Autism Test"
                    ctaLink="/autism"
                />
            </FeatureSection>

            <FeatureSection
                title="How our free tests work"
                className="pb-8 md:pb-12"
                footer={
                    <Link to="/how-it-works" className="text-brand-teal font-medium hover:underline flex items-center gap-2">
                        Learn how it works <span className="text-lg">→</span>
                    </Link>
                }
            >
                <ProcessStepCard
                    number={1}
                    icon={<ClipboardList className="w-8 h-8" />}
                    title="Answer short questions"
                    description="Based on established research and recognized screening frameworks"
                />
                <ProcessStepCard
                    number={2}
                    icon={<BarChart3 className="w-8 h-8" />}
                    title="See your instant results"
                    description="Get a clear score and explanation right away — no waiting"
                />
                <ProcessStepCard
                    number={3}
                    icon={<FileText className="w-8 h-8" />}
                    title="Optional detailed report"
                    description="Unlock a personalized PDF with deeper insights and next steps"
                />
            </FeatureSection>

            <FeatureSection
                title="What our self-assessments explore"
                cols={2}
                className="pb-8 md:pb-12"
                footer={
                    <p className="text-[#5C6E71] italic text-sm md:text-base">
                        Many people notice overlapping traits across anxiety, ADHD, and autism.
                    </p>
                }
            >
                <TraitPill
                    icon={<Target className="w-5 h-5" />}
                    text="Attention, focus, and impulsivity"
                />
                <TraitPill
                    icon={<Brain className="w-5 h-5" />}
                    text="Worry, overwhelm, and restlessness"
                />
                <TraitPill
                    icon={<Ear className="w-5 h-5" />}
                    text="Sensory sensitivity and social comfort"
                />
                <TraitPill
                    icon={<Heart className="w-5 h-5" />}
                    text="Emotional regulation patterns"
                />
                <TraitPill
                    icon={<Calendar className="w-5 h-5" />}
                    text="Daily functioning and impact"
                />
                <TraitPill
                    icon={<Sparkles className="w-5 h-5" />}
                    text="Behavioral and cognitive traits"
                />
            </FeatureSection>

            <SplitInfoSection
                title="A starting point — not a diagnosis"
                description={
                    <>
                        <p>
                            Clarity Inside assessments are designed for self-understanding and reflection, not diagnosis.
                        </p>
                        <p>
                            They offer a helpful starting point for exploring your experiences and deciding what steps, if any, you'd like to take next.
                        </p>
                    </>
                }
                linkText="Learn how our assessments are designed"
                linkHref="/design"
                graphic={
                    <div className="relative w-full max-w-[440px] aspect-square bg-[#F8F9FA] rounded-[48px] flex items-center justify-center p-12">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[85%] h-[85%] rounded-full border border-brand-teal/5 bg-brand-teal/[0.02]" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[65%] h-[65%] rounded-full border border-brand-teal/10 bg-brand-teal/[0.04]" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[45%] h-[45%] rounded-full border border-brand-teal/20 bg-brand-teal/[0.08]" />
                        </div>
                        <div className="w-14 h-14 rounded-full bg-[#E8F2F2] flex items-center justify-center text-brand-teal z-10 border border-brand-teal/10 shadow-sm">
                            <ShieldCheck className="w-7 h-7" />
                        </div>
                    </div>
                }
            />

            <ReadyToStartSection
                title="Ready to get started?"
                subtitle="Choose a free test and get your results in minutes."
                footerLinkText="View all tests"
                footerLinkHref="/tests"
            >
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link to="/gad-7">
                        <Button className="h-[56px] px-8 rounded-xl bg-brand-teal text-white hover:bg-brand-glow text-[16px] font-medium transition-all group">
                            Take the Anxiety Test
                        </Button>
                    </Link>
                    <Link to="/adhd">
                        <Button className="h-[56px] px-8 rounded-xl bg-brand-teal text-white hover:bg-brand-glow text-[16px] font-medium transition-all group">
                            Take the ADHD Test
                        </Button>
                    </Link>
                    <Link to="/autism">
                        <Button className="h-[56px] px-8 rounded-xl bg-brand-teal text-white hover:bg-brand-glow text-[16px] font-medium transition-all group">
                            Take the Autism Test
                        </Button>
                    </Link>
                </div>
            </ReadyToStartSection>

            <Footer />
        </main>
    )
}
