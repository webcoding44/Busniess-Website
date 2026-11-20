import { projectStudies } from '../data/siteContent'
import { ArrowIcon } from './ArrowIcon'

type ProjectGridProps = {
  light?: boolean
}

function ProjectGrid({ light = false }: ProjectGridProps) {
  const formatIndex = (index: number) => new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(index + 1)

  return (
    <div className={`project-grid${light ? ' project-grid--light' : ''}`}>
      {projectStudies.map((project, index) => (
        <article className="project-card" data-reveal key={project.title}>
          <div className="project-card__image-wrap">
            <img src={project.image} alt={project.alt} loading="lazy" />
            <span className="project-card__number">{formatIndex(index)}</span>
            <span className="project-card__arrow" aria-hidden="true"><ArrowIcon diagonal /></span>
          </div>
          <div className="project-card__meta">
            <p>{project.category}</p>
            <h3>{project.title}</h3>
            <p className="project-card__description">{project.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ProjectGrid
