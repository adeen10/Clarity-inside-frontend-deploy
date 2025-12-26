export function AboutSection() {
  return (
    <section className="bg-brand-tint py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-medium text-brand-slate">About this assessment</h2>
          <div className="space-y-6 text-brand-slate opacity-80 leading-relaxed">
            <p>
              This assessment was created to provide a clear, accessible way for individuals to reflect on anxiety
              symptoms using clinically recognised screening methods. The focus is on clarity, self-awareness, and
              responsible presentation of mental health information.
            </p>
            <p>
              The test does not offer treatment or medical advice and is intended to complement — not replace —
              professional support where appropriate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
