import React from 'react'
import type { Category } from '../types/quiz'
import { CATEGORY_LABELS, CATEGORY_DESCRIPTIONS, CATEGORY_EMOJIS } from '../types/quiz'

interface QuizStartProps {
  onStartQuiz: (category: Category) => void
  isLoading: boolean
}

const QuizStart: React.FC<QuizStartProps> = ({ onStartQuiz, isLoading }) => {
  const categories: Category[] = ['cbd', 'cbn', 'cbg', 'thc', 'legal', 'health', 'botany']

  const getCategoryColor = (category: Category): string => {
    switch (category) {
      case 'cbd':
        return 'bg-green-500 hover:bg-green-600'
      case 'cbn':
        return 'bg-purple-500 hover:bg-purple-600'
      case 'cbg':
        return 'bg-yellow-500 hover:bg-yellow-600'
      case 'thc':
        return 'bg-red-500 hover:bg-red-600'
      case 'legal':
        return 'bg-blue-500 hover:bg-blue-600'
      case 'health':
        return 'bg-pink-500 hover:bg-pink-600'
      case 'botany':
        return 'bg-emerald-500 hover:bg-emerald-600'
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
            ゲーム感覚で楽しく基礎知識を学ぼう！
          </p>
          <p className="text-sm md:text-base text-gray-500">
            興味のあるカテゴリから5問の選択問題に挑戦
          </p>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            学びたいカテゴリを選択してください
          </h2>

          <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">
                      {CATEGORY_EMOJIS[category]}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {CATEGORY_LABELS[category]}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {CATEGORY_DESCRIPTIONS[category]}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => onStartQuiz(category)}
                    className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition-colors duration-200 ${getCategoryColor(category)}`}
                  >
                    挑戦する
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
            <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-600">
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">📝</span>
                <p>全5問の選択問題</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">💡</span>
                <p>ヒント機能付き</p>
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

        <div className="mt-8 text-center">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <p className="text-xs text-gray-500 mb-2">提供</p>
            <a
              href="https://drowse.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <img
                src="./joint-ya-logo.png"
                alt="ジョイント屋"
                className="h-6 w-auto"
              />
              <span className="text-sm font-medium">ジョイント屋</span>
            </a>
            <p className="text-xs text-gray-400 mt-1">高品質なCBD製品をお届けします</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizStart