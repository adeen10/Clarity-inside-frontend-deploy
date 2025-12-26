import { useLocation } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function DetailedResultV2() {
    const location = useLocation()
    const { score = 0 } = location.state || {}

    const getAnxietyLevel = (score: number) => {
        if (score <= 4) return { label: "Minimal anxiety", color: "text-[#10B981]", bg: "bg-[#10B981]", desc: "Your responses suggest minimal anxiety symptoms. However, occasional anxiety is normal and doesn't necessarily indicate a problem." };
        if (score <= 9) return { label: "Mild anxiety", color: "text-[#FBBF24]", bg: "bg-[#FBBF24]", desc: "Your responses suggest you may be experiencing mild anxiety." };
        if (score <= 14) return { label: "Moderate anxiety", color: "text-[#F59E0B]", bg: "bg-[#F59E0B]", desc: "Your responses suggest that anxiety may be having a noticeable impact on how you feel and function." };
        return { label: "Severe anxiety", color: "text-[#EF4444]", bg: "bg-[#EF4444]", desc: "Your responses suggest that anxiety may be having a significant impact on your daily life." };
    }

    const level = getAnxietyLevel(score)

    return (
        <main className="min-h-screen bg-[#F8FAFB]">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F3F1] text-[#2D7A78] text-xs font-medium mb-6">
                    <div className="w-4 h-4 rounded-full bg-[#2D7A78] flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    Assessment Complete
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">Your Anxiety Profile</h1>
                <p className="text-[#6B7280] text-lg mb-12">Based on the GAD-7 clinical assessment</p>

                {/* Score Card */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#E5E7EB] mb-8">
                    <div className="relative inline-block mb-6">
                        <span className={`text-7xl font-light ${level.color}`}>{score}</span>
                        <span className="text-2xl text-[#9CA3AF] ml-1">/ 21</span>
                    </div>
                    <div className="text-sm font-medium text-[#9CA3AF] uppercase tracking-wider mb-6">GAD-7 Score</div>

                    <div className={`inline-flex items-center justify-center px-6 py-2 rounded-full border border-[#D1FAE5] bg-opacity-10 ${level.bg} ${level.color} font-medium mb-10`}>
                        {level.label}
                    </div>

                    {/* Severity Scale */}
                    <div className="max-w-md mx-auto mb-10">
                        <div className="h-2 w-full rounded-full bg-gradient-to-r from-[#10B981] via-[#FBBF24] to-[#EF4444] mb-2 relative">
                            <div
                                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white bg-[#111827] shadow-sm transition-all duration-500"
                                style={{ left: `${Math.min(100, (score / 21) * 100)}%` }}
                            />
                        </div>
                        <div className="flex justify-between text-[10px] text-[#9CA3AF] uppercase font-bold tracking-tighter">
                            <span>Minimal</span>
                            <span>Mild</span>
                            <span>Moderate</span>
                            <span>Severe</span>
                        </div>
                    </div>

                    <p className="text-[#4B5563] leading-relaxed max-w-lg mx-auto">
                        {level.desc}
                    </p>
                </div>

                {/* Features Card */}
                <div className="bg-[#F3F9F8] rounded-3xl p-8 md:p-12 border border-[#E8F3F1] mb-12">
                    <h2 className="text-xl font-bold text-[#1F2937] mb-8">Your full personalised report includes</h2>

                    <ul className="space-y-4 max-w-sm mx-auto text-left mb-12">
                        {[
                            "A breakdown of your anxiety patterns",
                            "Your main anxiety triggers",
                            "How anxiety may be affecting daily life",
                            "Personalised coping strategies",
                            "Clear next steps and guidance",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-[#D1E9E7] flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-[#2D7A78]" />
                                </div>
                                <span className="text-[#4B5563]">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="text-xs text-[#9CA3AF] mb-6">One-time purchase · No subscription · Not a diagnosis</div>

                    <Button className="w-full h-auto py-4 md:h-16 rounded-full bg-[#13726F] hover:bg-[#0E5B58] text-white text-[14px] xs:text-base md:text-lg font-bold shadow-lg shadow-[#13726F]/20 px-4 whitespace-normal leading-tight flex items-center justify-center text-center">
                        Unlock my personalised report — $7.99
                    </Button>
                </div>

                <button className="text-[#9CA3AF] text-sm hover:underline">Continue with my basic result</button>
            </div>

            <Footer />
        </main>
    )
}
