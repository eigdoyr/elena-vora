<template>
  <main>
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
    <Investment />
    <Testimonial />
    <Contact />
  </main>
</template>

<script setup lang="ts">
import Navbar from '@components/Navbar.vue'
import Hero from '@sections/Hero.vue'
import About from '@sections/About.vue'
import Portfolio from '@sections/Portfolio.vue'
import Investment from '@sections/Investment.vue'
import Testimonial from '@sections/Testimonial.vue'
import Contact from '@sections/Contact.vue'
</script>

<style lang="scss">
@use '@styles/main.scss';
</style>
