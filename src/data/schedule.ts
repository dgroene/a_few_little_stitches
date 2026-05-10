export interface ScheduleEntry {
  dow: number  // 1=Mon … 5=Fri
  time: string
  craft: string
  tier: string
  color: string
}

export interface HolidayFixed {
  month: number  // 0-indexed
  day: number
  name: string
}

export interface HolidayVariable {
  month: number  // 0-indexed
  nth: number    // 1-4, or -1 for last
  dow: number    // 0=Sun … 6=Sat
  name: string
}

export const SCHEDULE: ScheduleEntry[] = [
  { dow: 1, time: '6:00 PM',  craft: 'Knitting',   tier: 'Little Leaguer', color: '#C44444' },
  { dow: 1, time: '7:30 PM',  craft: 'Quilting',   tier: 'Little Leaguer', color: '#6B3AB5' },
  { dow: 2, time: '6:00 PM',  craft: 'Knitting',   tier: 'All-Star',       color: '#C44444' },
  { dow: 2, time: '7:30 PM',  craft: 'Bag Making', tier: 'Little Leaguer', color: '#007A96' },
  { dow: 3, time: '6:00 PM',  craft: 'Bag Making', tier: 'All-Star',       color: '#007A96' },
  { dow: 3, time: '7:30 PM',  craft: 'Quilting',   tier: 'All-Star',       color: '#6B3AB5' },
  { dow: 4, time: '6:00 PM',  craft: 'Knitting',   tier: 'GOAT',           color: '#C44444' },
  { dow: 4, time: '7:30 PM',  craft: 'Quilting',   tier: 'GOAT',           color: '#6B3AB5' },
  { dow: 5, time: '6:00 PM',  craft: 'Bag Making', tier: 'GOAT',           color: '#007A96' },
]

export const FIXED_HOLIDAYS: HolidayFixed[] = [
  { month: 0,  day: 1,  name: "New Year's Day" },
  { month: 2,  day: 14, name: 'Pi Day 🥧' },
  { month: 3,  day: 22, name: 'Earth Day 🌍' },
  { month: 5,  day: 19, name: 'Juneteenth' },
  { month: 6,  day: 4,  name: 'Independence Day' },
  { month: 10, day: 11, name: 'Veterans Day' },
  { month: 11, day: 25, name: 'Christmas Day' },
]

export const VARIABLE_HOLIDAYS: HolidayVariable[] = [
  { month: 0,  nth: 3,  dow: 1, name: 'MLK Jr. Day' },
  { month: 1,  nth: 3,  dow: 1, name: "Presidents' Day" },
  { month: 4,  nth: -1, dow: 1, name: 'Memorial Day' },
  { month: 8,  nth: 1,  dow: 1, name: 'Labor Day' },
  { month: 9,  nth: 2,  dow: 1, name: 'Columbus Day' },
  { month: 10, nth: 4,  dow: 4, name: 'Thanksgiving' },
]

export function getNthDow(year: number, month: number, nth: number, dow: number): Date {
  if (nth === -1) {
    const last = new Date(year, month + 1, 0)
    const diff = (last.getDay() - dow + 7) % 7
    return new Date(year, month, last.getDate() - diff)
  }
  const first = new Date(year, month, 1)
  const diff = (dow - first.getDay() + 7) % 7
  return new Date(year, month, 1 + diff + (nth - 1) * 7)
}

export function buildHolidayMap(year: number): Map<string, string[]> {
  const map = new Map<string, string[]>()

  function add(date: Date, name: string) {
    const k = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    const existing = map.get(k) ?? []
    map.set(k, [...existing, name])
  }

  for (const h of FIXED_HOLIDAYS) {
    add(new Date(year, h.month, h.day), h.name)
  }
  for (const h of VARIABLE_HOLIDAYS) {
    add(getNthDow(year, h.month, h.nth, h.dow), h.name)
  }

  return map
}
