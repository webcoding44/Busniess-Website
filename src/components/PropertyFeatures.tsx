type Feature = {
  icon: 'home' | 'city' | 'landscape'
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: 'home',
    title: 'Thoughtful homes',
    description: 'Comfortable layouts, natural light, and details made for daily life.',
  },
  {
    icon: 'city',
    title: 'Connected living',
    description: 'Neighbourhoods planned around access, shared spaces, and what is close by.',
  },
  {
    icon: 'landscape',
    title: 'A sense of place',
    description: 'Architecture that responds to its setting and feels at home there.',
  },
]

function FeatureIcon({ name }: { name: Feature['icon'] }) {
  if (name === 'home') {
    return <path d="M4 10.5 12 4l8 6.5M6.5 9.5V20h11V9.5M10 20v-6h4v6" />
  }

  if (name === 'city') {
    return <path d="M5 20V5h9v15M14 9h5v11M8 8h3M8 11.5h3M8 15h3M17 12h1M17 15h1M3 20h18" />
  }

  return <path d="M3 18.5 9 12l3.5 3.5 3.5-6 5 9M3 21h18M5 7.5h14" />
}

function PropertyFeatures() {
  return (
    <section aria-label="What defines our homes" className="property-features page-shell">
      {features.map((feature, index) => (
        <article className="property-feature" data-reveal key={feature.title}>
          <span className="property-feature__icon">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
              <FeatureIcon name={feature.icon} />
            </svg>
          </span>
          <span className="property-feature__number">0{index + 1}</span>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </article>
      ))}
    </section>
  )
}

export default PropertyFeatures
