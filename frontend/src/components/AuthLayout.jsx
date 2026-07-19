import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Award, Users, ArrowLeft } from 'lucide-react'

const valueProps = [
  { icon: BookOpen, title: 'Quality Training', desc: 'Practical, hands-on learning from industry experts.' },
  { icon: Award, title: 'Industry Recognized', desc: 'Certificates that boost your career opportunities.' },
  { icon: Users, title: 'Career Focused', desc: 'Skills that prepare you for real-world success.' }
]

export default function AuthLayout({ children, backTo = '/', backLabel = 'Back to Home' }) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
      <div className="hidden lg:flex flex-col bg-navy text-white px-12 py-14 relative overflow-hidden">
        <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-white/5" />
        <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-white/5" />

        <div className="relative z-10">
          <div className="h-28 w-28 rounded-full bg-white flex items-center justify-center mb-10">
            <img src="/logo.svg" alt="BEMS Institute" className="h-24 w-24" />
          </div>

          <h1 className="text-4xl font-extrabold leading-tight mb-5">
            Welcome to
            <br />
            BEMS <span className="text-purple">Institute</span>
            <span className="block h-1 w-14 bg-purple rounded-full mt-3" />
          </h1>

          <p className="text-gray-300 mb-12 max-w-sm">
            Login or create an account to enroll for <span className="text-purple font-semibold">Technuture 5.0</span> and
            build your future.
          </p>

          <div className="space-y-8">
            {valueProps.map((v) => (
              <div key={v.title} className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <v.icon size={20} />
                </div>
                <div>
                  <p className="font-bold">{v.title}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col px-6 lg:px-14 py-10">
        <div className="flex justify-end mb-8">
          <Link to={backTo} className="flex items-center gap-2 text-purple font-semibold text-sm">
            <ArrowLeft size={16} /> {backLabel}
          </Link>
        </div>
        <div className="flex-1 flex items-start lg:items-center justify-center">
          <div className="w-full max-w-lg">{children}</div>
        </div>
      </div>
    </div>
  )
}
