import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { UsefulLinksSection } from "@/components/useful-links-section"
import { InfoList } from "@/components/test-info-section"
import { Clock, Mail, AlertTriangle } from "lucide-react"

export default function Contact() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <PageHero
                title="Get in Touch"
                description="If you have a question about our assessments, your results, or your personalized report, we're here to help."
                footer={
                    <span className="flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4" />
                        We aim to respond within 24—48 hours on weekdays.
                    </span>
                }
            />

            <section className="bg-white py-12 md:py-20 px-6 md:px-[75px]">
                <div className="max-w-[1290px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[120px] items-start">
                    {/* Left Column: Email Info */}
                    <div className="flex flex-col items-start text-left pt-2">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-full bg-brand-teal/5 flex items-center justify-center text-brand-teal border border-brand-teal/10">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-slate">Email</h2>
                        </div>

                        <p className="text-[#5C6E71] text-lg mb-8 max-w-sm leading-relaxed">
                            For general questions or support with your personalised report, you can reach us directly at:
                        </p>

                        <a href="mailto:hello@clarity-inside.com" className="text-brand-teal text-xl font-bold mb-10 hover:underline">
                            hello@clarity-inside.com
                        </a>

                        <p className="text-[#5C6E71]/60 text-[15px] leading-relaxed max-w-sm">
                            We never share your email with anyone, and we only use it to respond to your message.
                        </p>
                    </div>

                    {/* Right Column: Form */}
                    <div className="flex flex-col items-start w-full">
                        <h2 className="text-2xl font-bold text-brand-slate mb-10">Send us a message</h2>
                        <form className="w-full space-y-8">
                            <div className="w-full space-y-3">
                                <label className="text-[16px] text-[#5C6E71] font-medium">Name (optional)</label>
                                <input
                                    className="w-full h-14 px-5 rounded-2xl bg-white border border-[#E9E9E9] focus:outline-none focus:ring-2 focus:ring-brand-teal/10 transition-all"
                                    placeholder=""
                                />
                            </div>
                            <div className="w-full space-y-3">
                                <label className="text-[16px] text-[#5C6E71] font-medium">Email *</label>
                                <input
                                    className="w-full h-14 px-5 rounded-2xl bg-white border border-[#E9E9E9] focus:outline-none focus:ring-2 focus:ring-brand-teal/10 transition-all"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className="w-full space-y-3">
                                <label className="text-[16px] text-[#5C6E71] font-medium">Your message *</label>
                                <textarea
                                    className="w-full h-48 p-5 rounded-2xl bg-white border border-[#E9E9E9] focus:outline-none focus:ring-2 focus:ring-brand-teal/10 transition-all resize-none"
                                    placeholder=""
                                    required
                                />
                            </div>

                            <div className="w-full flex flex-col items-center gap-6">
                                <button className="w-full h-16 rounded-2xl bg-brand-teal text-white text-lg font-bold hover:bg-brand-glow transition-all shadow-lg shadow-brand-teal/10">
                                    Send Message
                                </button>
                                <p className="text-[#5C6E71]/60 text-[15px]">
                                    We will get back to you as soon as possible.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* When to Contact Section */}
            <section className="bg-[#F8F9FA] py-12 md:py-24 px-6 md:px-[75px]">
                <div className="max-w-[850px] mx-auto flex flex-col items-center">
                    <h2 className="text-3xl md:text-[40px] font-bold text-brand-slate mb-12 text-center font-heading tracking-tight">
                        When to contact us
                    </h2>

                    <div className="w-full space-y-8">
                        {/* Reasons Card */}
                        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-brand-fog">
                            <p className="text-[17px] font-medium text-brand-slate/60 mb-8">
                                You're welcome to reach out if you:
                            </p>
                            <InfoList
                                items={[
                                    "Have a question about how our tests work",
                                    "Need help accessing your personalised report",
                                    "Want to understand the information in your results",
                                    "Have feedback or suggestions for improving the platform"
                                ]}
                            />
                        </div>

                        {/* Safety Note Card */}
                        <div className="bg-[#FCFAF9] rounded-[24px] p-8 flex items-start gap-6 border border-brand-teal/5">
                            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <div className="flex flex-col text-left">
                                <h4 className="text-[17px] font-bold text-brand-slate mb-3">Important Safety Note</h4>
                                <p className="text-[#5C6E71] leading-relaxed">
                                    We're not able to offer clinical advice or crisis support. If you're feeling overwhelmed or concerned about your wellbeing, please contact a <a href="#" className="text-brand-teal font-bold hover:underline">qualified professional</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <UsefulLinksSection />

            <Footer />
        </main>
    )
}
