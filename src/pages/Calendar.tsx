import { useState, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { SCHEDULE, buildHolidayMap } from '../data/schedule'

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

const DOW_LABELS: Record<number,string> = { 1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday' }

export default function Calendar() {
  const now = new Date()
  const [year, setYear]   = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth())

  const holidays = useMemo(() => {
    const map1 = buildHolidayMap(year)
    const map2 = buildHolidayMap(year + 1)
    return new Map([...map1, ...map2])
  }, [year])

  function getHolidays(d: number) {
    return holidays.get(`${year}-${month}-${d}`) ?? null
  }

  function prev() {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }
  function next() {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  const firstDow    = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const todayY = now.getFullYear(), todayM = now.getMonth(), todayD = now.getDate()

  // Group schedule by day of week
  const byDow = SCHEDULE.reduce<Record<number, typeof SCHEDULE>>((acc, s) => {
    acc[s.dow] = [...(acc[s.dow] ?? []), s]
    return acc
  }, {})

  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-base-200 py-16 px-4 text-center border-b-4 border-b-transparent"
        style={{ borderImage: 'linear-gradient(90deg,#FF6B6B,#FFC300,#00B4D8,#9B5DE5) 1' }}>
        <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-neutral mb-2">Schedule</p>
        <h1 className="font-display text-4xl md:text-5xl font-black text-neutral mb-4">Class Calendar</h1>
        <p className="text-base-content/75 max-w-xl mx-auto">
          Classes meet weekly on weekday evenings. We close for all US federal holidays, plus Pi Day, Earth Day, and Juneteenth.
          Days marked in red are studio closures.
        </p>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">

          {/* ── CALENDAR ── */}
          <div>
            {/* Month navigation */}
            <div className="flex items-center justify-between mb-5">
              <button onClick={prev} className="btn btn-ghost btn-circle btn-sm" aria-label="Previous month">←</button>
              <h2 className="font-display text-2xl font-bold text-neutral">{MONTHS[month]} {year}</h2>
              <button onClick={next} className="btn btn-ghost btn-circle btn-sm" aria-label="Next month">→</button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              {DAYS.map(d => (
                <div key={d} className="text-center text-xs font-extrabold uppercase tracking-wider text-base-content/75 py-1">{d}</div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Leading empty cells */}
              {Array.from({ length: firstDow }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}

              {/* Day cells */}
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(d => {
                const date    = new Date(year, month, d)
                const dow     = date.getDay()
                const hNames  = getHolidays(d)
                const weekend = dow === 0 || dow === 6
                const isToday = d === todayD && month === todayM && year === todayY
                const classes = !weekend && !hNames ? (byDow[dow] ?? []) : []

                return (
                  <div
                    key={d}
                    className={[
                      'min-h-[80px] rounded-lg border p-1.5 text-xs overflow-hidden transition-colors',
                      hNames  ? 'bg-red-50 border-red-200'    : '',
                      weekend && !hNames ? 'bg-base-200 border-base-300' : '',
                      !hNames && !weekend ? 'bg-base-100 border-base-300' : '',
                      isToday ? 'ring-2 ring-primary ring-offset-1' : '',
                    ].join(' ')}
                  >
                    <span className={`font-bold block mb-0.5 ${hNames ? 'text-red-500' : 'text-base-content'}`}>{d}</span>
                    {hNames?.map(n => (
                      <span key={n} className="block text-[9px] text-red-500 font-bold leading-tight truncate">{n}</span>
                    ))}
                    {classes.map(c => (
                      <span
                        key={`${c.craft}-${c.tier}`}
                        className="block text-[9px] text-white font-bold leading-tight rounded px-0.5 mt-0.5 truncate"
                        style={{ background: c.color, color: '#ffffff' }}
                      >
                        {c.craft} · {c.tier}
                      </span>
                    ))}
                  </div>
                )
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t border-base-300">
              {[
                { color: '#C44444', label: 'Knitting' },
                { color: '#007A96', label: 'Bag Making' },
                { color: '#6B3AB5', label: 'Quilting' },
              ].map(l => (
                <div key={l.label} className="flex items-center gap-2 text-xs font-bold">
                  <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: l.color }} />
                  {l.label}
                </div>
              ))}
              <div className="flex items-center gap-2 text-xs font-bold">
                <div className="w-3 h-3 rounded-sm bg-red-100 border border-red-200 flex-shrink-0" />
                Studio Closed
              </div>
              <div className="flex items-center gap-2 text-xs font-bold">
                <div className="w-3 h-3 rounded-sm bg-base-200 border border-base-300 flex-shrink-0" />
                Weekend
              </div>
            </div>
          </div>

          {/* ── SCHEDULE SIDEBAR ── */}
          <aside className="card bg-base-200 shadow">
            <div className="card-body">
              <h3 className="font-display text-xl font-bold text-neutral mb-1">Weekly Schedule</h3>
              <p className="text-xs text-base-content/75 mb-4 leading-relaxed">
                Times are placeholders — final schedule to be confirmed. All classes are 1.5 hours.
              </p>

              {[1, 2, 3, 4, 5].map(dow => (
                <div key={dow} className="mb-4">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-base-content/75 mb-2">{DOW_LABELS[dow]}</p>
                  {(byDow[dow] ?? []).map(s => (
                    <div key={`${s.craft}-${s.tier}`}
                      className="flex items-start gap-2 bg-base-100 rounded-lg p-2 mb-1.5 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full mt-0.5 flex-shrink-0" style={{ background: s.color }} />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-xs text-neutral leading-tight">{s.craft}</p>
                        <p className="text-xs text-base-content/75">{s.tier}</p>
                      </div>
                      <span className="text-xs text-base-content/75 flex-shrink-0">{s.time}</span>
                    </div>
                  ))}
                </div>
              ))}

              <div className="border-t border-base-300 pt-3 mt-2">
                <p className="text-xs text-base-content/75 leading-relaxed">
                  <strong className="text-neutral">Studio closures:</strong> all US federal holidays + Pi Day (Mar 14) · Earth Day (Apr 22) · Juneteenth (Jun 19)
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral text-neutral-content py-16 px-4 text-center">
        <h2 className="font-display text-3xl font-bold mb-3">Ready to Join a Class?</h2>
        <p className="text-neutral-content/80 max-w-md mx-auto mb-6">Pick the craft and level that fits you, and we'll see you at the worktable.</p>
        <NavLink to="/classes" className="btn btn-primary rounded-full btn-lg">View All Classes</NavLink>
      </section>
    </>
  )
}
