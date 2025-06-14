import { useQuiz } from './hooks/useQuiz'
import QuizStart from './components/QuizStart'
import QuizQuestion from './components/QuizQuestion'
import QuizResult from './components/QuizResult'

function App() {
  const {
    quizState,
    startQuiz,
    answerQuestion,
    resetQuiz,
    getCurrentQuestion,
    getProgress,
    isLoading
  } = useQuiz()

  if (quizState.isCompleted && quizState.result) {
    return (
      <QuizResult
        result={quizState.result}
        questions={quizState.questions}
        onRestart={resetQuiz}
      />
    )
  }

  if (quizState.difficulty && quizState.questions.length > 0) {
    const currentQuestion = getCurrentQuestion()
    const progress = getProgress()
    
    if (currentQuestion) {
      return (
        <QuizQuestion
          question={currentQuestion}
          questionNumber={progress.current}
          totalQuestions={progress.total}
          onAnswer={answerQuestion}
        />
      )
    }
  }

  return (
    <QuizStart
      onStartQuiz={startQuiz}
      isLoading={isLoading}
    />
  )
}

export default App
