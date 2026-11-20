import { Link } from 'react-router-dom'
import CallToAction from '../components/CallToAction'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { imageStudies } from '../data/siteContent'
import { usePageMotion } from '../hooks/usePageMotion'
import { ArrowIcon } from '../components/ArrowIcon'

const values = [
  { number: '01', title: 'Place', description: 'Every project begins with the character, setting, and possibility of its site.' },
  { number: '02', title: 'People', description: 'Homes and shared spaces should make everyday routines feel more natural.' },
  { number: '03', title: 'Purpose', description: 'Clear planning helps architecture, landscape, and amenity work as one.' },
  { number: '04', title: 'Permanence', description: 'Material choices and proportions should feel considered for years to come.' },
]

function About() {
  const mainRef = usePageMotion<HTMLElement>()

  return (
    <main id="main-content" ref={mainRef}>
      <PageHero
        label="About Vista"
        title="Homes should feel as good as they look."
        summary="We imagine contemporary places with a lasting connection to their setting and the people who live there."
        image={imageStudies[1]}
        imageAlt="Bright contemporary bedroom opening to a leafy outlook"
      />

      <section className="about-story section-pad">
        <div className="page-shell about-story__grid">
          <div data-reveal>
            <p className="eyebrow"><span /> Our point of view</p>
            <h2>Good development starts long before the first drawing.</h2>
          </div>
          <div className="about-story__copy" data-reveal>
            <p className="large-copy">It starts with understanding a place: its light, its landscape, its connections, and the lives that could unfold there.</p>
            <p>From that first understanding, a clearer vision can take shape. We bring planning, architecture, and the experience of home into one considered conversation—so the details feel connected, not added on.</p>
            <Link className="text-link" to="/services">Explore our approach <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="mission-section section-pad section-pad--dark">
        <div className="page-shell mission-section__grid">
          <div data-reveal>
            <p className="eyebrow eyebrow--light"><span /> Our mission</p>
            <h2>To shape thoughtful places for modern life.</h2>
          </div>
          <div data-reveal>
            <p className="eyebrow eyebrow--light"><span /> Our vision</p>
            <p className="large-copy">Neighbourhoods where good design meets the everyday: a welcoming arrival, a comfortable home, and room to feel part of something.</p>
          </div>
        </div>
      </section>

      <section className="values-section section-pad section-pad--soft">
        <div className="page-shell">
          <SectionHeading eyebrow="What guides us" title="A few principles. One clear point of view." />
          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" data-reveal key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-image-section">
        <img src={imageStudies[0]} alt="Bright contemporary bedroom with soft natural light and garden views" loading="lazy" data-reveal />
        <div className="about-image-section__caption page-shell" data-reveal>
          <span>Space to settle in</span>
          <span>Vista / A point of view</span>
        </div>
      </section>

      <CallToAction eyebrow="Start a conversation" title="Let’s find the right place to begin." />
    </main>
  )
}

export default About
