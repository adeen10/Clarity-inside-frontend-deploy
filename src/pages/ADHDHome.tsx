import { useNavigate } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/hero"
import { InsightSection } from "@/components/insight-section"
import { TestInfoSection, ScreeningItems } from "@/components/test-info-section"
import { AdditionalQuestionsSection } from "@/components/additional-questions-section"
import { ReadyToStartSection, ResponsibleApproachSection } from "@/components/cta-sections"
import { FeatureSection } from "@/components/feature-section"
import { ProcessStepCard } from "@/components/test-cards"
import { ClipboardList, BarChart3, FileText, Target, Lightbulb, Zap, Brain, ArrowDownRight, Eye, Settings, Home } from "lucide-react"

import { Footer } from "@/components/footer"

export default function ADHDHome() {
    const navigate = useNavigate();

    const handleStartTest = () => {
        const assessmentId = Date.now().toString();
        navigate(`/adhd/${assessmentId}`);
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <Hero
                badge="ADHD Screening Questionnaire"
                title="Free Online ADHD Test"
                description="Take a quick, clinically informed ADHD screening questionnaire for adults. Get your results instantly and see whether your traits align with patterns commonly associated with Attention-Deficit/Hyperactivity Disorder (ADHD)."
                footer={
                    <div className="flex flex-col items-center gap-4 mt-2">
                        <p className="text-[15px] text-[#5C6E71]/60">
                            Free, private, and no email required for your basic results.
                        </p>
                        <p className="text-brand-teal font-medium text-[15px]">
                            A simple way to explore ADHD traits in adults.
                        </p>
                    </div>
                }
            >
                <Button
                    onClick={handleStartTest}
                    className="h-[56px] px-10 rounded-xl bg-brand-teal text-white hover:bg-brand-glow text-lg font-medium transition-all group"
                >
                    Start the ADHD Test
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
            </Hero>

            <InsightSection
                title="About this ADHD self-assessment"
                className="pb-4 md:pb-6"
                description={
                    <div className="space-y-6">
                        <p>
                            This free ADHD test uses a series of structured, research-aligned questions designed to screen for common ADHD traits in adults — including attention patterns, distractibility, restlessness, and executive functioning.
                            It takes only a few minutes to complete and gives you a clear starting point for understanding whether ADHD traits may be affecting your daily life.
                        </p>
                        <p>
                            You’ll also answer additional questions to help us create a more meaningful personalized report (optional).
                        </p>
                    </div>
                }
            />

            <FeatureSection
                title="How the test works"
                footer={
                    <Button
                        onClick={handleStartTest}
                        className="h-[56px] px-10 rounded-xl bg-brand-teal text-white hover:bg-brand-glow text-lg font-medium transition-all group"
                    >
                        Start the ADHD Test
                        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Button>
                }
            >
                <ProcessStepCard
                    number={1}
                    icon={<ClipboardList className="w-8 h-8" />}
                    title="Answer the questions"
                    description="Structured questions exploring focus, attention, organization, impulsivity, and day-to-day functioning."
                />
                <ProcessStepCard
                    number={2}
                    icon={<BarChart3 className="w-8 h-8" />}
                    title="View your free results instantly"
                    description="You'll receive your ADHD score straight away, with a simple explanation of what the score typically suggests."
                />
                <ProcessStepCard
                    number={3}
                    icon={<FileText className="w-8 h-8" />}
                    title="Unlock your personalized report"
                    description="See a clearer picture of your ADHD patterns with a more detailed PDF report."
                />
            </FeatureSection>

            <TestInfoSection
                title="How this ADHD questionnaire works"
                className="pt-0 md:pt-0"
                description={
                    <>
                        <p>
                            Our ADHD assessment is built using widely recognized screening indicators for adult ADHD. These indicators are based on commonly reported traits relating to inattention, impulsivity, restlessness, and executive functioning challenges.
                        </p>
                        <p className="italic text-brand-slate/70">
                            The questions are shaped to explore how often certain behaviors or difficulties may appear in your daily life.
                        </p>
                    </>
                }
                links={[
                    { label: "Learn more about how our tests work", href: "/how-it-works" }
                ]}
                sidebar={
                    <ScreeningItems
                        title="What it screens for:"
                        items={[
                            { icon: <Target className="w-5 h-5" />, text: "Difficulty sustaining focus" },
                            { icon: <Lightbulb className="w-5 h-5" />, text: "Forgetfulness and losing track of tasks" },
                            { icon: <ClipboardList className="w-5 h-5" />, text: "Disorganization or trouble planning" },
                            { icon: <Zap className="w-5 h-5" />, text: "Impulsive actions or decisions" },
                            { icon: <Brain className="w-5 h-5" />, text: "Restlessness or difficulty relaxing" },
                            { icon: <ArrowDownRight className="w-5 h-5" />, text: "Trouble following through on tasks" },
                        ]}
                    />
                }
            />

            <AdditionalQuestionsSection
                title="Why we ask additional questions"
                subtitle="Standard ADHD questionnaires only screen for core traits — they don't show how those traits affect your everyday life. Our additional questions help build a more accurate and personal profile by exploring:"
                items={[
                    {
                        icon: <Eye className="w-6 h-6" />,
                        title: "Attention patterns",
                        description: "Distraction, focus shifts, follow-through"
                    },
                    {
                        icon: <Settings className="w-6 h-6" />,
                        title: "Executive functioning",
                        description: "Planning, organization, prioritizing"
                    },
                    {
                        icon: <Zap className="w-6 h-6" />,
                        title: "Impulsivity tendencies",
                        description: "Acting quickly, restlessness, difficulty pausing"
                    },
                    {
                        icon: <Home className="w-6 h-6" />,
                        title: "Daily impact",
                        description: "Work, home, routines, relationships"
                    }
                ]}
                footerNote="These insights help shape your personalized report."
                className="pt-0 md:pt-0 pb-10 md:pb-16"
            />

            <ResponsibleApproachSection testName="ADHD" />

            <ReadyToStartSection
                variant="dark"
                title="Ready to get started?"
                subtitle="Choose a free test and get your results in minutes."
            >
                <Button
                    onClick={handleStartTest}
                    className="h-[56px] px-10 rounded-xl bg-white text-brand-teal hover:bg-white/90 text-lg font-medium transition-all group"
                >
                    Start the ADHD Test
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
            </ReadyToStartSection>

            <Footer />
        </main>
    )
}
