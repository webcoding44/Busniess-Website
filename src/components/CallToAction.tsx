import { Link } from 'react-router-dom'
import { ArrowIcon } from './ArrowIcon'

type CallToActionProps = {
  eyebrow?: string
  title?: string
  description?: string
}

function CallToAction({
  eyebrow = 'Your next move',
  title = 'Find a place that feels like yours.',
  description = 'Tell us what matters most and we’ll help you explore the right possibilities.',
}: CallToActionProps) {
  return (
    <section className="cta-band">
      <div className="cta-band__inner page-shell" data-reveal>
        <div>
          <p className="eyebrow eyebrow--light"><span /> {eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
          <Link className="button button--light" to="/contact">Request information <ArrowIcon /></Link>
      </div>
      <span className="cta-band__orb" aria-hidden="true" />
    </section>
  )
}

export default CallToAction
