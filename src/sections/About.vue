<template>
  <section class="about section-padding" id="about" data-nav-theme="dark">
    <div class="about-header">
      <h2 class="about-heading">
        <span class="serif">Beyond</span><br />
        <span class="sans">the Pose</span>
      </h2>
    </div>

    <div class="about-text">
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

    <div class="about-ticker">
      <div class="about-ticker__track">
        <img :src="about1" alt="Wedding couple" loading="lazy" />
        <img :src="about2" alt="Wedding celebration" loading="lazy" />
        <img :src="about3" alt="Wedding reception" loading="lazy" />
        <!-- Duplicate for seamless loop -->
        <img :src="about1" alt="Wedding couple" loading="lazy" />
        <img :src="about2" alt="Wedding celebration" loading="lazy" />
        <img :src="about3" alt="Wedding reception" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import about1 from '@assets/about/about-1.jpg'
import about2 from '@assets/about/about-2.jpg'
import about3 from '@assets/about/about-3.jpg'
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.about {
  background-color: $dark-green;
  color: $white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-lg;
  overflow: hidden;
}

.about-heading {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1;
  text-align: center;

  .serif {
    font-family: $font-serif;
    font-style: italic;
    font-weight: 600;
  }

  .sans {
    font-family: $font-sans;
    font-weight: 500;
    padding-left: 1.5rem;
  }
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 560px;
  text-align: center;

  p {
    font-size: $text-body;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.85);
  }

  em {
    font-style: italic;
    color: $white;
  }
}

.about-ticker {
  width: 100vw;
  overflow: hidden;
  margin-top: auto;
}

.about-ticker__track {
  display: flex;
  gap: 1rem;
  animation: ticker 20s linear infinite;
  width: max-content;

  img {
    height: 280px;
    width: auto;
    object-fit: cover;
    filter: grayscale(100%);
    flex-shrink: 0;
  }
}

@keyframes ticker {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* Mobile */
@media (max-width: $mobile) {
  .about {
    min-height: auto;
  }

  .about-ticker__track img {
    height: 200px;
  }
}
</style>
