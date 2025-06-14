import { useState, useEffect } from 'react'
import type { Difficulty, Question, QuizState, UserAnswer, QuizResult, QuizData } from '../types/quiz'

const QUESTIONS_PER_QUIZ = 5

export const useQuiz = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    difficulty: null,
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
    isCompleted: false,
    result: null
  })

  const [allQuestions, setAllQuestions] = useState<QuizData | null>(null)

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const response = await fetch('./data/questions.json')
        const data: QuizData = await response.json()
        setAllQuestions(data)
      } catch (error) {
        console.error('Failed to load questions:', error)
      }
    }

    loadQuestions()
  }, [])

  const startQuiz = (difficulty: Difficulty) => {
    if (!allQuestions) return

    const questionsForDifficulty = allQuestions[difficulty]
    const shuffledQuestions = [...questionsForDifficulty].sort(() => Math.random() - 0.5)
    const selectedQuestions = shuffledQuestions.slice(0, QUESTIONS_PER_QUIZ)

    setQuizState({
      difficulty,
      currentQuestionIndex: 0,
      questions: selectedQuestions,
      answers: [],
      isCompleted: false,
      result: null
    })
  }

  const answerQuestion = (selectedAnswer: number) => {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
    const isCorrect = selectedAnswer === currentQuestion.correct

    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect
    }

    const newAnswers = [...quizState.answers, newAnswer]
    const isLastQuestion = quizState.currentQuestionIndex === quizState.questions.length - 1

    if (isLastQuestion) {
      const score = newAnswers.filter(answer => answer.isCorrect).length
      const percentage = Math.round((score / QUESTIONS_PER_QUIZ) * 100)
      
      const result: QuizResult = {
        difficulty: quizState.difficulty!,
        score,
        totalQuestions: QUESTIONS_PER_QUIZ,
        percentage,
        answers: newAnswers,
        completedAt: new Date()
      }

      setQuizState(prev => ({
        ...prev,
        answers: newAnswers,
        isCompleted: true,
        result
      }))
    } else {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        answers: newAnswers
      }))
    }
  }

  const resetQuiz = () => {
    setQuizState({
      difficulty: null,
      currentQuestionIndex: 0,
      questions: [],
      answers: [],
      isCompleted: false,
      result: null
    })
  }

  const getCurrentQuestion = (): Question | null => {
    if (quizState.questions.length === 0) return null
    return quizState.questions[quizState.currentQuestionIndex]
  }

  const getProgress = () => {
    return {
      current: quizState.currentQuestionIndex + 1,
      total: QUESTIONS_PER_QUIZ
    }
  }

  return {
    quizState,
    startQuiz,
    answerQuestion,
    resetQuiz,
    getCurrentQuestion,
    getProgress,
    isLoading: !allQuestions
  }
}