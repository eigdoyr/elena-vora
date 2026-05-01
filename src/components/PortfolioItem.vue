<template>
  <div class="portfolio-item">
    <div class="portfolio-item__image">
      <img :src="image" :alt="title" loading="lazy" />
    </div>
    <p class="portfolio-item__title">— {{ title }}</p>
  </div>
</template>

<script setup lang="ts">
import type { PortfolioItem } from '@data/portfolioItems'

defineProps<Omit<PortfolioItem, 'id'>>()
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.portfolio-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.portfolio-item__image {
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }
}

.portfolio-item__title {
  font-size: 0.875rem;
  color: $muted;
  letter-spacing: 0.02em;
}
</style>
