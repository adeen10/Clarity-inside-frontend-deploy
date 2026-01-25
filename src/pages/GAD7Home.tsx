import { useNavigate } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/hero"
import { InsightSection } from "@/components/insight-section"
import { TestInfoSection, GlanceRow, SeverityBands } from "@/components/test-info-section"
import { AdditionalQuestionsSection } from "@/components/additional-questions-section"
import { ReadyToStartSection, ResponsibleApproachSection } from "@/components/cta-sections"
import { FeatureSection } from "@/components/feature-section"
import { ProcessStepCard } from "@/components/test-cards"
import { ClipboardList, BarChart3, FileText, Check, Activity, Brain, MousePointerClick, LayoutGrid, Zap } from "lucide-react"

import { Footer } from "@/components/footer"

export default function GAD7Home() {
    const navigate = useNavigate();

    const handleStartTest = () => {
        // Generate a unique session ID for the assessment
        // In a real app, this might come from the backend or be a UUID
        const assessmentId = Date.now().toString();
        navigate(`/gad-7/${assessmentId}`);
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <Hero
                badge="GAD-7 Based Questionnaire"
                title="Free Online Anxiety Test"
                description="Take a quick, clinically informed anxiety screening questionnaire for adults. Get your results instantly and see whether your traits align with patterns commonly associated with Generalized Anxiety Disorder (GAD)."
                footer={
                    <div className="flex flex-col items-center gap-4 mt-2">
                        <p className="text-[15px] text-[#5C6E71]/60">
                            Free, private, and no email required for your basic results.
                        </p>
                        <p className="text-brand-teal font-medium text-[15px]">
                            A simple way to explore anxiety levels in adults.
                        </p>
                    </div>
                }
            >
                <Button
                    onClick={handleStartTest}
                    className="h-[56px] px-10 rounded-xl bg-brand-teal text-white hover:bg-brand-glow text-lg font-medium transition-all group"
                >
                    Start the Anxiety Test
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
            </Hero>

            <InsightSection
                title="About this anxiety self-assessment"
                className="pb-4 md:pb-6"
                description={
                    <div className="space-y-6">
                        <p>
                            This free anxiety test uses the Generalised Anxiety Disorder 7-item scale (GAD-7) — one of the most recognised tools for screening symptoms of anxiety.
                            It takes less than 2 minutes to complete and gives you a clear starting point to understand your anxiety level.
                        </p>
                        <p>
                            You’ll also answer 15 additional, carefully designed questions to help us build a more meaningful personalised report (optional).
                        </p>
                    </div>
                }
            />

            <FeatureSection
                title="A simple three-step process"
                footer={
                    <Button
                        onClick={handleStartTest}
                        className="h-[56px] px-10 rounded-xl bg-brand-teal text-white hover:bg-brand-glow text-lg font-medium transition-all group"
                    >
                        Start the Anxiety Test
                        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Button>
                }
            >
                <ProcessStepCard
                    number={1}
                    icon={<ClipboardList className="w-8 h-8" />}
                    title="Answer the questions"
                    description="Start by completing the 7 GAD-7 questions, followed by additional questions that explore physical symptoms, thoughts, behaviours and daily impact."
                />
                <ProcessStepCard
                    number={2}
                    icon={<BarChart3 className="w-8 h-8" />}
                    title="View your free results instantly"
                    description="You'll see your GAD-7 score straight away, with a simple explanation of what that score commonly represents."
                />
                <ProcessStepCard
                    number={3}
                    icon={<FileText className="w-8 h-8" />}
                    title="Unlock your personalised report (optional)"
                    description="For a clearer picture of your patterns, you can choose to unlock a detailed PDF based on all 22 questions."
                />
            </FeatureSection>

            <TestInfoSection
                title="What is the GAD-7 anxiety questionnaire?"
                className="pt-0 md:pt-0"
                description={
                    <>
                        <p>
                            Our anxiety test is built on the <strong>GAD-7</strong>, developed by <strong>Dr. Robert L. Spitzer, Dr. Janet B.W. Williams, and Dr. Kurt Kroenke.</strong> First published in 2006, the GAD-7 is used worldwide in healthcare and research as a reliable way to screen for anxiety symptoms.
                        </p>
                        <div className="pt-8 space-y-4 text-brand-slate">
                            <h4 className="font-bold text-lg">Why it's trusted:</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-brand-teal flex items-center justify-center text-white flex-shrink-0">
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                    </div>
                                    <span className="text-[16px]">Backed by peer-reviewed research</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-brand-teal flex items-center justify-center text-white flex-shrink-0">
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                    </div>
                                    <span className="text-[16px]">Used by NHS, APA & Mayo Clinic</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-brand-teal flex items-center justify-center text-white flex-shrink-0">
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                    </div>
                                    <span className="text-[16px]">Measures anxiety severity</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-brand-teal flex items-center justify-center text-white flex-shrink-0">
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                    </div>
                                    <span className="text-[16px]">Quick and simple</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-brand-teal flex items-center justify-center text-white flex-shrink-0">
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                    </div>
                                    <span className="text-[16px]">Internally validated</span>
                                </div>
                            </div>
                        </div>
                    </>
                }
                links={[
                    { label: "PubMed (original paper)", href: "https://pubmed.ncbi.nlm.nih.gov/16717171/" },
                    { label: "NHS Overview", href: "https://www.nhs.uk/mental-health/conditions/generalized-anxiety-disorder/diagnosis/" },
                ]}
                sidebar={
                    <>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-brand-teal rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                7
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-brand-slate font-bold leading-none mb-1">GAD-7 at a glance</h3>
                                <span className="text-brand-slate/40 text-sm">Quick reference</span>
                            </div>
                        </div>
                        <div className="space-y-0">
                            <GlanceRow label="Questions" value="7" />
                            <GlanceRow label="Score range" value="0–21" />
                            <GlanceRow label="Severity bands" value="4 levels" />
                            <GlanceRow label="Status" value="Evidence-based" />
                        </div>
                        <SeverityBands />
                    </>
                }
            />

            <AdditionalQuestionsSection
                title="Why we ask additional questions"
                subtitle="The GAD-7 measures seven symptom areas. To understand your anxiety pattern more fully, we include 15 extra questions exploring:"
                items={[
                    {
                        icon: <Activity className="w-6 h-6" />,
                        groupNumber: "Group 1",
                        title: "Physical symptoms",
                        tags: ["Tension", "Restlessness", "Sleep", "Physical reactivity"]
                    },
                    {
                        icon: <Brain className="w-6 h-6" />,
                        groupNumber: "Group 2",
                        title: "Cognitive patterns",
                        tags: ["Overthinking", "Intrusive thoughts", "Difficulty switching off"]
                    },
                    {
                        icon: <MousePointerClick className="w-6 h-6" />,
                        groupNumber: "Group 3",
                        title: "Behavioural habits",
                        tags: ["Avoidance", "Reassurance seeking", "Perfectionism"]
                    },
                    {
                        icon: <LayoutGrid className="w-6 h-6" />,
                        groupNumber: "Group 4",
                        title: "Impact on daily life",
                        tags: ["Concentration", "Routine disruption", "Emotional load"]
                    },
                    {
                        icon: <Zap className="w-6 h-6" />,
                        groupNumber: "Group 5",
                        title: "Your main trigger",
                        tags: ["Work", "Social settings", "Conflict", "Health worries", "Uncertainty", "Finances"]
                    }
                ]}
                footerNote="These questions help create a clearer, more accurate <strong>anxiety profile</strong> — something a simple score can't offer alone."
                className="pt-0 md:pt-0 pb-10 md:pb-16"
            />

            <ResponsibleApproachSection testName="anxiety" />

            <ReadyToStartSection
                variant="dark"
                title="Ready to get started?"
                subtitle="Choose a free test and get your results in minutes."
            >
                <Button
                    onClick={handleStartTest}
                    className="h-[56px] px-10 rounded-xl bg-white text-brand-teal hover:bg-white/90 text-lg font-medium transition-all group"
                >
                    Start the Anxiety Test
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
            </ReadyToStartSection>

            <Footer />
        </main>
    )
}
