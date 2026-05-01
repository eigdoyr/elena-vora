import portfolio1 from '@assets/portfolio/portfolio-1.jpg'
import portfolio2 from '@assets/portfolio/portfolio-2.jpg'
import portfolio3 from '@assets/portfolio/portfolio-3.jpg'

export interface PortfolioItem {
  id: number
  image: string
  title: string
  location: string
  url: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    image: portfolio1,
    title: 'The Amalfi Elopement',
    location: 'Amalfi Coast, Italy',
    url: '/portfolio/the-amalfi-elopement',
  },
  {
    id: 2,
    image: portfolio2,
    title: 'Vogue Wedding in Provence',
    location: 'Provence, France',
    url: '/portfolio/vogue-wedding-in-provence',
  },
  {
    id: 3,
    image: portfolio3,
    title: 'City Hall Civil Ceremony',
    location: 'New York City',
    url: '/portfolio/city-hall-civil-ceremony',
  },
]
