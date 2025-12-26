import { AssessmentFlow } from "@/components/assessment/assessment-flow"
import { Logo } from "@/components/logo"

export default function TestPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Centered Assessment Header */}
            <header className="h-20 border-b border-brand-fog flex items-center justify-center sticky top-0 bg-white/80 backdrop-blur-sm z-50">
                <Logo />
            </header>

            <AssessmentFlow />
        </main>
    )
}
