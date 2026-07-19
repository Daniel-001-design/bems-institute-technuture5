import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Award, Briefcase, BadgeCheck, ArrowRight, Headphones } from 'lucide-react'
import { courses, PROGRAM_START, PROGRAM_END, FORM_FEE, PAYMENT_FEE } from '../data/courses'

const features = [
  { icon: GraduationCap, title: 'Practical Learning', desc: 'Hands -on training with real-world projects.' },
  { icon: Award, title: 'Expert Tutors', desc: 'Learn from experienced industry professionals.' },
  { icon: Briefcase, title: 'Career Focused', desc: 'Skills that prepare you for jobs and entrepreneurship.' },
  { icon: BadgeCheck, title: 'Certification', desc: 'Earn recognized certificates upon completion.' }
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Aspire.
              <br />
              Learn.
              <br />
              <span className="text-purple">Succeed.</span>
            </h1>
            <p className="text-gray-300 text-lg mt-6 max-w-md">
              BEMS Institute of Technology and Vocational Studies equips you with practical skills for today's world
              and tomorrow's opportunities.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/courses"
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-purple text-white font-semibold hover:bg-purple-dark transition-colors"
              >
                Explore Courses <ArrowRight size={18} />
              </Link>
              <Link
                to="/register"
                className="px-6 py-3.5 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Register for Technuture 5.0
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&q=80"
              alt="Students in a BEMS classroom"
              className="w-full h-64 lg:h-72 object-cover rounded-2xl"
            />
            <div className="bg-white rounded-2xl shadow-xl mt-[-2.5rem] relative mx-4 lg:mx-8 px-6 py-6">
              <span className="inline-block bg-purple text-white text-sm font-semibold px-4 py-1.5 rounded-md mb-4">
                TECHNUTURE 5.0
              </span>
              <div className="flex justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="text-purple text-xs font-semibold uppercase tracking-wide">Starts</p>
                  <p className="font-bold text-lg">3rd</p>
                  <p className="text-xs text-gray-500 uppercase">August 2026</p>
                </div>
                <div className="border-l border-gray-100" />
                <div>
                  <p className="text-purple text-xs font-semibold uppercase tracking-wide">Ends</p>
                  <p className="font-bold text-lg">4th</p>
                  <p className="text-xs text-gray-500 uppercase">September 2026</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">Don't miss out on this life-changing experience!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="how-it-works" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {features.map((f) => (
            <div key={f.title}>
              <div className="h-14 w-14 mx-auto rounded-full bg-tint flex items-center justify-center text-purple mb-4">
                <f.icon size={26} strokeWidth={1.8} />
              </div>
              <p className="font-bold text-navy mb-1">{f.title}</p>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <div className="bg-navy rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-extrabold text-white">
              TECHNUTURE <span className="text-purple">5.0</span>
            </h3>
            <p className="text-gray-300 mt-1">Elevate your skills. Expand your future.</p>
            <div className="flex flex-wrap items-center gap-3 mt-5">
              <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-lg">{PROGRAM_START}</span>
              <ArrowRight size={16} className="text-gray-400" />
              <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-lg">{PROGRAM_END}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full lg:w-auto">
            <div className="flex gap-3">
              <div className="bg-white/10 rounded-xl px-5 py-3 min-w-[130px]">
                <p className="text-gray-300 text-xs">Form Fee</p>
                <p className="text-white font-bold">₦{FORM_FEE.toLocaleString()}</p>
              </div>
              <div className="bg-white/10 rounded-xl px-5 py-3 min-w-[130px]">
                <p className="text-gray-300 text-xs">Payment Fee</p>
                <p className="text-white font-bold">₦{PAYMENT_FEE.toLocaleString()}</p>
              </div>
            </div>
            <Link
              to="/register"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-purple text-white font-semibold hover:bg-purple-dark transition-colors"
            >
              Register Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Course teasers */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <p className="text-purple font-semibold text-sm text-center uppercase tracking-wide">Our Courses</p>
        <h2 className="text-3xl font-extrabold text-navy text-center mt-2 mb-10">Information Technology</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-tint rounded-2xl p-8 text-center">
              <div className="h-14 w-14 mx-auto rounded-full bg-white flex items-center justify-center text-purple mb-5">
                <course.icon size={26} strokeWidth={1.8} />
              </div>
              <p className="font-bold text-navy text-lg mb-2">{course.title}</p>
              <p className="text-sm text-gray-500 mb-4">{course.cardDescription}</p>
              <Link
                to="/courses"
                className="inline-flex items-center gap-1.5 text-purple font-semibold text-sm hover:gap-2.5 transition-all"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact banner */}
      <section id="contact" className="bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
              <Headphones size={22} />
            </div>
            <div>
              <p className="font-bold text-white">Have questions?</p>
              <p className="text-gray-400 text-sm">We're here to help you on your learning journey.</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-navy font-semibold text-sm"
            >
              Contact Us <ArrowRight size={16} />
            </a>
            <div className="text-white text-sm">
              <p>+234 803 744 7068</p>
              <p>+234 706 557 5793</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
