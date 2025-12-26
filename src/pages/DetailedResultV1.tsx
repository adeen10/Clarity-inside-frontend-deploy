import { useLocation } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Brain, Zap, Shield, FileText, Lock } from "lucide-react"

export default function DetailedResultV1() {
    const location = useLocation()
    const { score = 0 } = location.state || {}

    const getAnxietyLevel = (score: number) => {
        if (score <= 4) return { label: "Minimal anxiety", color: "text-[#10B981]", hex: "#10B981", bg: "bg-[#10B981]", desc: "Your responses suggest that anxiety is currently at a minimal level." };
        if (score <= 9) return { label: "Mild anxiety", color: "text-[#FBBF24]", hex: "#FBBF24", bg: "bg-[#FBBF24]", desc: "Your responses suggest you may be experiencing mild anxiety." };
        if (score <= 14) return { label: "Moderate anxiety", color: "text-[#F59E0B]", hex: "#F59E0B", bg: "bg-[#F59E0B]", desc: "Your responses suggest that anxiety may be having a noticeable impact on how you feel and function." };
        return { label: "Severe anxiety", color: "text-[#EF4444]", hex: "#EF4444", bg: "bg-[#EF4444]", desc: "Your responses suggest that anxiety may be having a significant impact on your daily life." };
    }

    const level = getAnxietyLevel(score)

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F9F8] text-[#2D7A78] text-xs font-medium mb-6 border border-[#E8F3F1]">
                    <div className="w-4 h-4 rounded-full bg-[#2D7A78] flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    Assessment Complete
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">Your Anxiety Profile</h1>
                <p className="text-[#6B7280] text-lg mb-12">Based on the GAD-7 clinical assessment</p>

                {/* Visual Score Card */}
                <div className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#F3F4F6] mb-8 flex flex-col md:flex-row items-center gap-10 text-left">
                    <div className="relative w-48 h-48 shrink-0">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#F3F4F6" strokeWidth="8" />
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke={level.hex}
                                strokeWidth="8"
                                strokeDasharray="282.7"
                                strokeDashoffset={282.7 * (1 - score / 21)}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className={`text-5xl font-bold ${level.color}`}>{score}</span>
                            <span className="text-sm text-[#9CA3AF]">of 21</span>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3F9F8] text-[#2D7A78] text-sm font-medium mb-4 border border-[#E8F3F1]">
                            <Zap className="w-4 h-4" />
                            {level.label}
                        </div>
                        <p className="text-[#4B5563] text-lg leading-relaxed mb-6">
                            {level.desc}
                        </p>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#10B981]" /> 0–4 Minimal
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#FBBF24]" /> 5–9 Mild
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#F59E0B]" /> 10–14 Moderate
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#EF4444]" /> 15–21 Severe
                            </div>
                        </div>
                    </div>
                </div>

                {/* Premium Upgrade Section */}
                <div className="relative rounded-[40px] p-1 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E0F2F1] via-[#FFFFFF] to-[#F1F8E9]" />
                    <div className="relative bg-white/40 backdrop-blur-sm rounded-[30px] md:rounded-[38px] p-5 md:p-12 border border-white/50 shadow-sm">
                        <div className="flex items-center gap-4 mb-8 text-left">
                            <div className="w-12 h-12 rounded-2xl bg-[#D1E9E7] flex items-center justify-center text-[#2D7A78]">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-[#1F2937]">Unlock Your Personalised Report</h2>
                                <p className="text-[#6B7280]">Go beyond the score with detailed insights tailored to your responses</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                { icon: Brain, title: "Anxiety Patterns", desc: "Understand your thinking style" },
                                { icon: Zap, title: "Physical Symptoms", desc: "How stress affects your body" },
                                { icon: Sparkles, title: "Personal Triggers", desc: "What increases your anxiety" },
                                { icon: Shield, title: "Coping Strategies", desc: "Personalised recommendations" },
                            ].map((feature, i) => (
                                <div
                                    key={i}
                                    className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white flex items-center gap-4 text-left"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#2D7A78] shadow-sm">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#1F2937] text-sm">{feature.title}</h3>
                                        <p className="text-[#6B7280] text-xs">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sample Preview */}
                        <div className="bg-[#F9FAFB] rounded-2xl p-6 border border-[#F3F4F6] text-left mb-10 relative">
                            <div className="flex items-center gap-2 text-[#6B7280] text-sm font-medium mb-4">
                                <FileText className="w-4 h-4" />
                                Sample from your report
                            </div>
                            <div className="h-40 bg-gradient-to-b from-transparent to-[#F9FAFB]/50" />
                            <div className="absolute top-6 right-6 text-[#9CA3AF]">
                                <Lock className="w-5 h-5" />
                            </div>
                        </div>

                        <div className="text-xs text-[#9CA3AF] mb-6">Instant access · PDF download · No subscription</div>

                        <Button className="w-full h-auto py-4 md:h-16 rounded-full bg-[#13726F] hover:bg-[#0E5B58] text-white text-[14px] xs:text-base md:text-lg font-bold shadow-xl shadow-[#13726F]/20 mb-6 px-4 whitespace-normal leading-tight flex items-center justify-center text-center">
                            Unlock my personalised report — $7.99
                        </Button>

                        <div className="flex items-center justify-center gap-8 text-[#9CA3AF] text-xs font-medium">
                            <span className="flex items-center gap-1.5">
                                <Lock className="w-3.5 h-3.5" /> Secure payment
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Shield className="w-3.5 h-3.5" /> Privacy protected
                            </span>
                        </div>
                    </div>
                </div>

                <button className="mt-12 text-[#9CA3AF] text-sm hover:underline">Continue with my basic result</button>
            </div>

            <Footer />
        </main>
    )
}
