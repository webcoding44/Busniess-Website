import CallToAction from '../components/CallToAction'
import PageHero from '../components/PageHero'
import ProjectGrid from '../components/ProjectGrid'
import SectionHeading from '../components/SectionHeading'
import { imageStudies } from '../data/siteContent'
import { usePageMotion } from '../hooks/usePageMotion'

function Projects() {
  const mainRef = usePageMotion<HTMLElement>()

  return (
    <main id="main-content" ref={mainRef}>
      <PageHero
        label="Properties"
        title="Places with room to become home."
        summary="Explore residential concepts shaped around light, comfort, and a stronger connection to their surroundings."
        image={imageStudies[4]}
        imageAlt="Sunlit contemporary living room with expansive windows and warm natural finishes"
      />

      <section className="projects-page projects-page--light section-pad">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Development concepts"
            title="Different settings. A shared attention to detail."
            description="These concept studies use the available architectural imagery to explore distinct approaches to contemporary living."
          />
          <ProjectGrid light />
        </div>
      </section>

      <section className="projects-note section-pad section-pad--soft">
        <div className="page-shell projects-note__inner" data-reveal>
          <p className="eyebrow"><span /> The starting point</p>
          <h2>What should your next place make possible?</h2>
          <p className="large-copy">A quieter morning, more room to gather, or a closer connection to the city. The answer helps shape the place.</p>
        </div>
      </section>

      <CallToAction eyebrow="Find out more" title="See what could feel right for you." />
    </main>
  )
}

export default Projects
