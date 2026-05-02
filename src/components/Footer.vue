<template>
  <footer class="footer">
    <div class="footer__watermark" aria-hidden="true">ELENA VORA</div>

    <div class="footer__content">
      <p class="footer__copyright">© {{ year }} ELENA VORA PHOTOGRAPHY.</p>
      <nav class="footer__links">
        <a href="https://instagram.com" target="_blank" rel="noopener"
          >Instagram</a
        >
        <span aria-hidden="true">/</span>
        <a href="https://pinterest.com" target="_blank" rel="noopener"
          >Pinterest</a
        >
        <span aria-hidden="true">/</span>
        <a href="mailto:hello@elenavora.com">Email</a>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const year = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.footer {
  position: relative;
  background-color: $dark-gray;
  color: $white;
  padding: $spacing-xl $spacing-md $spacing-md;
  overflow: hidden;
}

.footer__watermark {
  position: absolute;
  bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: $font-sans;
  font-weight: 500;
  font-size: clamp(5rem, 18vw, 16rem);
  letter-spacing: -0.04em;
  line-height: 1;
  color: $dark-green;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}

.footer__content {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  z-index: 1;
}

.footer__links {
  display: flex;
  gap: 0.5rem;

  a {
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.6;
    }
  }
}

@media (max-width: $mobile) {
  .footer__content {
    flex-direction: column;
    gap: $spacing-md;
    text-align: center;
  }
}
</style>
