export interface Testimonial {
  id: number
  quote: string
  author: string
  context: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Elena didn't just take photos; she saw us. Looking through our album feels like watching a cinema verité film of our favorite day. Absolutely breathtaking.",
    author: 'Sarah & Julian',
    context: 'married in Tuscany',
    image: '/src/assets/testimonials/sarah-julian.jpg',
  },
  {
    id: 2,
    quote:
      'We were nervous about being in front of the camera, but Elena made us feel completely at ease. The result? Photos that actually look like us, not posed strangers.',
    author: 'Maya & Theo',
    context: 'eloped in Iceland',
    image: '/src/assets/testimonials/maya-theo.jpg',
  },
  {
    id: 3,
    quote:
      "Every guest still talks about how invisible yet present she was. She captured moments we didn't even know were happening. Pure magic.",
    author: 'Priya & James',
    context: 'celebrated in Jaipur',
    image: '/src/assets/testimonials/priya-james.jpg',
  },
  {
    id: 4,
    quote:
      'Elena has an eye for the in-between moments — the ones that feel like memory, not performance. Our album is the most precious thing we own. From the way she captured the quiet glances between us to the chaos of the dance floor, every photo tells a piece of our story we want to revisit forever.',
    author: 'Clara & Antoine',
    context: 'married in Provence',
    image: '/src/assets/testimonials/clara-antoine.jpg',
  },
  {
    id: 5,
    quote:
      "From the first call to the final delivery, every interaction was thoughtful. The photos are stunning, but it's the experience we'll remember.",
    author: 'Nina & Marcus',
    context: 'wed in Portugal',
    image: '/src/assets/testimonials/nina-marcus.jpg',
  },
]
