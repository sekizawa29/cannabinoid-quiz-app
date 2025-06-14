export type Category = 'cbd' | 'cbn' | 'cbg' | 'thc' | 'legal' | 'health' | 'botany'

export type QuestionType = 'multiple' | 'true_false'

export interface Question {
  id: number
  category: string
  type: QuestionType
  question: string
  options: string[]
  correct: number
  explanation: string
  hint: string
}

export interface QuizData {
  cbd: Question[]
  cbn: Question[]
  cbg: Question[]
  thc: Question[]
  legal: Question[]
  health: Question[]
  botany: Question[]
}

export interface UserAnswer {
  questionId: number
  selectedAnswer: number
  isCorrect: boolean
}

export interface QuizResult {
  category: Category
  score: number
  totalQuestions: number
  percentage: number
  answers: UserAnswer[]
  completedAt: Date
}

export interface QuizState {
  category: Category | null
  currentQuestionIndex: number
  questions: Question[]
  answers: UserAnswer[]
  isCompleted: boolean
  result: QuizResult | null
}

export const CATEGORY_LABELS: Record<Category, string> = {
  cbd: 'CBD基礎知識',
  cbn: 'CBN（睡眠成分）',
  cbg: 'CBG（母なるカンナビノイド）',
  thc: 'THC知識',
  legal: '法律・規制',
  health: '健康・医療',
  botany: '大麻植物学'
}

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  cbd: '🌿 CBDの基本的な知識と効果',
  cbn: '💤 睡眠に関わるCBNの特徴',
  cbg: '🌟 全てのカンナビノイドの前駆体CBG',
  thc: '🔥 THCの作用と特性について',
  legal: '⚖️ 日本の法律と世界の規制',
  health: '🏥 健康への影響と医療応用',
  botany: '🌱 大麻植物の生物学的知識'
}

export const CATEGORY_EMOJIS: Record<Category, string> = {
  cbd: '🌿',
  cbn: '💤',
  cbg: '🌟',
  thc: '🔥',
  legal: '⚖️',
  health: '🏥',
  botany: '🌱'
}