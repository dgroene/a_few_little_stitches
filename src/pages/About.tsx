import { NavLink } from 'react-router-dom'

const pillars = [
  { icon: '🤝', title: 'Real Community', color: 'border-l-primary bg-primary/5',
    text: 'We\'re not a marketplace or a platform. We\'re a room full of people making things together. Community here means eye contact, shared jokes, and knowing someone\'s name.' },
  { icon: '✨', title: 'Embracing Imperfection', color: 'border-l-info bg-info/5',
    text: 'Every handmade object carries the mark of its maker. We celebrate the humanity in a hand-sewn seam or a hand-knitted row. It\'s supposed to look like you made it.' },
  { icon: '📵', title: 'Device-Free Headspace', color: 'border-l-secondary bg-secondary/5',
    text: 'Class time is a break from the scroll. When you\'re counting stitches or pressing seams, there\'s no room for notifications. You\'ll be surprised how good it feels.' },
  { icon: '🌱', title: 'Growth at Every Level', color: 'border-l-accent bg-accent/10',
    text: 'From your very first cast-on to heirloom-level construction, there\'s a class that meets you where you are. And when you\'re ready to level up, the next tier is waiting.' },
]

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="py-20 px-4 text-center relative">
        <div className="absolute bottom-0 left-0 right-0 h-1.5"
          style={{ background: 'linear-gradient(90deg,#FF6B6B,#FFC300,#00B4D8,#9B5DE5)' }} />
        <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-neutral mb-3">Our Story</p>
        <h1 className="font-display text-4xl md:text-6xl font-black text-neutral mb-5 max-w-3xl mx-auto leading-tight">
          Built on the Belief That{' '}
          <em className="text-primary not-italic">Making Things</em>{' '}
          Makes People Better
        </h1>
        <p className="text-base-content/75 text-lg max-w-xl mx-auto">
          A Few Little Stitches is a crafting studio in Frederick, Maryland — a place where people put down their phones, pick up their needles, and remember what it feels like to create something with their hands.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* Story */}
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-neutral mb-3">Who We Are</p>
            <h2 className="font-display text-3xl font-bold text-neutral mb-6">A Studio for the Imperfectly Human</h2>
            <div className="space-y-4 text-base-content/70 leading-relaxed">
              <p>A Few Little Stitches started with a simple observation: in a world increasingly built around screens, algorithms, and automation, people are hungry for something real. Real conversation. Real texture. Real imperfection. Real community.</p>
              <p>We believe that the crooked seam, the dropped stitch, the slightly-off seam allowance — these aren't mistakes to be hidden. They're the fingerprints of a human being who made something. And that is worth celebrating.</p>
              <p>Our studio in Frederick, Maryland brings together knitters, sewists, and quilters of every skill level for weekly classes built around projects that rotate every three months. You'll leave each session having learned something, made something, and — more often than not — laughed with someone new.</p>
              <p>We keep our classes small (10 students max), our instruction personal, and our supply of good company well-stocked. All materials are included. The only thing you need to bring is yourself.</p>
            </div>
            <NavLink to="/classes" className="btn btn-primary rounded-full mt-8">Find Your Class</NavLink>
          </div>

          {/* Sidebar cards */}
          <div className="space-y-5">
            {/* Owner card */}
            <div className="card bg-base-100 shadow-xl border-t-4 border-t-primary">
              <div className="card-body items-center text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-2"
                  style={{ background: 'linear-gradient(135deg, #FF6B6B, #9B5DE5)' }}>
                  ✂️
                </div>
                <h3 className="font-display text-xl font-bold">Jordan Love</h3>
                <p className="text-xs font-extrabold tracking-widest uppercase text-neutral mb-2">Founder &amp; Studio Lead</p>
                <p className="text-sm text-base-content/75 leading-relaxed">
                  Jordan founded A Few Little Stitches out of a lifelong love of handcraft and a deep conviction that the best communities are built around shared making. When not teaching, Jordan can be found buried in fabric, hunting for vintage notions, or making entirely too many tote bags.
                </p>
              </div>
            </div>

            {/* Location card */}
            <div className="card bg-base-200 shadow">
              <div className="card-body">
                <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-primary mb-1">The Studio</p>
                <h4 className="font-display text-xl font-bold text-neutral mb-2">Frederick, Maryland</h4>
                <p className="text-sm text-base-content/75">
                  We're based in the heart of Frederick — a city with a long history of craft, community, and independent spirit. Studio address details are shared upon enrollment.
                </p>
                <div className="card-actions mt-4 flex-wrap gap-2">
                  <NavLink to="/contact" className="btn btn-outline btn-primary btn-sm rounded-full text-neutral">Get in Touch</NavLink>
                  <a href="https://instagram.com/afewlittlestitches" target="_blank" rel="noopener noreferrer"
                    className="btn btn-neutral btn-sm rounded-full">Follow on Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PILLARS */}
      <section className="py-16 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-neutral mb-2">What We Stand For</p>
            <h2 className="font-display text-4xl font-bold text-neutral">The Principles Behind the Studio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pillars.map(p => (
              <div key={p.title} className={`card bg-base-100 border-l-4 ${p.color} shadow`}>
                <div className="card-body">
                  <h4 className="font-display text-lg font-bold text-neutral mb-2">{p.icon} {p.title}</h4>
                  <p className="text-sm text-base-content/75 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-neutral text-neutral-content py-24 px-4 text-center">
        <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-accent mb-6">Our Mission</p>
        <blockquote className="font-display text-xl md:text-3xl italic max-w-3xl mx-auto leading-relaxed text-white/90">
          "A Few Little Stitches is about{' '}
          <strong className="text-accent not-italic">crafting community</strong>
          {' '}— building a gathering of like-minded people who can congregate in real life and enjoy human interaction in a device-driven world."
        </blockquote>
        <p className="mt-8 text-primary font-bold text-sm tracking-widest uppercase">— Jordan Love, Founder</p>
        <NavLink to="/classes" className="btn btn-outline text-white border-white/40 hover:bg-white/10 mt-10 rounded-full">
          Join the Community
        </NavLink>
      </section>
    </>
  )
}
