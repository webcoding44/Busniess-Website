export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/projects' },
  { label: 'About us', to: '/about' },
  { label: 'Our approach', to: '/services' },
  { label: 'Contact', to: '/contact' },
] as const

export const services = [
  {
    number: '01',
    title: 'Residential development',
    description: 'From the first site study to the final details, each decision begins with how people want to live.',
    detail: 'Site planning · Development strategy · Design direction',
  },
  {
    number: '02',
    title: 'Architecture & interiors',
    description: 'Natural light, considered materials, and well-planned rooms come together in homes that feel effortless.',
    detail: 'Architecture · Interior design · Material selection',
  },
  {
    number: '03',
    title: 'Community planning',
    description: 'Shared spaces and everyday amenities help a collection of homes become a connected neighbourhood.',
    detail: 'Public realm · Amenities · Neighbourhood experience',
  },
]

export const projectStudies = [
  {
    title: 'The Courtyard Residences',
    category: 'Community living · Concept study',
    image: '/images/residences-exterior.jpg',
    alt: 'Modern glass residence set among mature trees',
    description: 'A calm arrival, generous glazing, and a shared outdoor centre create a welcoming sense of place.',
  },
  {
    title: 'Skyline House',
    category: 'Urban living · Concept study',
    image: '/images/courtyard-home.jpg',
    alt: 'Contemporary wood-and-glass home beside a landscaped courtyard',
    description: 'A study in daylight, warm finishes, and flexible rooms above the rhythm of the city.',
  },
  {
    title: 'Parkside Collection',
    category: 'Residential living · Concept study',
    image: '/images/bright-interior.jpg',
    alt: 'Contemporary residence with an open lawn and clean modern lines',
    description: 'A collection concept that brings quieter rooms and shared amenities into one considered plan.',
  },
]

export const processSteps = [
  { number: '01', title: 'Understand', description: 'We study the site, the surrounding neighbourhood, and the needs of future residents.' },
  { number: '02', title: 'Shape', description: 'Architecture, landscape, and shared amenities become one coherent plan.' },
  { number: '03', title: 'Deliver', description: 'We carry the intent through the details that make a place feel complete.' },
]

export const imageStudies = [
  '/images/living-space.jpg',
  '/images/coastal-home.jpg',
  '/images/city-interior.jpg',
  '/images/interior-details.jpg',
  '/images/modern-residence.jpg',
]
