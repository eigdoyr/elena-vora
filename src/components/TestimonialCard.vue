<template>
  <article class="testimonial-card" :class="colorClass">
    <div class="testimonial-card__image">
      <img :src="image" :alt="author" loading="lazy" />
    </div>

    <div class="testimonial-card__quote-wrapper">
      <span class="testimonial-card__mark">&ldquo;</span>

      <div ref="quoteEl" class="testimonial-card__quote" @scroll="handleScroll">
        <p>{{ quote }}</p>
      </div>

      <div
        class="testimonial-card__fade testimonial-card__fade--top"
        :class="{ 'is-visible': showTopFade }"
      ></div>
      <div
        class="testimonial-card__fade testimonial-card__fade--bottom"
        :class="{ 'is-visible': showBottomFade }"
      ></div>
    </div>

    <div class="testimonial-card__attribution">
      <p>— {{ author }},</p>
      <p>{{ context }}.</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const props = defineProps<{
  id: number
  quote: string
  author: string
  context: string
  image: string
}>()

const PALETTE_SIZE = 5

const quoteEl = ref<HTMLElement | null>(null)
const showTopFade = ref(false)
const showBottomFade = ref(false)

const colorClass = computed(() => `card-color-${(props.id % PALETTE_SIZE) + 1}`)

const updateFades = () => {
  const el = quoteEl.value
  if (!el) return
  const { scrollTop, scrollHeight, clientHeight } = el
  showTopFade.value = scrollTop > 4
  showBottomFade.value = scrollTop + clientHeight < scrollHeight - 4
}

const handleScroll = () => updateFades()

onMounted(() => {
  updateFades()
  window.addEventListener('resize', updateFades)
})
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.testimonial-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1.25rem 1.25rem 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
}

.testimonial-card__image {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  flex-shrink: 0;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.testimonial-card__quote-wrapper {
  position: relative;
  flex: 1;
  margin-top: $spacing-md;
  min-height: 0;
  padding: 0 1.5rem 0 2rem;
}

.testimonial-card__quote {
  height: 100%;
  overflow-y: auto;
  font-family: $font-sans;
  font-style: italic;
  font-size: 0.85rem;
  line-height: 1.4;
  text-align: center;
  color: $dark-green;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.testimonial-card__mark {
  position: absolute;
  top: 0;
  left: 0;
  font-family: $font-sans;
  font-style: italic;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1;
  color: $dark-green;
  pointer-events: none;
  z-index: 2;
}

.testimonial-card__fade {
  position: absolute;
  left: 1.5rem;
  right: 1.5rem;
  height: 2rem;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;

  &.is-visible {
    opacity: 1;
  }

  &--top {
    top: 0;
    background: linear-gradient(
      to bottom,
      var(--card-bg, #fff) 0%,
      transparent 100%
    );
  }

  &--bottom {
    bottom: 0;
    background: linear-gradient(
      to top,
      var(--card-bg, #fff) 0%,
      transparent 100%
    );
  }
}

.testimonial-card__attribution {
  margin-top: $spacing-md;
  text-align: right;
  font-size: 0.875rem;
  color: $muted;
  flex-shrink: 0;
}
</style>
