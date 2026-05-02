<template>
  <section class="investment section-padding" id="services">
    <div class="investment__intro">
      <h2 class="investment__heading text-heading">
        <span class="sans">The</span>
        <span class="serif">Investment</span>
      </h2>
      <p class="investment__subtitle">
        Curated coverage for intimate elopements to multi-day celebrations.
      </p>
    </div>

    <div class="investment__grid">
      <InvestmentItem
        v-for="item in Investments"
        :key="item.id"
        :number="item.number"
        :title="item.title"
        :description="item.description"
        :deliverable="item.deliverable"
        :image="item.image"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Investments } from '@data/investments'
import InvestmentItem from '@components/InvestmentItem.vue'
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.investment {
  &__intro {
    text-align: center;
    max-width: 32rem;
    margin: 0 auto $spacing-xl;
  }

  &__heading {
    width: fit-content;
    margin: 0 auto $spacing-md;

    .sans {
      display: block;
    }

    .serif {
      display: block;
      text-align: right;
    }
  }

  &__subtitle {
    max-width: 17.5rem;
    margin: 0 auto;
  }

  &__subtitle {
    color: $dark-green;
  }

  &__grid {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: clamp($spacing-md, 5vw, $spacing-lg);
    max-width: 1400px;
    margin: 0 auto;

    > * {
      flex: 1 1 0;
      min-width: 0;
    }

    @media (max-width: $mobile) {
      flex-direction: column;
      gap: $spacing-xl;
    }
  }
}
</style>
