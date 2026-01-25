import { AssessmentFlow } from "@/components/assessment/assessment-flow"
import { Logo } from "@/components/logo"
import { ADHD_QUESTIONS } from "@/lib/questions"

export default function ADHDAssessment() {
    return (
        <main className="min-h-screen bg-white">
            {/* Centered Assessment Header */}
            <header className="h-20 border-b border-brand-fog flex items-center justify-center sticky top-0 bg-white/80 backdrop-blur-sm z-50">
                <Logo />
            </header>

            <AssessmentFlow
                questions={ADHD_QUESTIONS}
                testType="adhd-test"
                basePath="/adhd"
                midpointStep={11} // Pause after first 12 questions (index 11)
                midpointTitle="Thanks — we've recorded your initial likelihood score."
                midpointDescription="To provide a thorough profile, we'll now explore specific trait domains and how they impact your daily life."
            />
        </main>
    )
}
