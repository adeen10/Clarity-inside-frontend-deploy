import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { InfoSection } from "@/components/info-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <Hero />

            <section className="bg-card px-4 py-8">
                <InfoSection
                    title="Clinically recognised anxiety screening"
                    content={[
                        "This free anxiety test is based on the GAD-7 (Generalized Anxiety Disorder-7), a widely used anxiety screening questionnaire developed for identifying and measuring the severity of generalized anxiety symptoms.",
                        "The GAD-7 is commonly used in clinical, research, and healthcare settings as an initial screening tool. This assessment combines the GAD-7 with additional structured questions to provide broader context around how anxiety may affect daily life.",
                    ]}
                />

                <InfoSection
                    title="What does this anxiety test measure?"
                    content={[
                        "This online anxiety self-assessment focuses on common patterns associated with anxiety, including how often symptoms occur and how they may impact everyday functioning.",
                        "The questions explore areas such as emotional worry, physical symptoms of anxiety, difficulty relaxing, racing thoughts, and avoidance behaviors. Together, these responses help create a general anxiety profile based on recognised screening criteria.",
                    ]}
                />

                <InfoSection
                    title="How the free anxiety test works"
                    content={[
                        "You'll answer 22 short questions designed to assess common anxiety symptoms and experiences. Once complete, you'll receive a free anxiety score based on the GAD-7 framework, along with a brief explanation of what the score means.",
                        "You'll also have the option to explore more detailed, personalised insights that look beyond the score and focus on patterns, triggers, and coping styles.",
                    ]}
                />

                <InfoSection
                    title="Understanding your anxiety test results"
                    content={[
                        "Your anxiety test result provides a general indication of anxiety severity based on your responses. It is intended to support self-understanding and reflection, not to provide a medical diagnosis.",
                        "Online anxiety tests can be a helpful first step in recognising patterns that may otherwise be difficult to articulate. If your results raise concerns, seeking support from a qualified healthcare professional is recommended.",
                    ]}
                />

                <InfoSection
                    title="Who is this anxiety test for?"
                    content={[
                        "This anxiety self-assessment is designed for adults who want to better understand their mental wellbeing, whether they're experiencing ongoing anxiety, situational stress, or persistent worry.",
                        'It may be helpful if you\'re asking questions such as "Do I have anxiety?" or if you want a clearer picture of how anxiety may be affecting your daily life.',
                    ]}
                />

                <InfoSection
                    title="Privacy, limitations, and responsible use"
                    content={[
                        "Your responses are private and confidential. No account is required, and results are shown instantly.",
                        "This anxiety test is not a diagnostic tool and should not be used as a substitute for professional medical advice, diagnosis, or treatment. It is designed for informational and self-reflection purposes only.",
                    ]}
                />
            </section>

            <AboutSection />
            <Footer />
        </main>
    )
}
