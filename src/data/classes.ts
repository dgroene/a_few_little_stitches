export type Tier = 'Little Leaguer' | 'All-Star' | 'GOAT'
export type Craft = 'Knitting' | 'Bag Making' | 'Quilting'

export interface ClassInfo {
  craft: Craft
  tier: Tier
  description: string
  day: string
  time: string
  currentProject: string
  memberfulSlug: string
}

export interface Rotation {
  quarter: string
  months: string
  knittingLL: string
  knittingAS: string
  knittingGOAT: string
  bagsLL: string
  bagsAS: string
  bagsGOAT: string
  quiltingLL: string
  quiltingAS: string
  quiltingGOAT: string
}

export const CRAFT_META: Record<Craft, { icon: string; color: string; btnClass: string; headerClass: string }> = {
  'Knitting':   { icon: '🧶', color: '#FF6B6B', btnClass: 'btn-primary',   headerClass: 'bg-primary text-primary-content' },
  'Bag Making': { icon: '👜', color: '#00B4D8', btnClass: 'btn-info',      headerClass: 'bg-info text-info-content' },
  'Quilting':   { icon: '🪡', color: '#9B5DE5', btnClass: 'btn-secondary', headerClass: 'bg-secondary text-secondary-content' },
}

export const TIER_META: Record<Tier, { label: string; badgeClass: string; cardBorderClass: string }> = {
  'Little Leaguer': { label: '⚾ Little Leaguer', badgeClass: 'badge-warning',   cardBorderClass: 'border-t-4 border-t-yellow' },
  'All-Star':       { label: '⭐ All-Star',        badgeClass: 'badge-info',      cardBorderClass: 'border-t-4 border-t-cyan' },
  'GOAT':           { label: '🐐 GOAT',            badgeClass: 'badge-secondary', cardBorderClass: 'border-t-4 border-t-purple' },
}

export const CLASSES: ClassInfo[] = [
  /* ─── KNITTING ─────────────────────────────────────────── */
  {
    craft: 'Knitting', tier: 'Little Leaguer',
    description: 'Perfect for complete beginners. We cover the essentials — casting on, knit and purl stitches, binding off, and reading simple patterns. You\'ll leave each session having made real progress on a real project, surrounded by people cheering you on.',
    day: 'Mondays', time: '6:00 PM',
    currentProject: 'Sunshine Stripe Hat',
    memberfulSlug: 'knitting-little-leaguer',
  },
  {
    craft: 'Knitting', tier: 'All-Star',
    description: 'You know how to knit and purl — now let\'s level up. All-Star Knitting dives into increases, decreases, cables, and colorwork. Each quarter brings a satisfying project that challenges your skills and expands your knitting vocabulary.',
    day: 'Tuesdays', time: '6:00 PM',
    currentProject: 'Colorblock Weekend Beanie',
    memberfulSlug: 'knitting-all-star',
  },
  {
    craft: 'Knitting', tier: 'GOAT',
    description: 'For the experienced knitter ready to push into true mastery. GOAT Knitting tackles advanced techniques — lace, stranded colorwork, steeking, and construction methods that most knitters never try. Each project is ambitious, beautiful, and built to last.',
    day: 'Thursdays', time: '6:00 PM',
    currentProject: 'Heirloom Lace Shawl',
    memberfulSlug: 'knitting-goat',
  },
  /* ─── BAG MAKING ────────────────────────────────────────── */
  {
    craft: 'Bag Making', tier: 'Little Leaguer',
    description: 'No sewing experience needed. We introduce you to the machine, basic seams, cutting fabric accurately, and working with interfacing. You\'ll walk out with a finished, functional bag — and the confidence to make another one.',
    day: 'Tuesdays', time: '7:30 PM',
    currentProject: 'The Classic Zip Pouch',
    memberfulSlug: 'bag-making-little-leaguer',
  },
  {
    craft: 'Bag Making', tier: 'All-Star',
    description: 'You\'ve got the basics — now let\'s build something more complex. All-Star Bag Making explores zippers, lining, magnetic snaps, pockets, and structural elements that make a bag truly professional. Each project is one you\'ll carry with pride.',
    day: 'Wednesdays', time: '6:00 PM',
    currentProject: 'The Convertible Backpack',
    memberfulSlug: 'bag-making-all-star',
  },
  {
    craft: 'Bag Making', tier: 'GOAT',
    description: 'Advanced construction, thoughtful design, and refined finishing. GOAT Bag Making is for the sewist who wants to understand the engineering behind a great bag — hardware, leather accents, complex closures, and couture-level details.',
    day: 'Fridays', time: '6:00 PM',
    currentProject: 'The Leather-Trimmed Tote',
    memberfulSlug: 'bag-making-goat',
  },
  /* ─── QUILTING ───────────────────────────────────────────── */
  {
    craft: 'Quilting', tier: 'Little Leaguer',
    description: 'Quilting is the art of turning fabric into something lasting and beautiful. Little Leaguer teaches you to cut accurately, sew consistent quarter-inch seams, press your work, and assemble classic blocks. A perfect introduction to a lifelong craft.',
    day: 'Mondays', time: '7:30 PM',
    currentProject: 'Nine-Patch Sampler Quilt',
    memberfulSlug: 'quilting-little-leaguer',
  },
  {
    craft: 'Quilting', tier: 'All-Star',
    description: 'Move beyond basic blocks into design, color theory, and more complex piecing. All-Star Quilting covers flying geese, half-square triangles, curved seams, and layout design. Each quarter\'s project stretches your skills while staying totally achievable.',
    day: 'Wednesdays', time: '7:30 PM',
    currentProject: 'Log Cabin Table Runner',
    memberfulSlug: 'quilting-all-star',
  },
  {
    craft: 'Quilting', tier: 'GOAT',
    description: 'For the quilter who wants to work with precision, complexity, and artistry. GOAT Quilting explores paper piecing, complex curves, medallion construction, and hand-quilting techniques. Each project is an heirloom in the making.',
    day: 'Thursdays', time: '7:30 PM',
    currentProject: 'English Paper Piecing Medallion',
    memberfulSlug: 'quilting-goat',
  },
]

