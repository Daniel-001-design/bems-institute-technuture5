import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Mail, Phone, Lock, Eye, EyeOff, GraduationCap, BookOpen } from 'lucide-react'
import AuthLayout from '../components/AuthLayout'
import { API_BASE } from '../config'
import { useEnrollment } from '../context/EnrollmentContext'
import { courses, PROGRAM_NAME } from '../data/courses'

export default function Register() {
  const navigate = useNavigate()
  const { selectedCourse, setSelectedCourse } = useEnrollment()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    courseId: selectedCourse?.id || ''
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    if (!agreed) {
      setError('Please agree to the Terms and Conditions')
      return
    }

    const course = courses.find((c) => c.id === form.courseId)
    if (course) setSelectedCourse(course)

    try {
      const res = await fetch(`${API_BASE}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Registration failed')
      navigate('/payment')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <AuthLayout backTo="/login" backLabel="Back to Login">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 lg:p-10">
        <div className="grid grid-cols-2 mb-8">
          <Link to="/login" className="text-center pb-3 border-b-2 border-gray-100">
            <span className="font-semibold text-gray-400">Login</span>
          </Link>
          <div className="text-center pb-3 border-b-2 border-purple">
            <span className="font-bold text-purple">Register</span>
          </div>
        </div>

        <h2 className="text-2xl font-extrabold text-navy text-center mb-1">Create an Account</h2>
        <p className="text-gray-500 text-center mb-8">Fill in your details to get started</p>

        {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-navy mb-2">Full Name</label>
            <div className="relative">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 bg-surface focus:border-purple outline-none text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Enter Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 bg-surface focus:border-purple outline-none text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Phone Number</label>
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 bg-surface focus:border-purple outline-none text-sm"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                  className="w-full pl-11 pr-11 py-3.5 rounded-lg border border-gray-200 bg-surface focus:border-purple outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Confirm Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  className="w-full pl-11 pr-11 py-3.5 rounded-lg border border-gray-200 bg-surface focus:border-purple outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-2">Select Program</label>
            <div className="relative">
              <GraduationCap size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                disabled
                value={PROGRAM_NAME}
                className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 bg-surface outline-none text-sm appearance-none text-navy font-medium"
              >
                <option>{PROGRAM_NAME}</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-2">Select Course</label>
            <div className="relative">
              <BookOpen size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                name="courseId"
                value={form.courseId}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 bg-surface focus:border-purple outline-none text-sm appearance-none text-navy"
              >
                <option value="">Choose a course</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <label className="flex items-start gap-3 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-purple focus:ring-purple"
            />
            <span>
              I agree to the <Link to="#" className="text-purple font-semibold">Terms and Conditions</Link> and{' '}
              <Link to="#" className="text-purple font-semibold">Privacy Policy</Link>
            </span>
          </label>

          <button
            type="submit"
            className="w-full py-3.5 rounded-lg bg-purple text-white font-semibold hover:bg-purple-dark transition-colors"
          >
            Create Account
          </button>
        </form>

        <div className="flex items-center gap-4 my-7">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-gray-400 text-sm">Or</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        <p className="text-center text-gray-500 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-purple font-semibold">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
