import { NavLink } from 'react-router-dom'
import RainbowStripe from './RainbowStripe'

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <img src={`${import.meta.env.BASE_URL}logo-dark.svg`} alt="A Few Little Stitches" className="h-24 w-auto mb-4" />
            <p className="text-sm text-neutral-content/60 leading-relaxed max-w-xs">
              Building a community of makers in Frederick, Maryland — one stitch at a time.
            </p>
          </div>

          {/* Classes */}
          <div>
            <h6 className="footer-title text-xs tracking-widest mb-4">Classes</h6>
            <NavLink to="/classes#knitting" className="link link-hover block mb-2 text-sm text-neutral-content/60 hover:text-primary">Knitting</NavLink>
            <NavLink to="/classes#bags"     className="link link-hover block mb-2 text-sm text-neutral-content/60 hover:text-primary">Bag Making</NavLink>
            <NavLink to="/classes#quilting" className="link link-hover block mb-2 text-sm text-neutral-content/60 hover:text-primary">Quilting</NavLink>
          </div>

          {/* Studio */}
          <div>
            <h6 className="footer-title text-xs tracking-widest mb-4">Studio</h6>
            <NavLink to="/about"    className="link link-hover block mb-2 text-sm text-neutral-content/60 hover:text-primary">About</NavLink>
            <NavLink to="/calendar" className="link link-hover block mb-2 text-sm text-neutral-content/60 hover:text-primary">Calendar</NavLink>
            <NavLink to="/contact"  className="link link-hover block mb-2 text-sm text-neutral-content/60 hover:text-primary">Contact</NavLink>
          </div>

          {/* Connect */}
          <div>
            <h6 className="footer-title text-xs tracking-widest mb-4">Connect</h6>
            <a href="https://instagram.com/afewlittlestitches" target="_blank" rel="noopener noreferrer"
               className="link link-hover block mb-2 text-sm text-neutral-content/60 hover:text-primary">Instagram</a>
            <a href="mailto:info@afewlittlestitches.com"
               className="link link-hover block mb-2 text-sm text-neutral-content/60 hover:text-primary">Email Us</a>
          </div>
        </div>

        <div className="border-t border-neutral-content/10 pt-4 flex flex-wrap justify-between items-center gap-2 text-xs text-neutral-content/60">
          <span>© 2026 A Few Little Stitches · Frederick, MD</span>
          <span>Handcrafted with love.</span>
        </div>
      </div>
      <RainbowStripe />
    </footer>
  )
}
