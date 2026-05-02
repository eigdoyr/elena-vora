<template>
  <section class="hero" id="hero" data-nav-theme="light">
    <div class="hero-bg">
      <img :src="heroBg" alt="Wedding couple at the beach" />
    </div>

    <div class="hero-headline">
      <p class="hero-sans">The Art of the</p>
      <p class="hero-serif">Unscripted.</p>
    </div>

    <div class="hero-subject">
      <img :src="heroSubject" alt="Wedding couple" />
    </div>

    <div class="hero-focus hero-focus--bride">
      <span class="hero-focus__tl" />
      <span class="hero-focus__tr" />
      <span class="hero-focus__bl" />
      <span class="hero-focus__br" />
    </div>

    <div class="hero-focus hero-focus--groom">
      <span class="hero-focus__tl" />
      <span class="hero-focus__tr" />
      <span class="hero-focus__bl" />
      <span class="hero-focus__br" />
    </div>

    <div class="hero-tagline">
      <p>
        Wedding photography for the modern romantic. Capturing love with a
        fashion-forward eye and a documentary soul.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroBg from '@assets/hero/hero-bg.png'
import heroSubject from '@assets/hero/hero-subject.png'
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 3;
    pointer-events: none;
  }
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.hero-headline {
  position: absolute;
  top: 31%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
  text-align: center;
  pointer-events: none;
}

.hero-sans {
  margin-bottom: -0.15em;
}

.hero-subject {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.hero-focus {
  position: absolute;
  z-index: 4;
  aspect-ratio: 1;
  pointer-events: none;
  width: 7%;
}

.hero-focus--bride {
  top: 37%;
  left: 44%;
}

.hero-focus--groom {
  top: 42%;
  left: 57%;
}

.hero-focus__tl,
.hero-focus__tr,
.hero-focus__bl,
.hero-focus__br {
  position: absolute;
  width: 25%;
  height: 25%;
  border-color: $white;
  border-style: solid;
  display: block;
  opacity: 0.9;
}

.hero-focus__tl {
  top: 0;
  left: 0;
  border-width: 2px 0 0 2px;
}

.hero-focus__tr {
  top: 0;
  right: 0;
  border-width: 2px 2px 0 0;
}

.hero-focus__bl {
  bottom: 0;
  left: 0;
  border-width: 0 0 2px 2px;
}

.hero-focus__br {
  bottom: 0;
  right: 0;
  border-width: 0 2px 2px 0;
}

.hero-tagline {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  max-width: 340px;
  text-align: center;

  p {
    font-size: 0.875rem;
    line-height: 1.6;
    color: $white;
  }
}

/* Tablet */
@media (max-width: $tablet) {
  .hero-focus--bride {
    top: 41%;
    left: 38%;
    width: 13%;
  }

  .hero-focus--groom {
    top: 43%;
    left: 66%;
    width: 13%;
  }
}

/* Mobile */
@media (max-width: $mobile) {
  .hero-focus--bride {
    top: 42%;
    left: 34%;
    width: 16%;
  }

  .hero-focus--groom {
    top: 45%;
    left: 72%;
    width: 16%;
  }

  .hero-tagline {
    max-width: 280px;
  }
}
</style>
