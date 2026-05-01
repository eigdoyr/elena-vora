import { onMounted, onUnmounted, type Ref } from 'vue'

interface SwipeOptions {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  threshold?: number
}

export function useSwipe(
  target: Ref<HTMLElement | null>,
  options: SwipeOptions
) {
  const { onSwipeLeft, onSwipeRight, threshold = 50 } = options

  let startX = 0
  let endX = 0

  const handleTouchStart = (e: TouchEvent) => {
    startX = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e: TouchEvent) => {
    endX = e.changedTouches[0].screenX
    const diff = endX - startX

    if (Math.abs(diff) < threshold) return

    if (diff < 0) onSwipeLeft?.()
    else onSwipeRight?.()
  }

  onMounted(() => {
    const el = target.value
    if (!el) return
    el.addEventListener('touchstart', handleTouchStart, { passive: true })
    el.addEventListener('touchend', handleTouchEnd, { passive: true })
  })

  onUnmounted(() => {
    const el = target.value
    if (!el) return
    el.removeEventListener('touchstart', handleTouchStart)
    el.removeEventListener('touchend', handleTouchEnd)
  })
}
