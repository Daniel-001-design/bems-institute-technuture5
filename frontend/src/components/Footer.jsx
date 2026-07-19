import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube } from 'lucide-react'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'About Us', to: '/#about' },
  { label: 'Contact Us', to: '/#contact' },
  { label: 'Login', to: '/login' }
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src="/logo.svg" alt="BEMS Institute" className="h-16 w-16 mb-4" />
          <p className="font-semibold text-white mb-1">BEMS Institute of Technology and Vocational Studies</p>
          <p className="text-gray-400 text-sm">Aspire. Learn. Succeed.</p>
        </div>

        <div>
          <p className="font-semibold mb-4">Quick Links</p>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Follow Us</p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple transition-colors"
                aria-label="social link"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-gray-400 text-sm">
        © 2025 BEMS Institute. All rights reserved.
      </div>
    </footer>
  )
}
