import React, { useState } from 'react'
import type { Question } from '../types/quiz'

interface QuizQuestionProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  onAnswer: (selectedAnswer: number) => void
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showHint, setShowHint] = useState<boolean>(false)

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      onAnswer(selectedAnswer)
      setSelectedAnswer(null)
      setShowHint(false)
    }
  }

  const toggleHint = () => {
    setShowHint(!showHint)
  }

  const progress = (questionNumber / totalQuestions) * 100

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-500">
                問題 {questionNumber} / {totalQuestions}
              </span>
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                {question.category}
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed flex-1 mr-4">
                {question.question}
              </h2>
              <button
                onClick={toggleHint}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 flex-shrink-0"
              >
                💡 ヒント
              </button>
            </div>

            {showHint && (
              <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                <div className="flex items-start">
                  <span className="text-yellow-600 text-lg mr-2">💡</span>
                  <p className="text-gray-700 text-sm md:text-base">
                    <strong>ヒント:</strong> {question.hint}
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 mr-3 flex-shrink-0 ${
                        selectedAnswer === index
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}
                    >
                      {selectedAnswer === index && (
                        <div className="w-2 h-2 bg-white rounded-full m-auto mt-0.5"></div>
                      )}
                    </div>
                    <span className="text-base md:text-lg">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedAnswer !== null
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {questionNumber === totalQuestions ? '完了' : '次へ'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizQuestion