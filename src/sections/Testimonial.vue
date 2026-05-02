<template>
  <section class="testimonial section-padding" id="testimonials">
    <button
      class="testimonial__arrow testimonial__arrow--prev"
      aria-label="Previous testimonial"
      @click="prev"
    >
      ←
    </button>

    <div ref="carouselEl" class="testimonial__carousel">
      <TestimonialCard
        v-for="visible in visibleItems"
        :key="visible.item.id"
        :id="visible.item.id"
        :quote="visible.item.quote"
        :author="visible.item.author"
        :context="visible.item.context"
        :image="visible.item.image"
        :class="`testimonial__card testimonial__card--pos-${visible.position}`"
      />
    </div>

    <button
      class="testimonial__arrow testimonial__arrow--next"
      aria-label="Next testimonial"
      @click="next"
    >
      →
    </button>

    <div class="testimonial__dots">
      <button
        v-for="(item, index) in testimonials"
        :key="item.id"
        class="testimonial__dot"
        :class="{ 'is-active': index === currentIndex }"
        :aria-label="`Go to testimonial ${index + 1}`"
        @click="goTo(index)"
      ></button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { testimonials } from '@/data/testimonials'
import TestimonialCard from '@/components/TestimonialCard.vue'
import { useCarousel } from '@/composables/useCarousel'
import { useSwipe } from '@/composables/useSwipe'
import { useKeyboardNav } from '@/composables/useKeyboardNav'

const carouselEl = ref<HTMLElement | null>(null)

const { currentIndex, visibleItems, next, prev, goTo } = useCarousel(
  testimonials,
  4
)

useSwipe(carouselEl, {
  onSwipeLeft: next,
  onSwipeRight: prev,
})

useKeyboardNav({
  onLeft: prev,
  onRight: next,
})
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.testimonial {
  position: relative;
  background-color: $dark-green;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: $spacing-md;
  overflow: hidden;
  padding: $spacing-xl $spacing-md;
}

.testimonial__carousel {
  position: relative;
  width: 21rem;
  height: 36rem;

  @media (max-width: $tablet) {
    width: 20rem;
    height: 34rem;
  }

  @media (max-width: $mobile) {
    width: 18rem;
    height: 32rem;
  }
}

.testimonial__card {
  position: absolute;
  top: 0;
  left: 0;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;

  &--pos-0 {
    transform: rotate(-1deg);
    opacity: 1;
    z-index: 4;
  }

  &--pos-1 {
    transform: translateY(1rem) rotate(-10deg) scale(0.96);
    opacity: 0.85;
    z-index: 3;
  }

  &--pos-2 {
    transform: translateY(-1rem) rotate(6deg) scale(0.96);
    opacity: 0.7;
    z-index: 2;
  }

  &--pos-3 {
    transform: translateY(-4rem) rotate(-4deg) scale(0.88);
    opacity: 0.55;
    z-index: 1;
  }
}

.testimonial__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.5);
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  font-size: 0.875rem;
  line-height: 1;
  cursor: pointer;
  transition:
    color 0.3s ease,
    border-color 0.3s ease;
  z-index: 10;

  &:hover {
    color: $white;
    border-color: rgba(255, 255, 255, 0.6);
  }

  &--prev {
    left: 4rem;
  }
  &--next {
    right: 4rem;
  }

  @media (max-width: $tablet) {
    &--prev {
      left: 1.5rem;
    }
    &--next {
      right: 1.5rem;
    }
  }

  @media (max-width: $mobile) {
    display: none;
  }
}

.testimonial__dots {
  display: flex;
  gap: 0.75rem;
  z-index: 10;
}

.testimonial__dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  padding: 0;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }

  &.is-active {
    background-color: $white;
    transform: scale(1.3);
  }
}
</style>
