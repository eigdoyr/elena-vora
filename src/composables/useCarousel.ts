import { ref, computed } from 'vue'

export function useCarousel<T>(items: T[], visibleCount = 4) {
  const currentIndex = ref(0)

  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % items.length
  }

  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + items.length) % items.length
  }

  const goTo = (index: number) => {
    if (index < 0 || index >= items.length) return
    currentIndex.value = index
  }

  const visibleItems = computed(() =>
    Array.from({ length: visibleCount }, (_, offset) => {
      const index = (currentIndex.value + offset) % items.length
      return { item: items[index], index, position: offset }
    })
  )

  return {
    currentIndex,
    next,
    prev,
    goTo,
    visibleItems,
  }
}
