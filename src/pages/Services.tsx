import CallToAction from '../components/CallToAction'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ServiceList from '../components/ServiceList'
import { imageStudies } from '../data/siteContent'
import { usePageMotion } from '../hooks/usePageMotion'

const developmentPrinciples = [
  { title: 'Begin with the site', description: 'Read the light, access, landscape, and local context before setting a direction.' },
  { title: 'Plan around daily life', description: 'Give private rooms, shared amenities, and arrival spaces a clear purpose.' },
  { title: 'Carry the idea through', description: 'Keep the design intent present as materials, details, and delivery take shape.' },
]

function Services() {
  const mainRef = usePageMotion<HTMLElement>()

  return (
    <main id="main-content" ref={mainRef}>
      <PageHero
        label="Our approach"
        title="A clearer path from land to living."
        summary="Thoughtful residential development brings site, architecture, and the experience of home into one connected plan."
        image={imageStudies[2]}
        imageAlt="A refined contemporary interior with floor-to-ceiling windows"
      />

      <section className="services-page-intro section-pad">
        <div className="page-shell services-page-intro__grid">
          <div data-reveal>
            <p className="eyebrow"><span /> What we do</p>
            <h2>One connected view of the whole development.</h2>
          </div>
          <p className="large-copy" data-reveal>We consider the site, the homes, and the spaces between them together—so the finished place feels cohesive from the first arrival onward.</p>
        </div>
      </section>

      <section className="services-detail section-pad section-pad--soft">
        <div className="page-shell">
          <SectionHeading eyebrow="Our capabilities" title="The elements that make a place work." />
          <ServiceList />
        </div>
      </section>

      <section className="benefits-section section-pad section-pad--dark">
        <div className="page-shell benefits-section__grid">
          <div data-reveal>
            <p className="eyebrow eyebrow--light"><span /> A considered process</p>
            <h2>Every decision has a place in the bigger picture.</h2>
            <p className="large-copy">A strong development is more than a striking facade. It is a series of well-connected choices that make life feel easier.</p>
          </div>
          <div className="benefit-list">
            {developmentPrinciples.map((principle, index) => (
              <article data-reveal key={principle.title}>
                <span>0{index + 1}</span>
                <div><h3>{principle.title}</h3><p>{principle.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallToAction eyebrow="Your next move" title="Let’s talk about what you are looking for." description="From a first home to a development partnership, every good conversation starts somewhere." />
    </main>
  )
}

export default Services
