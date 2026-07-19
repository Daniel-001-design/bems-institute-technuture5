import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LogIn, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'About Us', to: '/#about' },
  { label: 'Contact Us', to: '/#contact' }
]

export default function Header() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 relative z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src="/logo.svg" alt="BEMS Institute" className="h-12 w-12" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => {
            const active = link.to === '/' ? location.pathname === '/' : location.pathname.startsWith(link.to.split('#')[0]) && link.to !== '/'
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`text-[15px] font-medium transition-colors ${
                  active ? 'text-purple' : 'text-gray-700 hover:text-navy'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/login"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 text-gray-800 font-medium text-[15px] hover:border-navy transition-colors"
          >
            <LogIn size={17} strokeWidth={2} />
            Login
          </Link>
          <Link
            to="/register"
            className="px-5 py-2.5 rounded-lg bg-purple text-white font-medium text-[15px] hover:bg-purple-dark transition-colors"
          >
            Register Now
          </Link>
        </div>

        <button className="lg:hidden text-navy" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4 bg-white">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="text-gray-700 font-medium" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link to="/login" className="flex-1 text-center px-4 py-2.5 rounded-lg border border-gray-300 font-medium" onClick={() => setOpen(false)}>
              Login
            </Link>
            <Link to="/register" className="flex-1 text-center px-4 py-2.5 rounded-lg bg-purple text-white font-medium" onClick={() => setOpen(false)}>
              Register Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
