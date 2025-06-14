export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export type QuestionType = 'multiple' | 'true_false'

export interface Question {
  id: number
  category: string
  type: QuestionType
  question: string
  options: string[]
  correct: number
  explanation: string
}

export interface QuizData {
  beginner: Question[]
  intermediate: Question[]
  advanced: Question[]
}

export interface UserAnswer {
  questionId: number
  selectedAnswer: number
  isCorrect: boolean
}

export interface QuizResult {
  difficulty: Difficulty
  score: number
  totalQuestions: number
  percentage: number
  answers: UserAnswer[]
  completedAt: Date
}

export interface QuizState {
  difficulty: Difficulty | null
  currentQuestionIndex: number
  questions: Question[]
  answers: UserAnswer[]
  isCompleted: boolean
  result: QuizResult | null
}

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  beginner: '初級',
  intermediate: '中級',
  advanced: '上級'
}

export const DIFFICULTY_DESCRIPTIONS: Record<Difficulty, string> = {
  beginner: '基本的なカンナビノイドの知識',
  intermediate: '薬理学・化学的な理解',
  advanced: '最新研究・専門的な知識'
}