<template>
  <main>
    <Navbar />
    <Hero />
    <About />
  </main>
</template>

<script setup lang="ts">
import Navbar from '@components/Navbar.vue'
import Hero from '@sections/Hero.vue'
import About from '@sections/About.vue'
</script>

<style lang="scss">
@use '@styles/main.scss';
</style>
