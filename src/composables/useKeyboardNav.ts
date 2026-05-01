import { onMounted, onUnmounted } from 'vue'

interface KeyboardNavOptions {
  onLeft?: () => void
  onRight?: () => void
}

export function useKeyboardNav(options: KeyboardNavOptions) {
  const { onLeft, onRight } = options

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') onLeft?.()
    if (e.key === 'ArrowRight') onRight?.()
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
}
