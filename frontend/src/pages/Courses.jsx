import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, FileText, CreditCard, ArrowRight, Users } from 'lucide-react'
import { courses, PROGRAM_START, PROGRAM_END } from '../data/courses'
import CourseModal from '../components/CourseModal'

export default function Courses() {
  const [activeCourse, setActiveCourse] = useState(null)

  return (
    <div>
      {/* Header banner */}
      <section className="bg-tint relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 text-center relative z-10">
          <p className="text-purple font-semibold text-sm uppercase tracking-wide mb-3">Our Courses</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-navy mb-4">Build Skills. Shape Your Future.</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Join Technuture 5.0 and gain industry-ready skills from practical, hands-on training.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-navy relative inline-block">
              Technuture 5.0 Programs
              <span className="block h-1 w-14 bg-purple rounded-full mt-2" />
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg">
              Choose a program that matches your passion and career goals. All courses are practical, engaging and
              designed to make you job-ready.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 font-medium whitespace-nowrap">
            <Calendar size={16} className="text-purple" />
            {PROGRAM_START} <span className="text-gray-300">–</span> {PROGRAM_END}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="h-12 w-12 mx-auto rounded-full bg-tint flex items-center justify-center text-purple mb-4 -mt-12 relative border-4 border-white">
                  <course.icon size={22} />
                </div>
                <p className="font-bold text-navy text-lg text-center mb-1">{course.title}</p>
                <p className="text-sm text-gray-500 text-center mb-4">{course.cardDescription}</p>

                <div className="space-y-2.5 border-t border-gray-100 pt-4 mb-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-500">
                      <Clock size={15} className="text-purple" /> Duration
                    </span>
                    <span className="font-semibold text-navy">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-500">
                      <FileText size={15} className="text-purple" /> Form Fee
                    </span>
                    <span className="font-semibold text-navy">₦{course.formFee.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-500">
                      <CreditCard size={15} className="text-purple" /> Payment Fee
                    </span>
                    <span className="font-semibold text-navy">₦{course.programFee.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveCourse(course)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-purple text-white font-semibold hover:bg-purple-dark transition-colors"
                >
                  View Details <ArrowRight size={17} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ready to get started banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <div className="bg-navy rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center text-navy shrink-0">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xl font-extrabold text-white">Ready to Get Started?</p>
              <p className="text-gray-300 text-sm mt-1 max-w-md">
                Register now for Technuture 5.0 and take the first step towards your future.
              </p>
            </div>
          </div>
          <Link
            to="/register"
            className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-navy font-semibold whitespace-nowrap hover:bg-gray-100 transition-colors"
          >
            Register Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {activeCourse && <CourseModal course={activeCourse} onClose={() => setActiveCourse(null)} />}
    </div>
  )
}
