type PageHeroProps = {
  label: string
  title: string
  summary: string
  image?: string
  imageAlt?: string
  compact?: boolean
}

function PageHero({ label, title, summary, image, imageAlt = '', compact = false }: PageHeroProps) {
  return (
    <section className={`page-hero${compact ? ' page-hero--compact' : ''}${image ? ' page-hero--image' : ''}`}>
      {image && <img className="page-hero__image" src={image} alt={imageAlt} />}
      <div className="page-hero__overlay" aria-hidden="true" />
      <div className="page-hero__content page-shell" data-reveal>
        <p className="eyebrow eyebrow--light"><span /> {label}</p>
        <h1>{title}</h1>
        <p className="page-hero__summary">{summary}</p>
      </div>
      <span className="page-hero__index" aria-hidden="true">VISTA DEVELOPMENTS / RESIDENTIAL</span>
    </section>
  )
}

export default PageHero
