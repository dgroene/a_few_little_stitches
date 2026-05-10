import { NavLink } from 'react-router-dom'

const faqs = [
  {
    q: 'Which class level is right for me?',
    a: 'If you\'ve never picked up needles or sat at a sewing machine, start with Little Leaguer. Some experience but want to grow? Try All-Star. GOAT is for folks who are already very comfortable and want a real challenge.',
  },
  {
    q: 'Do I need to bring anything?',
    a: 'Nope — all supplies are included in your subscription. Just bring yourself and a willingness to try.',
  },
  {
    q: 'Can I try before I subscribe?',
    a: 'Send us an email and we\'ll talk through the options. We want you to feel good about your class before you commit.',
  },
  {
    q: 'What if I miss a class?',
    a: 'Life happens. Your subscription gets you 4 sessions per month — reach out if you have questions about makeup options.',
  },
]

export default function Contact() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-base-200 py-16 px-4 text-center border-b-4 border-b-transparent"
        style={{ borderImage: 'linear-gradient(90deg,#FF6B6B,#FFC300,#00B4D8,#9B5DE5) 1' }}>
        <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-neutral mb-2">Say Hello</p>
        <h1 className="font-display text-4xl md:text-5xl font-black text-neutral mb-4">We'd Love to Hear From You</h1>
        <p className="text-base-content/75 max-w-lg mx-auto">Questions about classes, the studio, or which level is right for you? Reach out — we're a small studio and we actually read our messages.</p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact methods */}
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-neutral mb-3">Reach Us</p>
            <h2 className="font-display text-3xl font-bold text-neutral mb-6">Get in Touch</h2>

            <a href="mailto:info@afewlittlestitches.com"
              className="flex items-start gap-4 p-5 rounded-2xl bg-base-200 hover:-translate-y-1 transition-transform duration-200 mb-4 no-underline group">
              <span className="text-3xl">✉️</span>
              <div>
                <p className="text-xs font-extrabold tracking-widest uppercase text-base-content/75 mb-1">Email</p>
                <p className="font-bold text-neutral group-hover:underline">info@afewlittlestitches.com</p>
                <p className="text-sm text-base-content/75 mt-1">We aim to respond within one business day.</p>
              </div>
            </a>

            <a href="https://instagram.com/afewlittlestitches" target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl bg-base-200 hover:-translate-y-1 transition-transform duration-200 mb-4 no-underline group">
              <span className="text-3xl">📸</span>
              <div>
                <p className="text-xs font-extrabold tracking-widest uppercase text-base-content/75 mb-1">Instagram</p>
                <p className="font-bold text-secondary group-hover:underline">@afewlittlestitches</p>
                <p className="text-sm text-base-content/75 mt-1">See what we're making and send us a DM.</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-base-200 mb-4">
              <span className="text-3xl">📍</span>
              <div>
                <p className="text-xs font-extrabold tracking-widest uppercase text-base-content/75 mb-1">Location</p>
                <p className="font-bold text-neutral">Frederick, Maryland</p>
                <p className="text-sm text-base-content/75 mt-1">Exact studio address shared upon enrollment.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-neutral mb-3">Frequently Asked</p>
            <h2 className="font-display text-3xl font-bold text-neutral mb-6">Quick Answers</h2>

            <div className="space-y-3">
              {faqs.map(faq => (
                <div key={faq.q} className="collapse collapse-arrow bg-base-200 rounded-xl">
                  <input type="checkbox" />
                  <div className="collapse-title font-bold text-sm text-neutral">{faq.q}</div>
                  <div className="collapse-content text-sm text-base-content/75 leading-relaxed">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <NavLink to="/classes" className="btn btn-primary rounded-full w-full mt-6">
              View All Classes & Sign Up
            </NavLink>
          </div>

        </div>
      </section>
    </>
  )
}
