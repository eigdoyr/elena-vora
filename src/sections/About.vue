<template>
  <section class="about section-padding" id="about" data-nav-theme="dark">
    <h2 class="about__heading text-heading">
      <span class="serif">Beyond</span>
      <span class="sans">the Pose</span>
    </h2>

    <div class="about__text">
      <p>
        I believe wedding photography shouldn't feel like a production—<em
          >it should feel like a memory</em
        >. My approach blends the precision of editorial fashion shoots with the
        raw emotion of photojournalism.
      </p>
      <p>
        I don't just document who was there; <em>I capture how it felt</em>. The
        blurred motion of the first dance, the tear on a cheek, the quiet
        moments in between the chaos. We create a visual legacy that looks
        <em>as timeless fifty years from now as it does today</em>.
      </p>
    </div>

    <Ticker :images="tickerImages" :speed="16" />
  </section>
</template>

<script setup lang="ts">
import Ticker from '@/components/Ticker.vue'

const tickerImageModules = import.meta.glob<{ default: string }>(
  '../assets/ticker/*.{jpg,jpeg,png,webp}',
  { eager: true }
)

const tickerImages = Object.values(tickerImageModules).map((mod, index) => ({
  src: mod.default,
  alt: `Wedding photo ${index + 1}`,
}))
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.about {
  background-color: $dark-green;
  color: $white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-lg;
  overflow: hidden;
}

.about__heading {
  text-align: center;

  .serif {
    display: block;
  }

  .sans {
    display: block;
    padding-left: 4.5rem;
  }
}

.about__text {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
  max-width: 24rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.85);

  em {
    font-style: italic;
    color: $white;
  }
}
</style>
