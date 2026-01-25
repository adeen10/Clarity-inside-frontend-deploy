import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { InsightSection } from "@/components/insight-section"
import { FeatureSection } from "@/components/feature-section"
import { ResponsibleApproachSection, ReadyToStartSection } from "@/components/cta-sections"
import { TraitPill } from "@/components/test-cards"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Check, BookOpen, Heart, ShieldCheck } from "lucide-react"

function CreationStepCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-white rounded-[32px] p-8 md:p-10 flex flex-col items-start text-left h-full shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#E8F2F2] flex items-center justify-center text-brand-teal mb-8">
                {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-slate mb-4 font-heading">
                {title}
            </h3>
            <p className="text-[#5C6E71] text-[16px] leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default function About() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <PageHero
                title="About Clarity Inside"
                description={
                    <div className="space-y-6">
                        <p>
                            A calm space created to help people understand their mental wellbeing through simple, research-informed mental health self assessments.
                        </p>
                        <p>
                            Clarity Inside was built to make mental health self-assessment feel clear, accessible, and reassuring — without overwhelming language or clinical barriers.
                        </p>
                        <p>
                            Our goal is to help people better understand patterns related to anxiety, attention and focus, and autistic traits, and to feel more confident about what steps they may want to take next.
                        </p>
                    </div>
                }
            />

            <InsightSection
                title="Our Mission"
                bgColor="#F9FAF9"
                textColor="text-brand-slate"
                subTextColor="text-[#5C6E71]"
                className="bg-white"
                description={
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <p>
                                Clarity Inside exists to offer a calm, private, and responsible way to check in with your mental wellbeing.
                            </p>
                            <p>
                                We believe everyone should have access to research-aligned tools that make it easier to reflect on experiences related to anxiety, ADHD, and autism — without pressure, judgment, or labels.
                            </p>
                            <p>
                                Our assessments are designed as a starting point: a way to pause, reflect, and decide whether further exploration, self-support, or professional guidance might be helpful.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
                            <Link to="/gad-7" className="text-brand-teal font-medium hover:underline text-[17px]">Explore the Anxiety Test</Link>
                            <Link to="/adhd" className="text-brand-teal font-medium hover:underline text-[17px]">Take the ADHD Test</Link>
                            <Link to="/autism" className="text-brand-teal font-medium hover:underline text-[17px]">Start the Autism Test</Link>
                        </div>
                    </div>
                }
            />
            <section className="bg-[#F9FAF9] py-12 md:py-20 px-6 md:px-[75px]">
                <div className="max-w-[1290px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Left Column */}
                    <div className="flex flex-col items-start text-left">
                        <h2 className="text-3xl md:text-[40px] font-bold text-brand-slate mb-8 tracking-tight font-heading">
                            Who we are
                        </h2>

                        <div className="space-y-6 text-[17px] md:text-[18px] text-[#5C6E71] leading-relaxed mb-10">
                            <p>
                                Clarity Inside is created by the team behind Neurodirect, a trusted online platform that helps people better understand neurodiversity and connect with qualified professionals.
                            </p>
                            <p>
                                Through building and running Neurodirect, we've spent years translating complex psychological and wellbeing concepts into clear, human explanations that people can actually use. That experience shapes everything we create at Clarity Inside — from how our assessments are structured to how results are written.
                            </p>
                            <p>
                                Our focus is always on clarity, responsibility, and emotional reassurance.
                            </p>
                        </div>

                        <Link to="/" className="text-brand-teal font-medium hover:underline flex items-center gap-2 text-[17px]">
                            View all available assessments <span className="text-xl">→</span>
                        </Link>
                    </div>

                    {/* Right Column: Experience Card */}
                    <div className="bg-white rounded-[42px] p-8 md:p-12 shadow-sm border border-brand-fog/5">
                        <h3 className="text-2xl font-bold text-brand-slate mb-10">Our experience includes</h3>
                        <div className="space-y-4">
                            <TraitPill
                                icon={<Check className="w-5 h-5" />}
                                text="Creating accessible mental wellbeing and neurodiversity content"
                            />
                            <TraitPill
                                icon={<Check className="w-5 h-5" />}
                                text="Building platforms used by thousands of people each month"
                            />
                            <TraitPill
                                icon={<Check className="w-5 h-5" />}
                                text="Working alongside networks of registered psychologists and specialists"
                            />
                            <TraitPill
                                icon={<Check className="w-5 h-5" />}
                                text="Turning research-backed frameworks into practical self-reflection tools"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <FeatureSection
                title="How we create our assessments"
                subtitle="Our self-assessments are carefully designed to be informative, responsible, and easy to understand."
                variant="dark"
                className="bg-[#14716F]"
                footer={
                    <Link to="/how-it-works" className="text-white font-medium hover:underline flex items-center gap-2">
                        Learn more about how our assessments work <span className="text-lg">→</span>
                    </Link>
                }
            >
                <CreationStepCard
                    icon={<BookOpen className="w-7 h-7" />}
                    title="Research-informed frameworks"
                    description="Our assessments are informed by established psychological research and widely recognized screening tools."
                />
                <CreationStepCard
                    icon={<Heart className="w-7 h-7" />}
                    title="Clear, responsible language"
                    description="Every question and explanation is written to be calm, understandable, and non-alarmist."
                />
                <CreationStepCard
                    icon={<ShieldCheck className="w-7 h-7" />}
                    title="Reviewed and maintained"
                    description="We regularly review and update our assessments to ensure they remain responsible and accurate."
                />
            </FeatureSection>

            <ResponsibleApproachSection
                title="Your privacy and wellbeing come first"
                icon={<ShieldCheck className="w-8 h-8" />}
                className="bg-[#F9FAF9]"
                description={
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <p>
                                You can complete any free test on Clarity Inside without creating an account or sharing personal details.
                            </p>
                            <p>
                                If you choose to purchase a personalized PDF report, we collect only what's necessary to deliver it to you: your email address and secure payment details processed through Stripe.
                            </p>
                            <p>
                                We never store card information and never collect more data than needed. Your email is used only for delivering your report and essential purchase-related communication.
                            </p>
                        </div>
                        <p className="italic text-brand-slate/60 text-[16px]">
                            Clarity Inside assessments are designed for informational and wellbeing purposes only. They are not diagnostic or clinical tools, but a supportive way to reflect on your experiences and recognize when additional support may be useful.
                        </p>
                    </div>
                }
            />

            <InsightSection
                title="Why we built Clarity Inside"
                bgColor="#F9FAF9"
                textColor="text-brand-slate"
                subTextColor="text-[#5C6E71]"
                className="bg-white"
                description={
                    <div className="flex flex-col items-start text-left max-w-[800px] mx-auto">
                        <div className="space-y-6 text-[18px] md:text-[20px]">
                            <p>
                                Through our work in neurodiversity and mental wellbeing, we saw how many people felt unsure whether their experiences "counted" — or felt overwhelmed by clinical environments when they were simply looking for clarity.
                            </p>
                            <p className="font-bold text-brand-slate">
                                Clarity Inside was created to make that first step easier.
                            </p>
                            <p>
                                A calm space to explore patterns, reflect on mental wellbeing, and approach the next step with more confidence and less confusion.
                            </p>

                            <div className="pt-4 space-y-1 text-brand-slate">
                                <p>Not clinical.</p>
                                <p>Not confrontational.</p>
                                <p>Just clear, supportive insight when you need it.</p>
                            </div>
                        </div>

                        <Link to="/" className="mt-10 text-brand-teal font-medium hover:underline flex items-center gap-2 text-[17px]">
                            Explore all tests <span className="text-xl">→</span>
                        </Link>
                    </div>
                }
            />

            <ReadyToStartSection
                title="Where to go next"
                subtitle="Choose a free test and get your results in minutes."
                variant="light"
                footerLinkText="Learn how our assessments work"
                footerLinkHref="/how-it-works"
                className="bg-[#F4F9F9]"
            >
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link to="/gad-7">
                        <Button className="h-[56px] px-8 rounded-2xl bg-brand-teal text-white hover:bg-brand-glow font-bold text-[16px]">
                            Take the Anxiety Test
                        </Button>
                    </Link>
                    <Link to="/adhd">
                        <Button className="h-[56px] px-8 rounded-2xl bg-brand-teal text-white hover:bg-brand-glow font-bold text-[16px]">
                            Take the ADHD Test
                        </Button>
                    </Link>
                    <Link to="/autism">
                        <Button className="h-[56px] px-8 rounded-2xl bg-brand-teal text-white hover:bg-brand-glow font-bold text-[16px]">
                            Take the Autism Test
                        </Button>
                    </Link>
                </div>
            </ReadyToStartSection>

            <Footer />
        </main>
    )
}
