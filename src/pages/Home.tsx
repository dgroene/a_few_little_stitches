import { NavLink } from 'react-router-dom'

const crafts = [
  {
    icon: '🧶', name: 'Knitting', tagline: 'From cast-on to complex colorwork',
    headerClass: 'bg-primary text-primary-content',
    btnClass: 'btn-primary',
    to: '/classes#knitting',
    desc: 'Learn to knit (or level up) in a warm, supportive studio. Each quarter brings a new project — hats, shawls, sweaters, and more. All needles and yarn included.',
  },
  {
    icon: '👜', name: 'Bag Making', tagline: 'Totes, crossbodies, weekenders & more',
    headerClass: 'bg-info text-info-content',
    btnClass: 'btn-info',
    to: '/classes#bags',
    desc: 'Build bags you\'ll actually carry. From cut-and-sew basics to structured, leather-trimmed construction. Fabric and all hardware included.',
  },
  {
    icon: '🪡', name: 'Quilting', tagline: 'Blocks, borders, and heirloom beauty',
    headerClass: 'bg-secondary text-secondary-content',
    btnClass: 'btn-secondary',
    to: '/classes#quilting',
    desc: 'Turn fabric into something that lasts a lifetime. From nine-patch samplers to medallion masterpieces, every quarter\'s project is designed to teach and to delight. All fabric included.',
  },
]

const values = [
  { icon: '🧶', title: 'Real Community', text: 'No screens, no algorithms. Just people sitting together, making things, and talking like humans have always done.', color: '#FF6B6B' },
  { icon: '✂️', title: 'Handcrafted Always', text: 'We celebrate imperfection. The crooked seam, the missed stitch — these are the marks of something a person actually made.', color: '#00B4D8' },
  { icon: '🌱', title: 'All Skill Levels', text: 'From your very first stitch to heirloom-level work, there\'s a class that meets you exactly where you are.', color: '#9B5DE5' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="text-center py-20 px-4 relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 60% 0%, rgba(255,107,107,.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 100%, rgba(0,180,216,.07) 0%, transparent 50%), #F8F7F5' }}>
        <p className="text-xs font-extrabold tracking-[0.22em] uppercase text-neutral mb-4">Frederick, Maryland</p>
        <h1 className="font-display text-5xl md:text-[4.5rem] font-black text-neutral mb-5 leading-[1.1]">
          Where Crafters Become <em className="text-primary not-italic">Community</em>
        </h1>
        <p className="text-base-content/75 text-xl max-w-lg mx-auto mb-10 leading-relaxed">
          Put down the screen. Pick up the needles. Join a room full of people who make things with their hands — and make friends while they're at it.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <NavLink to="/classes" className="btn btn-primary btn-lg rounded-full shadow-lg px-10">Explore Classes</NavLink>
          <NavLink to="/about"   className="btn btn-outline btn-lg rounded-full border-2 border-primary text-neutral hover:bg-primary hover:text-primary-content px-10">Our Story</NavLink>
        </div>
      </section>

      {/* ── VALUE PANELS ─────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {values.map(v => (
          <div key={v.title} className="bg-base-100 px-12 py-16 text-center border-t-4"
            style={{ borderTopColor: v.color }}>
            <div className="text-5xl mb-5">{v.icon}</div>
            <h3 className="font-display text-2xl font-bold text-neutral mb-4 tracking-tight">{v.title}</h3>
            <p className="text-base-content/75 leading-relaxed max-w-xs mx-auto">{v.text}</p>
          </div>
        ))}
      </div>

      {/* ── CRAFTS OVERVIEW ──────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-neutral mb-2">What We Offer</p>
            <h2 className="font-display text-4xl font-bold text-neutral mb-3">Three Crafts. Nine Classes. Endless Projects.</h2>
            <p className="text-base-content/75 max-w-lg mx-auto">Every class meets once a week, in person, with all supplies included. Choose the craft and level that fits you best.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {crafts.map(c => (
              <div key={c.name} className="card bg-base-100 shadow-xl hover:-translate-y-1 transition-transform duration-200 overflow-hidden">
                <div className={`${c.headerClass} p-8`}>
                  <div className="text-4xl mb-3">{c.icon}</div>
                  <h3 className="font-display text-2xl font-bold">{c.name}</h3>
                  <p className="text-sm mt-1">{c.tagline}</p>
                </div>
                <div className="card-body">
                  <p className="text-base-content/75 mb-4">{c.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge badge-warning badge-outline font-bold text-xs">⚾ Little Leaguer</span>
                    <span className="badge badge-info badge-outline font-bold text-xs">⭐ All-Star</span>
                    <span className="badge badge-secondary badge-outline font-bold text-xs">🐐 GOAT</span>
                  </div>
                  <div className="card-actions">
                    <NavLink to={c.to} className={`btn ${c.btnClass} btn-sm rounded-full w-full`}>
                      See {c.name} Classes
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────── */}
      <section className="py-20 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-neutral mb-2">Simple Pricing</p>
          <h2 className="font-display text-4xl font-bold text-neutral mb-3">One Subscription. Four Classes a Month.</h2>
          <p className="text-base-content/75 max-w-md mx-auto mb-12">No commitments, no complicated tiers. Just a flat monthly rate that gets you in the door.</p>

          <div className="card bg-base-100 shadow-2xl max-w-md mx-auto border-t-8 border-t-accent">
            <div className="card-body items-center text-center pt-10">
              <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-neutral mb-1">Monthly Subscription</p>
              <div className="font-display text-7xl font-black text-neutral leading-none my-2">
                <sup className="text-3xl align-top mt-3 inline-block">$</sup>175
              </div>
              <p className="text-base-content/75 mb-6">per month · cancel anytime</p>

              <ul className="w-full text-left space-y-3 mb-8">
                {[
                  '4 class sessions per month',
                  'All supplies and materials included',
                  'Rotating quarterly projects',
                  'Max 10 students — intimate & personal',
                  'In-person studio, Frederick MD',
                  'A community of makers to grow with',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 border-b border-base-200 pb-3">
                    <span className="text-info font-black mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <NavLink to="/classes" className="btn btn-primary w-full rounded-full btn-lg">Choose Your Class</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────── */}
      <section className="bg-neutral text-neutral-content py-24 px-4 text-center">
        <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-accent mb-6">Our Mission</p>
        <blockquote className="font-display text-xl md:text-3xl italic max-w-3xl mx-auto leading-relaxed text-white/90">
          "In a world where things are done by machines, A Few Little Stitches embraces the{' '}
          <strong className="text-accent not-italic">imperfections of hand-crafted items</strong>{' '}
          that humans make themselves — and the{' '}
          <strong className="text-accent not-italic">real community</strong>{' '}
          that grows when people sit together and create."
        </blockquote>
        <p className="mt-8 text-primary font-bold text-sm tracking-widest uppercase">— Jordan Love, Founder</p>
      </section>
    </>
  )
}
