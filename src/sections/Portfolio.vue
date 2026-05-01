<script setup lang="ts">
import { portfolioItems } from '@/data/portfolioItems'
import PortfolioItem from '@/components/PortfolioItem.vue'

const featured = portfolioItems.slice(0, 3)
</script>

<template>
  <section class="portfolio">
    <h2 class="portfolio__heading">
      Selected <span class="portfolio__heading-accent">Narratives</span>
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

    <a href="/portfolio" class="portfolio__cta">Explore Full Gallery</a>
  </section>
</template>

<style lang="scss" scoped>
.portfolio {
}
</style>