export const ROTATIONS: Rotation[] = [
  {
    quarter: 'Q1 · Current', months: 'Jul – Sep 2026',
    knittingLL: 'Sunshine Stripe Hat', knittingAS: 'Colorblock Weekend Beanie', knittingGOAT: 'Heirloom Lace Shawl',
    bagsLL: 'Classic Zip Pouch', bagsAS: 'Convertible Backpack', bagsGOAT: 'Leather-Trimmed Tote',
    quiltingLL: 'Nine-Patch Sampler', quiltingAS: 'Log Cabin Table Runner', quiltingGOAT: 'EPP Medallion',
  },
  {
    quarter: 'Q2', months: 'Oct – Dec 2026',
    knittingLL: 'Cozy Ribbed Cowl', knittingAS: 'Cabled Mittens', knittingGOAT: 'Fair Isle Yoke Sweater',
    bagsLL: 'Patchwork Tote', bagsAS: 'Quilted Crossbody', bagsGOAT: 'Structured Box Bag',
    quiltingLL: 'Holiday Table Runner', quiltingAS: 'Star Block Lap Quilt', quiltingGOAT: 'Double Wedding Ring',
  },
  {
    quarter: 'Q3', months: 'Jan – Mar 2027',
    knittingLL: 'Chunky Pillow Cover', knittingAS: 'Seed Stitch Weekend Bag', knittingGOAT: 'Colorwork Socks',
    bagsLL: 'Drawstring Project Bag', bagsAS: 'Boxy Shoulder Bag', bagsGOAT: 'Waxed Canvas Weekender',
    quiltingLL: 'Pinwheel Baby Quilt', quiltingAS: 'Scrappy Rail Fence', quiltingGOAT: 'Cathedral Windows',
  },
  {
    quarter: 'Q4', months: 'Apr – Jun 2027',
    knittingLL: 'Spring Garden Dishcloth', knittingAS: 'Eyelet Shawlette', knittingGOAT: 'Colorwork Vest',
    bagsLL: 'Linen Market Bag', bagsAS: 'Bucket Bag', bagsGOAT: 'The French Tote',
    quiltingLL: 'Rainbow Strip Quilt', quiltingAS: 'Flying Geese Wall Hanging', quiltingGOAT: 'Baltimore Album',
  },
]

export const MEMBERFUL_BASE = 'https://afewlittlestitches.memberful.com/checkout?plan='
