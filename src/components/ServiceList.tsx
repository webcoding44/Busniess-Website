import { Link } from 'react-router-dom'
import { services } from '../data/siteContent'
import { ArrowIcon } from './ArrowIcon'

type ServiceListProps = {
  linked?: boolean
}

function ServiceList({ linked = false }: ServiceListProps) {
  return (
    <div className="service-list">
      {services.map((service) => (
        <article className="service-row" data-reveal key={service.number}>
          <span className="service-row__number">{service.number}</span>
          <div className="service-row__main">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
          <p className="service-row__detail">{service.detail}</p>
          {linked && <Link className="service-row__link" to="/services" aria-label={`Details for ${service.title}`}><ArrowIcon diagonal /></Link>}
        </article>
      ))}
    </div>
  )
}

export default ServiceList
