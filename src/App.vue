<template>
  <main>
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
    <Investment />
  </main>
</template>

<script setup lang="ts">
import Navbar from '@components/Navbar.vue'
import Hero from '@sections/Hero.vue'
import About from '@sections/About.vue'
import Portfolio from '@sections/Portfolio.vue'
import Investment from '@sections/Investment.vue'
</script>

<style lang="scss">
@use '@styles/main.scss';
</style>
