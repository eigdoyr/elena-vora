<script setup lang="ts">
import { portfolioItems } from '@data/portfolioItems'
import PortfolioItem from '@components/PortfolioItem.vue'

const featured = portfolioItems.slice(0, 3)
</script>

<template>
  <section class="portfolio section-padding" id="portfolio">
    <h2 class="portfolio__heading text-heading">
      <span class="sans">Selected</span>
      <span class="serif">Narratives</span>
    </h2>

    <div class="portfolio__grid">
      <PortfolioItem
        v-for="item in featured"
        :key="item.slug"
        :title="item.title"
        :image="item.image"
        :location="item.location"
        :slug="item.slug"
        class="portfolio__item"
      />
    </div>

    <a href="/portfolio" class="portfolio__cta cta-link"
      >Explore Full Gallery</a
    >
  </section>
</template>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.portfolio {
  &__heading {
    width: fit-content;
    margin: 0 auto $spacing-lg;

    .sans {
      display: block;
    }

    .serif {
      display: block;
      text-align: right;
    }
  }

  &__grid {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: clamp($spacing-lg, 10vw, 15rem);
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: $mobile) {
      flex-direction: column;
      gap: $spacing-lg;
    }
  }

  &__item {
    :deep(.portfolio-item__image) {
      aspect-ratio: 1 / 1;
    }

    &:first-child {
      margin-top: $spacing-md;
    }

    &:nth-child(2) {
      margin-top: $spacing-xl;
      margin-left: auto;
      margin-right: auto;

      :deep(.portfolio-item__image) {
        aspect-ratio: 3 / 4;
      }
    }

    &:nth-child(3) {
      margin-top: -$spacing-lg;
      margin-left: auto;
    }

    @media (max-width: $mobile) {
      &,
      &:first-child,
      &:nth-child(2),
      &:nth-child(3) {
        margin: 0;
      }
    }
  }

  &__cta {
    display: block;
    width: fit-content;
    margin: $spacing-xl auto 0;
  }
}
</style>
