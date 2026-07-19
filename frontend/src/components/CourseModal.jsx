import React from 'react'
import { useNavigate } from 'react-router-dom'
import { X, GraduationCap, Users, CheckCircle2, Clock, FileText, CreditCard, ArrowRight } from 'lucide-react'
import { useEnrollment } from '../context/EnrollmentContext'

export default function CourseModal({ course, onClose }) {
  const navigate = useNavigate()
  const { setSelectedCourse } = useEnrollment()

  if (!course) return null

  const handleEnroll = () => {
    setSelectedCourse(course)
    onClose()
    navigate('/register')
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 lg:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center text-navy hover:bg-gray-50 z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-10">
          {/* Left column */}
          <div>
            <div className="bg-tint rounded-xl overflow-hidden mb-6">
              <img src={course.image} alt={course.title} className="w-full h-56 object-cover" />
            </div>

            <div className="flex items-center gap-4 mb-3">
              <div className="h-14 w-14 rounded-full bg-tint flex items-center justify-center text-purple shrink-0">
                <course.icon size={26} />
              </div>
              <h2 className="text-2xl font-extrabold text-navy">{course.title}</h2>
            </div>

            <p className="text-purple font-semibold mb-3">{course.tagline}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
          </div>

          {/* Right column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-tint flex items-center justify-center text-purple">
                <GraduationCap size={20} />
              </div>
              <p className="font-bold text-navy text-lg">You'll Learn</p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6">
              {course.learn.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-purple shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-navy">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-5 grid grid-cols-3 gap-3 text-center mb-6">
              <div className="bg-tint rounded-xl py-4 px-2">
                <Clock size={20} className="text-purple mx-auto mb-2" />
                <p className="text-xs text-gray-500">Duration</p>
                <p className="font-bold text-navy">{course.detailDuration}</p>
              </div>
              <div className="bg-tint rounded-xl py-4 px-2">
                <FileText size={20} className="text-purple mx-auto mb-2" />
                <p className="text-xs text-gray-500">Program Fee</p>
                <p className="font-bold text-navy">₦{course.programFee.toLocaleString()}</p>
              </div>
              <div className="bg-tint rounded-xl py-4 px-2">
                <CreditCard size={20} className="text-purple mx-auto mb-2" />
                <p className="text-xs text-gray-500">Application Form</p>
                <p className="font-bold text-navy">₦{course.formFee.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-tint flex items-center justify-center text-purple">
                <Users size={20} />
              </div>
              <p className="font-bold text-navy text-lg">Perfect For</p>
            </div>

            <div className="space-y-2.5 mb-8">
              {course.perfectFor.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-purple shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-navy">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-6 flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-lg border border-purple text-purple font-semibold hover:bg-tint transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleEnroll}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-purple text-white font-semibold hover:bg-purple-dark transition-colors"
              >
                Enroll Now <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
