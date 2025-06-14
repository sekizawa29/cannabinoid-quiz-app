import React from 'react'
import type { QuizResult as QuizResultType, Question } from '../types/quiz'
import { getResultComment, generateShareText, shareToX } from '../utils/shareUtils'
import { CATEGORY_LABELS } from '../types/quiz'

interface QuizResultProps {
  result: QuizResultType
  questions: Question[]
  onRestart: () => void
}

const QuizResult: React.FC<QuizResultProps> = ({ result, questions, onRestart }) => {
  const { title, description, emoji } = getResultComment(result.percentage)
  
  const handleShare = () => {
    const shareText = generateShareText(result)
    shareToX(shareText)
  }

  const getScoreColor = (percentage: number): string => {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBgColor = (percentage: number): string => {
    if (percentage >= 80) return 'bg-green-100'
    if (percentage >= 60) return 'bg-yellow-100'
    return 'bg-red-100'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{emoji}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              クイズ完了！
            </h1>
            
            <div className={`inline-block px-6 py-3 rounded-full ${getScoreBgColor(result.percentage)} mb-4`}>
              <span className={`text-2xl md:text-3xl font-bold ${getScoreColor(result.percentage)}`}>
                {result.score} / {result.totalQuestions}
              </span>
              <span className="text-gray-600 ml-2">
                ({result.percentage}%)
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              {title}
            </h2>
            <p className="text-gray-600 mb-6">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleShare}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <span className="mr-2">𝕏</span>
                結果をシェア
              </button>
              <button
                onClick={onRestart}
                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                TOPに戻る
              </button>
            </div>
          </div>

          <div className="border-t pt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              クイズ詳細
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">カテゴリ</p>
                <p className="font-semibold text-lg">
                  {CATEGORY_LABELS[result.category]}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">正解率</p>
                <p className="font-semibold text-lg">{result.percentage}%</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">完了時刻</p>
                <p className="font-semibold text-lg">
                  {result.completedAt.toLocaleTimeString('ja-JP', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            問題の解説
          </h3>
          
          <div className="space-y-6">
            {questions.map((question, index) => {
              const userAnswer = result.answers[index]
              const isCorrect = userAnswer.isCorrect
              
              return (
                <div
                  key={question.id}
                  className={`p-6 rounded-lg border-l-4 ${
                    isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-semibold text-gray-800 flex-1">
                      問題 {index + 1}: {question.question}
                    </h4>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isCorrect
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {isCorrect ? '正解' : '不正解'}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">あなたの回答:</p>
                    <p className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                      {question.options[userAnswer.selectedAnswer]}
                    </p>
                  </div>
                  
                  {!isCorrect && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">正解:</p>
                      <p className="font-medium text-green-700">
                        {question.options[question.correct]}
                      </p>
                    </div>
                  )}
                  
                  <div className="bg-white p-4 rounded border">
                    <p className="text-sm text-gray-600 mb-1">解説:</p>
                    <p className="text-gray-800">{question.explanation}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizResult