<template>
  <div class="ticker">
    <div class="ticker__track" :style="{ animationDuration: `${duration}s` }">
      <img
        v-for="(image, index) in duplicatedImages"
        :key="`${image.src}-${index}`"
        :src="image.src"
        :alt="image.alt"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface TickerImage {
  src: string
  alt: string
}

const props = withDefaults(
  defineProps<{
    images: TickerImage[]
    speed?: number
  }>(),
  {
    speed: 60,
  }
)

const MIN_REPETITIONS = 4

const duplicatedImages = computed(() => {
  const repetitions = Math.max(
    MIN_REPETITIONS,
    Math.ceil(8 / props.images.length)
  )
  return Array.from({ length: repetitions }, () => props.images).flat()
})

const duration = computed(() => props.images.length * props.speed)
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.ticker {
  position: relative;
  width: 100%;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10rem;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      to right,
      var(--ticker-fade, #{$dark-green}) 0%,
      rgba(34, 36, 32, 0.8) 20%,
      rgba(34, 36, 32, 0.4) 60%,
      transparent 100%
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      to left,
      var(--ticker-fade, #{$dark-green}) 0%,
      rgba(34, 36, 32, 0.8) 20%,
      rgba(34, 36, 32, 0.4) 60%,
      transparent 100%
    );
  }
}

.ticker__track {
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: ticker linear infinite;

  img {
    height: 280px;
    width: auto;
    object-fit: cover;
    filter: grayscale(100%);
    flex-shrink: 0;
    user-select: none;
    pointer-events: none;
  }
}

@keyframes ticker {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-50%, 0, 0);
  }
}

@media (max-width: $mobile) {
  .ticker__track img {
    height: 200px;
  }
}
</style>
