import React from 'react'
import type { Difficulty } from '../types/quiz'
import { DIFFICULTY_LABELS, DIFFICULTY_DESCRIPTIONS } from '../types/quiz'

interface QuizStartProps {
  onStartQuiz: (difficulty: Difficulty) => void
  isLoading: boolean
}

const QuizStart: React.FC<QuizStartProps> = ({ onStartQuiz, isLoading }) => {
  const difficulties: Difficulty[] = ['beginner', 'intermediate', 'advanced']

  const getDifficultyColor = (difficulty: Difficulty): string => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-500 hover:bg-green-600'
      case 'intermediate':
        return 'bg-yellow-500 hover:bg-yellow-600'
      case 'advanced':
        return 'bg-red-500 hover:bg-red-600'
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">問題を読み込んでいます...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🧪 カンナビノイドクイズ
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            カンナビノイドに関する知識・教養を深めましょう
          </p>
          <p className="text-sm md:text-base text-gray-500">
            全5問の選択問題に挑戦してください
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            難易度を選択してください
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {difficulties.map((difficulty) => (
              <div
                key={difficulty}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {DIFFICULTY_LABELS[difficulty]}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {DIFFICULTY_DESCRIPTIONS[difficulty]}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => onStartQuiz(difficulty)}
                    className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition-colors duration-200 ${getDifficultyColor(difficulty)}`}
                  >
                    開始する
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              クイズについて
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">📝</span>
                <p>全5問の選択問題</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">⏰</span>
                <p>制限時間なし</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">🎯</span>
                <p>結果と解説表示</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizStart