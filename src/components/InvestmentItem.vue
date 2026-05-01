<template>
  <article class="investment-item">
    <div class="investment-item__image">
      <img :src="image" :alt="title" loading="lazy" />
    </div>
    <h3 class="investment-item__title">
      <span class="investment-item__number">{{ number }}</span>
      {{ title }}
    </h3>
    <p class="investment-item__description">{{ description }}</p>
    <p class="investment-item__deliverable">{{ deliverable }}</p>
  </article>
</template>

<script setup lang="ts">
import type { Investment } from '@data/investments'

defineProps<Omit<Investment, 'id'>>()
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.investment-item {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
}

.investment-item__image {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition:
      transform 0.6s ease,
      filter 0.6s ease;
  }

  &:hover img {
    transform: scale(1.03);
    filter: grayscale(0%);
  }
}

.investment-item__title {
  font-family: $font-serif;
  font-style: italic;
  font-weight: 600;
  font-size: 1.25rem;
  letter-spacing: -0.01em;
}

.investment-item__description {
  text-align: right;
  color: $dark-green;
  padding-left: $spacing-lg;
}

.investment-item__deliverable {
  white-space: pre-line;
  color: $dark-green;
}
</style>
