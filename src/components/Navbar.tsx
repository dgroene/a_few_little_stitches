import { NavLink } from 'react-router-dom'
import RainbowStripe from './RainbowStripe'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/classes',  label: 'Classes' },
  { to: '/calendar', label: 'Calendar' },
  { to: '/about',    label: 'About' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <RainbowStripe />
      <div className="navbar max-w-6xl mx-auto px-4">

        {/* Mobile hamburger + logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 font-bold">
              {links.map(l => (
                <li key={l.to}>
                  <NavLink to={l.to} className={({ isActive }) => isActive ? 'text-neutral font-black underline decoration-primary decoration-2 underline-offset-2' : ''}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2">
                <NavLink to="/classes" className="btn btn-primary btn-sm rounded-full">Sign Up</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="flex items-center ml-1">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="A Few Little Stitches" className="h-24 w-auto" />
          </NavLink>
        </div>

        {/* Desktop links */}
        <div className="navbar-end hidden lg:flex gap-1">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `btn btn-ghost btn-sm font-bold rounded-full ${isActive ? 'text-neutral underline decoration-primary decoration-2 underline-offset-2' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/classes" className="btn btn-primary btn-sm rounded-full ml-2">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  )
}
