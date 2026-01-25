import { useNavigate } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/hero"
import { InsightSection } from "@/components/insight-section"
import { TestInfoSection, ScreeningItems, InfoList } from "@/components/test-info-section"
import { AdditionalQuestionsSection } from "@/components/additional-questions-section"
import { ReadyToStartSection, ResponsibleApproachSection } from "@/components/cta-sections"
import { FeatureSection } from "@/components/feature-section"
import { ProcessStepCard } from "@/components/test-cards"
import { ClipboardList, BarChart3, FileText, Target, Lightbulb, Brain, ArrowDownRight, Heart, MessageSquare, Waves, UserCheck, Zap } from "lucide-react"

import { Footer } from "@/components/footer"

export default function AutismHome() {
    const navigate = useNavigate();

    const handleStartTest = () => {
        const assessmentId = Date.now().toString();
        navigate(`/autism/${assessmentId}`);
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <Hero
                badge="Adult Screening Questionnaire"
                title="Free Online Autism Test"
                description="Take a quick, clinically informed autism screening questionnaire for adults. Get your results instantly and see whether your traits align with patterns commonly associated with Autism Spectrum Disorder (ASD)."
                footer={
                    <div className="flex flex-col items-center gap-4 mt-2">
                        <p className="text-[15px] text-[#5C6E71]/60">
                            Free, private, and no email required for your basic results.
                        </p>
                        <p className="text-brand-teal font-medium text-[15px]">
                            A simple way to explore autistic traits in adults.
                        </p>
                    </div>
                }
            >
                <Button
                    onClick={handleStartTest}
                    className="h-[56px] px-10 rounded-xl bg-brand-teal text-white hover:bg-brand-glow text-lg font-medium transition-all group"
                >
                    Start the Autism Test
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
            </Hero>

            <InsightSection
                title="About this autism self-assessment"
                className="pb-4 md:pb-6"
                description={
                    <div className="space-y-6">
                        <p>
                            This free autism test uses a blended set of indicators drawn from several well-known adult autism screening frameworks. It explores social communication patterns, sensory differences, thinking styles, and behavioral tendencies commonly associated with autistic traits.
                            It takes only a few minutes to complete and provides a gentle starting point for understanding whether your traits may align with autism in adulthood.
                        </p>
                        <p>
                            You’ll also answer additional questions to help us create a clearer personalized report (optional).
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
                        Start the Autism Test
                        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Button>
                }
            >
                <ProcessStepCard
                    number={1}
                    icon={<ClipboardList className="w-8 h-8" />}
                    title="Answer the questions"
                    description="Structured questions exploring communication style, sensory experiences, focus patterns, routines, emotional understanding, and masking behaviors."
                />
                <ProcessStepCard
                    number={2}
                    icon={<BarChart3 className="w-8 h-8" />}
                    title="View your free results instantly"
                    description="You'll receive your autism screening score right away, along with a simple explanation of what the score generally suggests."
                />
                <ProcessStepCard
                    number={3}
                    icon={<FileText className="w-8 h-8" />}
                    title="Unlock your personalized report"
                    description="Get a deeper look at your traits, patterns, and tendencies with an optional detailed report."
                />
            </FeatureSection>

            <TestInfoSection
                title="How this autism questionnaire works"
                className="pt-0 md:pt-0"
                description={
                    <>
                        <p>
                            Our autism assessment is built using commonly recognized patterns found across several popular adult autism screening tools. These tools typically explore areas like:
                        </p>
                        <div className="py-4">
                            <InfoList
                                items={[
                                    "Social communication and interpretation",
                                    "Sensory sensitivities or preferences",
                                    "Cognitive and emotional processing",
                                    "Masking or camouflaging behaviors",
                                    "Need for routine or predictability",
                                    "Focused or restricted interests"
                                ]}
                            />
                        </div>
                        <p className="text-[16px] text-[#5C6E71]">
                            The questions you’ll answer reflect well-established indicators used in adult autism screening, adapted to be clear and supportive.
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
                            { icon: <Target className="w-5 h-5" />, text: "Social communication differences" },
                            { icon: <Lightbulb className="w-5 h-5" />, text: "Sensory traits" },
                            { icon: <ClipboardList className="w-5 h-5" />, text: "Cognitive processing styles" },
                            { icon: <Heart className="w-5 h-5" />, text: "Emotional understanding" },
                            { icon: <Brain className="w-5 h-5" />, text: "Masking and camouflaging" },
                            { icon: <ArrowDownRight className="w-5 h-5" />, text: "Need for routine or structure" },
                            { icon: <Target className="w-5 h-5" />, text: "Focused interests" },
                            { icon: <ArrowDownRight className="w-5 h-5" />, text: "Social intuition differences" },
                        ]}
                    />
                }
            />

            <AdditionalQuestionsSection
                title="Why we ask additional questions"
                subtitle="Traditional autism questionnaires focus on individual traits. Our additional questions help create a more complete picture by exploring how your traits show up in daily life."
                items={[
                    {
                        icon: <MessageSquare className="w-6 h-6" />,
                        groupNumber: "Group 1",
                        title: "Social communication patterns",
                        description: "How you understand cues, conversations, and expectations"
                    },
                    {
                        icon: <Waves className="w-6 h-6" />,
                        groupNumber: "Group 2",
                        title: "Sensory profile",
                        description: "How you respond to noise, light, touch, texture, or change"
                    },
                    {
                        icon: <Lightbulb className="w-6 h-6" />,
                        groupNumber: "Group 3",
                        title: "Cognitive and emotional processing",
                        description: "How you think, feel, and interpret situations"
                    },
                    {
                        icon: <UserCheck className="w-6 h-6" />,
                        groupNumber: "Group 4",
                        title: "Masking and camouflaging",
                        description: "How often you hide or compensate for traits socially"
                    },
                    {
                        icon: <Zap className="w-6 h-6" />,
                        groupNumber: "Group 5",
                        title: "Day-to-day impact",
                        description: "Comfort levels, overwhelm, routines, and relationships"
                    }
                ]}
                footerNote="These insights help shape a much clearer personalized report."
                className="pt-0 md:pt-0 pb-10 md:pb-16"
            />

            <ResponsibleApproachSection testName="autism" />

            <ReadyToStartSection
                variant="dark"
                title="Ready to get started?"
                subtitle="Choose a free test and get your results in minutes."
            >
                <Button
                    onClick={handleStartTest}
                    className="h-[56px] px-10 rounded-xl bg-white text-brand-teal hover:bg-white/90 text-lg font-medium transition-all group"
                >
                    Start the Autism Test
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
            </ReadyToStartSection>

            <Footer />
        </main>
    )
}
