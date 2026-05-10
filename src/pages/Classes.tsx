import { CLASSES, CRAFT_META, TIER_META, ROTATIONS, MEMBERFUL_BASE, type Craft } from '../data/classes'

const CRAFTS: Craft[] = ['Knitting', 'Bag Making', 'Quilting']
const CRAFT_IDS: Record<Craft, string> = {
  'Knitting': 'knitting',
  'Bag Making': 'bags',
  'Quilting': 'quilting',
}

export default function Classes() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-base-200 py-16 px-4 text-center border-b-4 border-b-transparent"
        style={{ borderImage: 'linear-gradient(90deg,#FF6B6B,#FFC300,#00B4D8,#9B5DE5) 1' }}>
        <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-neutral mb-2">Our Classes</p>
        <h1 className="font-display text-4xl md:text-5xl font-black text-neutral mb-4">Three Crafts. Three Levels. Nine Ways In.</h1>
        <p className="text-base-content/75 max-w-lg mx-auto">Every class meets once a week on a weekday evening in our Frederick studio. All supplies included. $175/month — four sessions — cancel anytime.</p>
      </section>

      {/* TIER LEGEND */}
      <div className="bg-base-100 border-b border-base-300 py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 items-center justify-center">
          <span className="text-xs font-extrabold tracking-widest uppercase text-base-content/75">Skill Levels:</span>
          <span className="badge badge-warning badge-lg font-bold">⚾ Little Leaguer — Beginner</span>
          <span className="badge badge-info badge-lg font-bold">⭐ All-Star — Intermediate</span>
          <span className="badge badge-secondary badge-lg font-bold">🐐 GOAT — Advanced</span>
        </div>
      </div>

      {/* CRAFT SECTIONS */}
      {CRAFTS.map((craft, ci) => {
        const meta = CRAFT_META[craft]
        const classes = CLASSES.filter(c => c.craft === craft)
        const isAlt = ci % 2 === 1

        return (
          <section
            key={craft}
            id={CRAFT_IDS[craft]}
            className={`py-16 px-4 scroll-mt-20 ${isAlt ? 'bg-base-200' : 'bg-base-100'}`}
          >
            <div className="max-w-6xl mx-auto">
              {/* Craft header */}
              <div className="flex items-start gap-4 mb-10">
                <div className="w-1.5 rounded-full self-stretch min-h-16 flex-shrink-0" style={{ background: meta.color }} />
                <div>
                  <div className="text-3xl mb-1">{meta.icon}</div>
                  <h2 className="font-display text-4xl font-bold text-neutral">{craft}</h2>
                  <p className="text-base-content/75 mt-1">
                    {craft === 'Knitting'   && 'From your first cast-on to complex stranded colorwork — there\'s a level for every knitter.'}
                    {craft === 'Bag Making' && 'Build bags you\'ll actually carry — from your first zip pouch to a structured leather-trimmed tote.'}
                    {craft === 'Quilting'   && 'From nine-patch samplers to heirloom medallions — quilting you\'ll want to display and pass down.'}
                  </p>
                </div>
              </div>

              {/* Tier cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {classes.map(cls => {
                  const tierMeta = TIER_META[cls.tier]
                  return (
                    <div
                      key={cls.tier}
                      className="card bg-base-100 shadow-lg hover:-translate-y-1 transition-transform duration-200 flex flex-col"
                      style={{
                        borderTop: `4px solid ${
                          cls.tier === 'Little Leaguer' ? '#FFC300' :
                          cls.tier === 'All-Star' ? '#00B4D8' : '#9B5DE5'
                        }`
                      }}
                    >
                      <div className="card-body flex flex-col gap-0">
                        <span className={`badge ${tierMeta.badgeClass} font-bold mb-3 self-start`}>{tierMeta.label}</span>
                        <h3 className="font-display text-xl font-bold text-neutral mb-2">{craft} — {cls.tier}</h3>
                        <p className="text-base-content/75 leading-relaxed mb-4 flex-1">{cls.description}</p>

                        {/* Meta */}
                        <div className="space-y-1 text-sm text-base-content/75 mb-4">
                          <div className="flex items-center gap-2"><span>📅</span>{cls.day}, {cls.time} <em className="text-xs">(placeholder)</em></div>
                          <div className="flex items-center gap-2"><span>⏱️</span>1.5 hours per session</div>
                          <div className="flex items-center gap-2"><span>👥</span>Max 10 students</div>
                        </div>

                        {/* Current project */}
                        <div className="bg-base-200 rounded-xl p-4 mb-4">
                          <p className="text-xs font-extrabold tracking-widest uppercase text-base-content/75 mb-1">Current Project — Q1 2026</p>
                          <p className="font-display font-bold text-neutral">{cls.currentProject}</p>
                          <p className="text-xs text-base-content/75 mt-0.5">July – September 2026</p>
                        </div>

                        <a
                          href={`${MEMBERFUL_BASE}${cls.memberfulSlug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn ${meta.btnClass} rounded-full w-full`}
                        >
                          Sign Up — $175/mo
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )
      })}

      {/* ROTATION TABLE */}
      <section className="py-16 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-neutral mb-2">Coming Up</p>
            <h2 className="font-display text-4xl font-bold text-neutral mb-2">Project Rotation Schedule</h2>
            <p className="text-base-content/75 max-w-lg mx-auto">Projects rotate every three months. Here's what's planned across all three crafts.</p>
          </div>

          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="table table-zebra w-full bg-base-100">
              <thead>
                <tr className="bg-neutral text-neutral-content text-sm">
                  <th className="font-display font-bold">Quarter</th>
                  <th className="text-primary">🧶 Knitting</th>
                  <th className="text-info">👜 Bag Making</th>
                  <th style={{ color: '#B8A0FF' }}>🪡 Quilting</th>
                </tr>
              </thead>
              <tbody>
                {ROTATIONS.map(r => (
                  <tr key={r.quarter}>
                    <td className="font-bold">
                      {r.quarter.includes('Current') && (
                        <span className="badge badge-primary badge-xs mr-2">Now</span>
                      )}
                      <span className="block text-xs text-base-content/50">{r.months}</span>
                      {r.quarter.replace(' · Current', '')}
                    </td>
                    <td className="text-sm">
                      <strong>{r.knittingLL}</strong>
                      <span className="block text-xs text-base-content/40">{r.knittingAS} · {r.knittingGOAT}</span>
                    </td>
                    <td className="text-sm">
                      <strong>{r.bagsLL}</strong>
                      <span className="block text-xs text-base-content/40">{r.bagsAS} · {r.bagsGOAT}</span>
                    </td>
                    <td className="text-sm">
                      <strong>{r.quiltingLL}</strong>
                      <span className="block text-xs text-base-content/40">{r.quiltingAS} · {r.quiltingGOAT}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
