<template>
  <section class="hero" id="hero" data-nav-theme="light">
    <div class="hero__bg">
      <img :src="heroBg" alt="" />
    </div>

    <h1 class="hero__headline">
      <span class="hero-sans">The Art of the</span>
      <span class="hero-serif">Unscripted.</span>
    </h1>

    <div class="hero__subject">
      <img :src="heroSubject" alt="Wedding couple" />
      <span class="hero__focus hero__focus--bride">
        <span class="hero__focus-corner hero__focus-corner--tl" />
        <span class="hero__focus-corner hero__focus-corner--tr" />
        <span class="hero__focus-corner hero__focus-corner--bl" />
        <span class="hero__focus-corner hero__focus-corner--br" />
      </span>
      <span class="hero__focus hero__focus--groom">
        <span class="hero__focus-corner hero__focus-corner--tl" />
        <span class="hero__focus-corner hero__focus-corner--tr" />
        <span class="hero__focus-corner hero__focus-corner--bl" />
        <span class="hero__focus-corner hero__focus-corner--br" />
      </span>
    </div>

    <p class="hero__tagline">
      Wedding photography for the modern romantic. Capturing love with a
      fashion-forward eye and a documentary soul.
    </p>
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
    inset: 60% 0 0 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 1;
    pointer-events: none;
  }
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.hero__headline {
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
  width: 100%;
  text-align: center;
  pointer-events: none;
  margin: 0;

  .hero-sans,
  .hero-serif {
    display: block;
  }

  .hero-sans {
    margin-bottom: -0.15em;
  }
}

.hero__subject {
  position: absolute;
  inset: 0;
  z-index: 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

$bride-x: 47.5%;
$bride-y: 44.1%;
$groom-x: 60.2%;
$groom-y: 47.1%;
$focus-size: clamp(80px, 10vw, 100px);

.hero__focus {
  position: absolute;
  width: $focus-size;
  aspect-ratio: 1;
  pointer-events: none;
  transform: translate(-50%, -50%) scale(2);
  opacity: 0;
  animation: focus-lock 0.8s ease-out forwards;

  &--bride {
    top: $bride-y;
    left: $bride-x;
    animation-delay: 0.4s;
  }

  &--groom {
    top: $groom-y;
    left: $groom-x;
    animation-delay: 0.55s;
  }
}

.hero__focus-corner {
  position: absolute;
  width: 25%;
  height: 25%;
  border-color: $white;
  border-style: solid;
  opacity: 0.9;

  &--tl {
    top: 0;
    left: 0;
    border-width: 2px 0 0 2px;
  }
  &--tr {
    top: 0;
    right: 0;
    border-width: 2px 2px 0 0;
  }
  &--bl {
    bottom: 0;
    left: 0;
    border-width: 0 0 2px 2px;
  }
  &--br {
    bottom: 0;
    right: 0;
    border-width: 0 2px 2px 0;
  }
}

@keyframes focus-lock {
  0% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.9;
  }
}

.hero__tagline {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  max-width: 340px;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.6;
  color: $white;
  margin: 0;

  @media (max-width: $mobile) {
    max-width: 280px;
  }
}

@media (max-width: $tablet) {
  .hero__focus {
    display: none;
  }
}
</style>
