import { AssessmentFlow } from "@/components/assessment/assessment-flow"
import { Logo } from "@/components/logo"
import { AUTISM_QUESTIONS } from "@/lib/questions"

export default function AutismAssessment() {
    return (
        <main className="min-h-screen bg-white">
            {/* Centered Assessment Header */}
            <header className="h-20 border-b border-brand-fog flex items-center justify-center sticky top-0 bg-white/80 backdrop-blur-sm z-50">
                <Logo />
            </header>

            <AssessmentFlow
                questions={AUTISM_QUESTIONS}
                testType="autism-test"
                basePath="/autism"
                midpointStep={14} // Pause after Part 1 (15 questions, index 14)
                midpointTitle="Thanks — we've completed the initial screening."
                midpointDescription="To provide a detailed trait profile, we'll now look at specific areas like sensory sensitivities, routine, and social communication."
            />
        </main>
    )
}
