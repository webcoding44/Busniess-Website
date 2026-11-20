import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/ArrowIcon'
import CallToAction from '../components/CallToAction'
import Herosection from '../components/Herosection'
import ProjectGrid from '../components/ProjectGrid'
import PropertyFeatures from '../components/PropertyFeatures'
import SectionHeading from '../components/SectionHeading'
import { imageStudies, processSteps } from '../data/siteContent'
import { usePageMotion } from '../hooks/usePageMotion'

function Home() {
  const mainRef = usePageMotion<HTMLElement>()

  return (
    <main id="main-content" ref={mainRef}>
      <Herosection />
      <PropertyFeatures />

      <section className="intro-section section-pad" id="about-vista">
        <div className="page-shell intro-section__grid">
          <div className="intro-section__copy" data-reveal>
            <p className="eyebrow"><span /> About Vista</p>
            <h2>Good living begins with the right place.</h2>
            <p className="large-copy">
              A home is more than its walls. It is the light in the morning, the ease of coming back, and the feeling of belonging to somewhere.
            </p>
            <p>
              We bring together thoughtful planning, contemporary architecture, and welcoming shared spaces to imagine places that feel good to live in every day.
            </p>
            <div className="intro-section__proof">
              <div><strong>Considered design</strong><span>Plans made around real routines</span></div>
              <div><strong>Lasting materials</strong><span>Choices that age with grace</span></div>
            </div>
            <Link className="text-link" to="/about">Discover our story <ArrowIcon /></Link>
          </div>
          <div className="intro-section__visual" data-reveal>
            <img src={imageStudies[3]} alt="Warm contemporary living space with carefully layered interior details" loading="lazy" />
            <span className="image-caption">A place to feel at home.</span>
            <span className="intro-section__stamp" aria-hidden="true">V<span>+</span></span>
          </div>
        </div>
      </section>

      <section className="projects-section projects-section--light section-pad">
        <div className="page-shell">
          <div className="projects-section__heading">
            <SectionHeading
              eyebrow="Featured properties"
              title="Find your kind of place."
              description="Explore a few residential concepts shaped by light, landscape, and the rhythms of daily life."
            />
            <Link className="text-link projects-section__all" to="/projects">View all properties <ArrowIcon /></Link>
          </div>
          <ProjectGrid light />
        </div>
      </section>

      <section className="approach-section section-pad section-pad--dark">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Our approach"
            title="From a good idea to a place that feels right."
            description="Every development begins with the setting and the people who will make it home."
            inverse
          />
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" data-reveal key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  )
}

export default Home
