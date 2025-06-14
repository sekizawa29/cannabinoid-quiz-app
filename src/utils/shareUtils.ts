import type { QuizResult } from '../types/quiz'

export const generateShareText = (result: QuizResult): string => {
  const { score, totalQuestions, percentage, difficulty } = result
  
  const difficultyText = {
    beginner: '初級',
    intermediate: '中級', 
    advanced: '上級'
  }[difficulty]
  
  let emoji = '📚'
  let comment = ''
  
  if (percentage === 100) {
    emoji = '🏆'
    comment = 'パーフェクト！'
  } else if (percentage >= 80) {
    emoji = '👏'
    comment = 'excellent!'
  } else if (percentage >= 60) {
    emoji = '💪'
    comment = 'good job!'
  } else {
    emoji = '📖'
    comment = 'keep learning!'
  }
  
  return `カンナビノイドクイズ【${difficultyText}】で${score}/${totalQuestions}問正解！(${percentage}%) ${comment} ${emoji}
あなたの知識レベルは？🧪
#カンナビノイドクイズ #CBD #教育`
}

export const shareToX = (text: string): void => {
  const encodedText = encodeURIComponent(text)
  const url = `https://twitter.com/intent/tweet?text=${encodedText}`
  window.open(url, '_blank', 'width=600,height=400')
}

export const getResultComment = (percentage: number): { title: string; description: string; emoji: string } => {
  if (percentage === 100) {
    return {
      title: '完璧！カンナビノイドマスターです！',
      description: 'すべての問題に正解しました。素晴らしい知識をお持ちですね。',
      emoji: '🏆'
    }
  } else if (percentage >= 80) {
    return {
      title: '素晴らしい！かなりの知識をお持ちですね',
      description: 'ほぼ完璧な理解度です。カンナビノイドについてよく学習されています。',
      emoji: '👏'
    }
  } else if (percentage >= 60) {
    return {
      title: '良くできました！もう少しで上級者です',
      description: '基本的な知識は身についています。さらに学習を続けましょう。',
      emoji: '💪'
    }
  } else if (percentage >= 40) {
    return {
      title: 'まずまずです。復習で知識を深めましょう',
      description: 'いくつかの分野で理解を深める必要があります。',
      emoji: '📚'
    }
  } else {
    return {
      title: '基礎から学び直しましょう。頑張って！',
      description: 'カンナビノイドの基本から学習することをお勧めします。',
      emoji: '📖'
    }
  }
}