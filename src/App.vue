<template>
  <main>
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
  </main>
</template>

<script setup lang="ts">
import Navbar from '@components/Navbar.vue'
import Hero from '@sections/Hero.vue'
import About from '@sections/About.vue'
import Portfolio from '@sections/Portfolio.vue'
</script>

<style lang="scss">
@use '@styles/main.scss';
</style>
