import { useState } from 'react'
import type { FormEvent } from 'react'
import PageHero from '../components/PageHero'
import { usePageMotion } from '../hooks/usePageMotion'
import { ArrowIcon } from '../components/ArrowIcon'

const emailAddress = 'hello@yourcompany.com'

function Contact() {
  const mainRef = usePageMotion<HTMLElement>()
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const interest = String(formData.get('interest') ?? '')
    const subject = encodeURIComponent(`Property enquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nEnquiry: ${interest}\n\n${String(formData.get('message') ?? '')}`,
    )

    setStatus('Your email app will open with your enquiry ready to send.')
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`
  }

  return (
    <main id="main-content" ref={mainRef}>
      <PageHero
        label="Contact"
        title="Let’s find the right place to begin."
        summary="Tell us what you are looking for, and we’ll help you explore the next step."
        compact
      />

      <section className="contact-section section-pad">
        <div className="page-shell contact-section__grid">
          <div className="contact-section__intro" data-reveal>
            <p className="eyebrow"><span /> Get in touch</p>
            <h2>Tell us what home means to you.</h2>
            <p className="large-copy">A little about your plans is all we need to start a useful conversation.</p>

            <div className="contact-details">
              <div>
                <span className="footer-label">Email</span>
                <a href={`mailto:${emailAddress}`}>{emailAddress} <ArrowIcon diagonal /></a>
              </div>
              <div>
                <span className="footer-label">Connect</span>
                <div className="contact-socials">
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon diagonal /></a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <ArrowIcon diagonal /></a>
                </div>
              </div>
            </div>
            <p className="contact-placeholder-note">Email and social links are examples. Replace them with your business details before launch.</p>
          </div>

          <form className="contact-form" data-reveal onSubmit={handleSubmit}>
            <div className="contact-form__heading">
              <p className="eyebrow"><span /> Your enquiry</p>
              <h3>Let’s start a conversation.</h3>
              <p>Share a few details and we’ll help you take the next step.</p>
            </div>
            <div className="form-row">
              <label>
                <span>Your name</span>
                <input autoComplete="name" name="name" placeholder="Name" required />
              </label>
              <label>
                <span>Email address</span>
                <input autoComplete="email" name="email" type="email" placeholder="you@example.com" required />
              </label>
            </div>
            <label>
              <span>I’m interested in</span>
              <select defaultValue="" name="interest" required>
                <option disabled value="">Choose an enquiry type</option>
                <option>Finding a home</option>
                <option>Residential development</option>
                <option>Partnership opportunity</option>
                <option>Something else</option>
              </select>
            </label>
            <label>
              <span>Tell us a little more</span>
              <textarea name="message" placeholder="Share what matters to you, your preferred location, or any questions…" rows={5} required />
            </label>
            <div className="contact-form__bottom">
              <p id="contact-status" role="status" aria-live="polite">{status || 'Complete the form and your email app will open with your message.'}</p>
              <button className="button button--dark" type="submit">Prepare enquiry <ArrowIcon /></button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact
