<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <a href="#hero" class="navbar-logo">Elena Vora</a>

    <ul class="navbar-links">
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <button
      class="navbar-hamburger"
      :class="{ 'navbar-hamburger--open': isOpen }"
      @click="toggleMenu"
      aria-label="Toggle menu"
    >
      <span />
      <span />
    </button>
  </nav>

  <Teleport to="body">
    <div class="navbar-menu" :class="{ 'navbar-menu--open': isOpen }">
      <ul class="navbar-menu-links">
        <li><a href="#portfolio" @click="closeMenu">Portfolio</a></li>
        <li><a href="#services" @click="closeMenu">Services</a></li>
        <li><a href="#testimonials" @click="closeMenu">Testimonials</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 102;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  transition: background-color 0.3s ease;

  &--scrolled {
    background-color: rgba(250, 250, 248, 0.95);
    backdrop-filter: blur(8px);
  }
}

.navbar-logo {
  font-family: $font-sans;
  font-weight: 500;
  font-size: 0.875rem;
  color: $dark-green;
  letter-spacing: 0.02em;
}

.navbar-links {
  display: contents;

  li {
    display: flex;
    justify-content: center;
  }

  a {
    font-family: $font-sans;
    font-weight: 400;
    font-size: 0.875rem;
    color: $dark-green;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.5;
    }
  }
}

.navbar-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  z-index: 102;

  span {
    display: block;
    width: 24px;
    height: 1px;
    background-color: $dark-green;
    transition: all 0.3s ease;
  }

  &--open {
    span:nth-child(1) {
      transform: translateY(3px) rotate(45deg);
    }
    span:nth-child(2) {
      transform: translateY(-3px) rotate(-45deg);
    }
  }
}

@media (max-width: $mobile) {
  .navbar-links {
    display: none;
  }

  .navbar-hamburger {
    display: flex;
  }
}
</style>
