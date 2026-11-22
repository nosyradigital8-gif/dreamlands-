'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, Banknote, CheckCircle2, ChevronRight, CircleDollarSign, Landmark, MapPin, Menu, MessageCircle, Phone, Send, Smartphone, Tv, X, Zap } from 'lucide-react'

const phone = '+27604121547'
const phoneLabel = '+27 60 412 1547'
const email = 'dr.noureldaim@icloud.com'
const maps = 'https://www.google.com/maps/search/?api=1&query=Atlantic+Mall%2C+North+Legon%2C+Accra%2C+Ghana'
const whatsapp = `https://wa.me/${phone.replace('+', '')}`

const services = [
  { icon: Landmark, number: '01', title: 'Banking Services', eyebrow: 'Ecobank agency services', copy: 'Convenient everyday banking support through the Ecobank agency services available at Dream Lands.' },
  { icon: Zap, number: '02', title: 'Electricity Services', eyebrow: 'ECG agency services', copy: 'Get practical assistance with ECG agency services while you are taking care of your other errands.' },
  { icon: Smartphone, number: '03', title: 'Telecommunications', eyebrow: 'MTN services', copy: 'Access MTN services and customer support from a convenient service point in North Legon.' },
  { icon: Tv, number: '04', title: 'Network Services', eyebrow: 'Other network providers', copy: 'Ask our team about available services from other telecommunications network providers.' },
]

