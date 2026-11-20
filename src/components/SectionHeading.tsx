type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  inverse?: boolean
}

function SectionHeading({ eyebrow, title, description, inverse = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading${inverse ? ' section-heading--inverse' : ''}`} data-reveal>
      <p className="eyebrow"><span /> {eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  )
}

export default SectionHeading
