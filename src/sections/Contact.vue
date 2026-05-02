<template>
  <section class="contact section-padding" id="contact">
    <div class="contact__intro">
      <h2 class="contact__heading text-heading">
        <span class="sans">Let's Create</span>
        <span class="serif">Something Beautiful.</span>
      </h2>
      <p class="contact__availability">
        Currently booking for 2026/2027 seasons.<br />
        Limited availability for destination weddings.
      </p>
    </div>

    <div class="contact__body">
      <div class="contact__image">
        <img
          src="/src/assets/about/about-1.jpg"
          alt="Couple in field"
          loading="lazy"
        />
      </div>

      <form class="contact__form" novalidate @submit.prevent="handleSubmit">
        <div class="contact__field" :class="{ 'has-error': errors.name }">
          <label for="name">Name</label>
          <input id="name" v-model="form.name" type="text" />
          <span v-if="errors.name" class="contact__error">{{
            errors.name
          }}</span>
        </div>

        <div class="contact__field">
          <label for="partner">Partner's Name</label>
          <input id="partner" v-model="form.partner" type="text" />
        </div>

        <div class="contact__field" :class="{ 'has-error': errors.email }">
          <label for="email">Email</label>
          <input id="email" v-model="form.email" type="email" />
          <span v-if="errors.email" class="contact__error">{{
            errors.email
          }}</span>
        </div>

        <div class="contact__field">
          <label for="date-venue">Wedding Date / Venue</label>
          <input id="date-venue" v-model="form.dateVenue" type="text" />
        </div>

        <div
          class="contact__field contact__field--full"
          :class="{ 'has-error': errors.story }"
        >
          <label for="story">Tell me your story</label>
          <textarea id="story" v-model="form.story" rows="3"></textarea>
          <span v-if="errors.story" class="contact__error">{{
            errors.story
          }}</span>
        </div>

        <button type="submit" class="contact__submit">Submit</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  partner: '',
  email: '',
  dateVenue: '',
  story: '',
})

const errors = reactive({
  name: '',
  email: '',
  story: '',
})

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validate = () => {
  errors.name = form.name.trim() ? '' : 'Please enter your name.'
  errors.email = form.email.trim()
    ? EMAIL_REGEX.test(form.email)
      ? ''
      : 'Please enter a valid email.'
    : 'Please enter your email.'
  errors.story = form.story.trim()
    ? ''
    : 'Please share a few words about your day.'

  return !errors.name && !errors.email && !errors.story
}

const handleSubmit = () => {
  if (!validate()) return
  console.log('Form submitted:', { ...form })
}
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.contact {
  background-color: $dark-gray;
  color: $white;
}

.contact__intro {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: $spacing-lg;
  margin-bottom: $spacing-xl;
}

.contact__heading {
  width: fit-content;

  .sans {
    display: block;
  }

  .serif {
    display: block;
    margin-left: $spacing-md;
  }
}

.contact__availability {
  text-align: right;
  font-size: 0.875rem;
  line-height: 1.5;
}

.contact__body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-xl;
  align-items: start;
}

.contact__image {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) brightness(0.8);
  }
}

.contact__form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-lg $spacing-md;
}

.contact__field {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;

  &--full {
    grid-column: 1 / -1;
  }

  label {
    font-size: 0.875rem;
    color: $white;
  }

  input,
  textarea {
    background: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    color: $white;
    font-family: $font-sans;
    font-size: 1rem;
    padding: 0.5rem 0;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-bottom-color: $white;
    }
  }

  textarea {
    resize: none;
    font-family: inherit;
  }
}

.contact__submit {
  grid-column: 1 / -1;
  justify-self: start;
  background: none;
  border: 1px solid $white;
  color: $white;
  padding: 1rem 2rem;
  font-family: $font-sans;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: $white;
    color: $dark-gray;
  }
}

.contact__error {
  font-size: 0.75rem;
  color: #d97a7a;
  margin-top: 0.25rem;
}

.contact__field.has-error {
  input,
  textarea {
    border-bottom-color: #d97a7a;
  }
}
@media (max-width: $mobile) {
  .contact__intro {
    flex-direction: column;
    gap: $spacing-md;
  }

  .contact__availability {
    text-align: left;
  }

  .contact__body {
    grid-template-columns: 1fr;
  }

  .contact__form {
    grid-template-columns: 1fr;
    gap: $spacing-md;
  }
}
</style>
