"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AssessmentProgress } from "./assessment-progress"
import { OptionCard } from "./option-card"
import { MidPointScreen } from "./mid-point-screen"
import { ArrowLeft } from "lucide-react"
import { QUESTIONS } from "@/lib/questions"

export function AssessmentFlow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showMidPoint, setShowMidPoint] = useState(false)

  const navigate = useNavigate()

  const totalSteps = QUESTIONS.length
  const currentQuestion = QUESTIONS[currentStep]

  const handleSelect = (option: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: option }
    setAnswers(newAnswers)

    setTimeout(() => {
      if (currentStep === 6) {
        setShowMidPoint(true)
      } else if (currentStep < totalSteps - 1) {
        setCurrentStep((prev) => prev + 1)
      } else {
        // Quiz Complete
        // Calculate GAD-7 Score (first 7 questions)
        let gad7Score = 0
        QUESTIONS.slice(0, 7).forEach((q) => {
          const ans = newAnswers[q.id]
          const idx = q.options.indexOf(ans)
          if (idx >= 0) gad7Score += idx
        })

        // Calculate Extended Score if needed, or just pass all answers
        // For now, we'll pass the GAD-7 score and the full answers object
        navigate("/detailed-result", {
          state: {
            score: gad7Score,
            answers: newAnswers,
            totalQuestions: totalSteps
          }
        })
      }
    }, 300)
  }

  const handleBack = () => {
    if (showMidPoint) {
      setShowMidPoint(false)
    } else if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    } else {
      navigate("/")
    }
  }

  const handleContinueFromMidPoint = () => {
    setShowMidPoint(false)
    setCurrentStep(7)
  }

  if (showMidPoint) {
    return (
      <div className="max-w-[660px] mx-auto mt-[50px] px-4 flex flex-col min-h-[calc(100vh-130px)]">
        <MidPointScreen onContinue={handleContinueFromMidPoint} completed={7} total={totalSteps} />

        <div className="pt-8 border-t border-slate-100 flex items-center justify-between text-slate-500 text-sm">
          <button onClick={handleBack} className="flex items-center gap-2 hover:text-slate-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <span className="font-medium">{QUESTIONS[6].section}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-[660px] mx-auto mt-[50px] px-4 flex flex-col min-h-[calc(100vh-130px)]">
      <AssessmentProgress current={currentStep + 1} total={totalSteps} />

      <div className="flex-1 flex flex-col">
        <h2 className="text-3xl font-semibold text-slate-800 mb-[50px] text-balance">{currentQuestion.text}</h2>

        <div className="flex flex-col gap-[30px] mb-12">
          {currentQuestion.options.map((option) => (
            <OptionCard
              key={option}
              label={option}
              selected={answers[currentQuestion.id] === option}
              onClick={() => handleSelect(option)}
            />
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-slate-100 flex items-center justify-between text-slate-500 text-sm pb-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <span className="font-medium text-right">{currentQuestion.section}</span>
      </div>
    </div>
  )
}
