import { Link } from "react-router-dom"
import { Check } from "lucide-react"

export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] flex flex-col">
            {/* Centered Assessment Header */}
            <header className="py-6 border-b border-slate-100 flex justify-center bg-white">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#137077] rounded-lg overflow-hidden flex items-center justify-center">
                        <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Clarity Inside Logo"
                            width={40}
                            height={40}
                            className="opacity-80"
                        />
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="font-bold text-slate-800 text-lg">Clarity</span>
                        <span className="text-slate-500 font-medium text-sm">Inside</span>
                    </div>
                </Link>
            </header>

            <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center max-w-2xl mx-auto">
                {/* Success Icon */}
                <div className="w-16 h-16 rounded-full bg-[#137077]/10 flex items-center justify-center mb-8">
                    <div className="w-12 h-12 rounded-full bg-[#137077] flex items-center justify-center">
                        <Check className="text-white w-6 h-6" />
                    </div>
                </div>

                {/* Messaging */}
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 tracking-tight">Your report is on its way</h1>

                <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-xl">
                    Thank you for your purchase. Your personalised anxiety report is being prepared and will be sent to your email
                    shortly.
                </p>

                {/* Spam Notice Box */}
                <div className="w-full bg-[#F9F7F5] border border-slate-100 rounded-3xl py-8 px-6 text-slate-500 text-sm md:text-base font-medium">
                    If you don't see it within a few minutes, please check your spam folder.
                </div>
            </div>

            {/* Simplified Footer */}
            <footer className="py-8 border-t border-slate-100 text-center">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                    © 2025 Clarity Inside. This test is not a medical diagnosis.
                </p>
            </footer>
        </main>
    )
}
