export interface Investment {
  id: number
  number: string
  title: string
  description: string
  deliverable: string
  image: string
}

export const Investments: Investment[] = [
  {
    id: 1,
    number: '1.',
    title: 'The Elopement',
    description:
      'For intimate unions and civil ceremonies. Up to 4 hours of coverage.',
    deliverable: '300+ Edited High-Res Images.',
    image: '/src/assets/investment/elopement.jpg',
  },
  {
    id: 2,
    number: '2.',
    title: 'The Signature',
    description:
      'Full wedding day coverage from preparation to party. Up to 8 hours.',
    deliverable: '600+ Edited High-Res Images\n+ Second Shooter.',
    image: '/src/assets/investment/signature.jpg',
  },
  {
    id: 3,
    number: '3.',
    title: 'The Editorial',
    description:
      'Multi-day coverage including rehearsal dinner and editorial portrait session.',
    deliverable: 'Full Gallery\n+ Fine Art Heirloom Album.',
    image: '/src/assets/investment/editorial.jpg',
  },
]
