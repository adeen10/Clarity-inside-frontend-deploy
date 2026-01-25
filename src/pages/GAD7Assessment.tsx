import { AssessmentFlow } from "@/components/assessment/assessment-flow"
import { Logo } from "@/components/logo"
import { QUESTIONS } from "@/lib/questions"

export default function GAD7Assessment() {
    return (
        <main className="min-h-screen bg-white">
            {/* Centered Assessment Header */}
            <header className="h-20 border-b border-brand-fog flex items-center justify-center sticky top-0 bg-white/80 backdrop-blur-sm z-50">
                <Logo />
            </header>

            <AssessmentFlow
                questions={QUESTIONS}
                testType="gad7-anxiety"
                basePath="/gad-7"
                midpointStep={6}
                midpointTitle="Thanks — we've recorded your core anxiety score."
                midpointDescription="To give you a more meaningful result, we'll now ask a few questions about how anxiety shows up in your day-to-day life."
            />
        </main>
    )
}