const reasons = ['Convenient Atlantic Mall location', 'Multiple essential services in one place', 'Accessible customer assistance', 'A clear, convenient service experience']

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true) }

  return <div className="site-shell">
    <div className="topline"><span>Atlantic Mall · North Legon · Accra</span><a href={`tel:${phone}`}><Phone size={13} /> {phoneLabel}</a></div>
    <header className="header">
      <a href="#home" className="wordmark" onClick={closeMenu}><span className="wordmark-mark"><CircleDollarSign size={22} /></span><span>DREAM <b>LANDS</b><small>EVERYDAY SERVICES</small></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        <a href="#home" onClick={closeMenu}>Home</a><a href="#about" onClick={closeMenu}>About Us</a><a href="#services" onClick={closeMenu}>Our Services</a><a href="#contact" onClick={closeMenu}>Contact</a><a href="#find-us" onClick={closeMenu}>Find Us</a><a className="nav-cta" href={`tel:${phone}`} onClick={closeMenu}>Contact Us <ArrowUpRight size={15} /></a>
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-content"><p className="kicker"><span /> GHANA · NORTH LEGON</p><h1>Your trusted destination for <em>everyday</em> financial &amp; digital services.</h1><p className="hero-lead">Access convenient banking agency, electricity and telecommunications services at Dream Lands, located at Atlantic Mall, North Legon.</p><div className="hero-actions"><a className="button button-gold" href="#services">Explore Our Services <ArrowUpRight size={17} /></a><a className="button button-ghost" href="#find-us">Visit Our Location <MapPin size={16} /></a></div><div className="hero-note"><CheckCircle2 size={17} /> A convenient service point for your everyday needs</div></div>
        <div className="hero-stamp"><span>DL</span><b>Made for<br />everyday life.</b></div>
      </section>

      <section className="intro section" id="about"><div className="intro-image"><img src="/images/dreamlands-about.jpg" alt="Customer service team in a modern service environment" /><div className="image-caption"><span>01</span><b>One place.<br />Many essentials.</b></div></div><div className="intro-copy"><p className="kicker"><span /> ABOUT DREAM LANDS</p><h2>Simple access to the services that <em>keep life moving.</em></h2><p>Dream Lands is a multi-service customer support destination at Atlantic Mall, North Legon. We bring essential banking agency, electricity and telecommunications services together in one accessible place.</p><p>Whether you are handling a payment, asking for assistance or connecting with a network service, our team is here to make the experience more convenient.</p><a className="text-link" href="#services">Discover what we offer <ChevronRight size={17} /></a></div></section>

      <section className="services section" id="services"><div className="section-heading"><div><p className="kicker"><span /> WHAT WE DO</p><h2>Essential services,<br /><em>handled simply.</em></h2></div><p>Visit us at Atlantic Mall for practical support across financial, electricity and telecommunications services.</p></div><div className="service-grid">{services.map((service) => { const Icon = service.icon; return <article className="service-card" key={service.title}><div className="service-card-top"><span>{service.number}</span><Icon size={25} /></div><p className="service-eyebrow">{service.eyebrow}</p><h3>{service.title}</h3><p>{service.copy}</p><a href={`tel:${phone}`}>Learn more <ArrowUpRight size={15} /></a></article> })}</div></section>

      <section className="why section"><div className="why-copy"><p className="kicker kicker-light"><span /> THE DREAM LANDS DIFFERENCE</p><h2>Convenience is<br /><em>the point.</em></h2><p>Every part of Dream Lands is designed to make everyday errands feel more straightforward. Come for one service, take care of several, and leave with a clear next step.</p><a className="button button-gold" href={whatsapp}><MessageCircle size={17} /> Send a WhatsApp enquiry</a></div><div className="why-list">{reasons.map((reason, index) => <div key={reason}><span>0{index + 1}</span><b>{reason}</b><ChevronRight size={17} /></div>)}</div></section>

      <section className="location section" id="find-us"><div className="location-copy"><p className="kicker"><span /> FIND US</p><h2>Your next stop<br /><em>is right here.</em></h2><p>Dream Lands is located at Atlantic Mall in North Legon, Accra, Ghana. We are ready to help with everyday financial and digital service needs.</p><div className="address"><MapPin size={20} /><div><b>Atlantic Mall, North Legon</b><span>Accra, Ghana</span></div></div><a className="button button-navy" href={maps} target="_blank" rel="noreferrer">Get Directions <ArrowUpRight size={17} /></a></div><div className="map-card"><div className="map-grid" /><div className="map-pin"><MapPin size={26} /></div><div className="map-label"><b>DREAM LANDS</b><span>Atlantic Mall · North Legon</span></div></div></section>

      <section className="contact section" id="contact"><div className="contact-heading"><p className="kicker"><span /> CONTACT DREAM LANDS</p><h2>We&apos;re here<br /><em>to help.</em></h2><p>Have a question before you visit? Send us a message or use the details below.</p><div className="contact-details"><a href={`tel:${phone}`}><Phone size={18} /><span><small>Call us</small>{phoneLabel}</span></a><a href={`mailto:${email}`}><Send size={18} /><span><small>Email us</small>{email}</span></a></div></div><form className="contact-form" onSubmit={submit}><label>Your name<input required name="name" placeholder="Enter your name" /></label><label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label><label>How can we help?<textarea required name="message" rows={4} placeholder="Tell us what you need help with..." /></label>{sent ? <div className="form-success"><CheckCircle2 size={17} /> Thanks — your enquiry is ready for the Dream Lands team.</div> : <button className="button button-gold" type="submit">Send enquiry <ArrowUpRight size={17} /></button>}</form></section>
    </main>

    <footer className="footer"><div className="footer-main"><div><a href="#home" className="wordmark footer-wordmark"><span className="wordmark-mark"><CircleDollarSign size={22} /></span><span>DREAM <b>LANDS</b><small>EVERYDAY SERVICES</small></span></a><p>Banking, utility payment and telecommunications services for everyday life in Ghana.</p></div><div className="footer-col"><b>Explore</b><a href="#about">About Us</a><a href="#services">Our Services</a><a href="#find-us">Find Us</a><a href="#contact">Contact</a></div><div className="footer-col"><b>Contact</b><a href={`tel:${phone}`}>{phoneLabel}</a><a href={`mailto:${email}`}>{email}</a><span>Atlantic Mall, North Legon</span></div><div className="footer-col"><b>Connect</b><a href={whatsapp}>WhatsApp enquiry</a><span className="social-placeholder">Instagram · Facebook</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} DREAM LANDS. All rights reserved.</span><span>Ghana-based everyday services</span></div></footer>
  </div>
}
