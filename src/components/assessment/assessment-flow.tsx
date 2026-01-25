"use client"

import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AssessmentProgress } from "./assessment-progress"
import { OptionCard } from "./option-card"
import { MidPointScreen } from "./mid-point-screen"
import { ArrowLeft, Loader2 } from "lucide-react"
import { Question } from "@/lib/questions"
import { getOrCreateVisitor } from "@/lib/visitor"
import { submitAssessment } from "@/lib/api"
import { useToast } from "@/hooks/use-toast"

interface AssessmentFlowProps {
  questions: Question[]
  testType: string
  basePath: string // e.g., "/gad-7" or "/adhd"
  midpointStep?: number // Optional: step index to show midpoint screen
  midpointTitle?: string
  midpointDescription?: string
}

export function AssessmentFlow({
  questions,
  testType,
  basePath,
  midpointStep,
  midpointTitle,
  midpointDescription
}: AssessmentFlowProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showMidPoint, setShowMidPoint] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()
  const { assessmentId } = useParams()
  const { toast } = useToast()

  const totalSteps = questions.length
  const currentQuestion = questions[currentStep]

  const handleSelect = (option: string) => {
    if (isTransitioning || isSubmitting) return

    const newAnswers = { ...answers, [currentQuestion.id]: option }
    setAnswers(newAnswers)
    setIsTransitioning(true)

    setTimeout(() => {
      setIsTransitioning(false)
      if (midpointStep !== undefined && currentStep === midpointStep && !showMidPoint) {
        setShowMidPoint(true)
      } else if (currentStep < totalSteps - 1) {
        setCurrentStep((prev) => prev + 1)
      } else {
        // Quiz Complete - Submit to backend
        handleSubmitAssessment(newAnswers)
      }
    }, 300)
  }

  const handleSubmitAssessment = async (finalAnswers: Record<number, string>) => {
    setIsSubmitting(true)
    try {
      const { visitorId, variant } = getOrCreateVisitor()

      const response = await submitAssessment({
        visitorId,
        variant,
        testType,
        answers: finalAnswers,
      })

      // Navigate to result page with server response
      const finalAssessmentId = response.assessmentId || assessmentId;
      navigate(`${basePath}/${finalAssessmentId}/result`, {
        state: {
          assessmentId: response.assessmentId,
          score: response.scoreResult.overall.score,
          scoreResult: response.scoreResult,
          freeReport: response.freeReport,
          answers: finalAnswers,
        }
      })
    } catch (error: any) {
      console.error('Failed to submit assessment:', error)

      const errorMessage = error.response?.data?.message || 'Failed to submit assessment. Please try again.'
      const errorTitle = error.response?.data?.error || 'Submission Error'

      toast({
        title: errorTitle,
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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
    setCurrentStep((prev) => prev + 1)
  }

  if (showMidPoint) {
    return (
      <div className="max-w-[660px] mx-auto mt-[50px] px-4 flex flex-col min-h-[calc(100vh-130px)]">
        <MidPointScreen
          onContinue={handleContinueFromMidPoint}
          completed={currentStep + 1}
          total={totalSteps}
          title={midpointTitle}
          description={midpointDescription}
        />

        <div className="pt-8 border-t border-slate-100 flex items-center justify-between text-slate-500 text-sm">
          <button onClick={handleBack} className="flex items-center gap-2 hover:text-slate-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <span className="font-medium">{questions[currentStep].section}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-[660px] mx-auto mt-[50px] px-4 flex flex-col min-h-[calc(100vh-130px)]">
      <AssessmentProgress current={currentStep + 1} total={totalSteps} />

      <div className="flex-1 flex flex-col">
        <h2 className="text-3xl font-semibold text-slate-800 mb-[50px] text-balance">{currentQuestion.text}</h2>

        <div className="flex flex-col gap-[30px] mb-12 relative">
          {isSubmitting && (
            <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-xl">
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
                <p className="text-sm font-medium text-slate-500 text-center">Finalizing your results...</p>
              </div>
            </div>
          )}
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
