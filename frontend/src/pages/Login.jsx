import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'
import AuthLayout from '../components/AuthLayout'

export default function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ identifier: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Login failed')
      navigate('/courses')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <AuthLayout>
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 lg:p-10">
        <div className="grid grid-cols-2 mb-8">
          <div className="text-center pb-3 border-b-2 border-purple">
            <span className="font-bold text-purple">Login</span>
          </div>
          <Link to="/register" className="text-center pb-3 border-b-2 border-gray-100">
            <span className="font-semibold text-gray-400">Register</span>
          </Link>
        </div>

        <h2 className="text-2xl font-extrabold text-navy text-center mb-1">Welcome Back!</h2>
        <p className="text-gray-500 text-center mb-8">Login to your account to continue</p>

        {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-navy mb-2">Email or Phone Number</label>
            <div className="relative">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="identifier"
                value={form.identifier}
                onChange={handleChange}
                placeholder="Enter your Email or phone number"
                required
                className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 bg-surface focus:border-purple focus:ring-0 outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-2">Password</label>
            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full pl-11 pr-11 py-3.5 rounded-lg border border-gray-200 bg-surface focus:border-purple focus:ring-0 outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="text-right">
            <Link to="#" className="text-purple text-sm font-semibold">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-purple text-white font-semibold hover:bg-purple-dark transition-colors"
          >
            Login <ArrowRight size={18} />
          </button>
        </form>

        <div className="flex items-center gap-4 my-7">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-gray-400 text-sm">or continue with</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        <button className="w-full flex items-center justify-center gap-3 py-3.5 rounded-lg border border-gray-200 font-semibold text-navy hover:bg-gray-50 transition-colors">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62z"/>
            <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.81.54-1.85.86-3.05.86-2.34 0-4.33-1.58-5.04-3.71H.96v2.33A9 9 0 0 0 9 18z"/>
            <path fill="#FBBC05" d="M3.96 10.71A5.41 5.41 0 0 1 3.68 9c0-.59.1-1.17.28-1.71V4.96H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.04l3-2.33z"/>
            <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.96l3 2.33C4.67 5.16 6.66 3.58 9 3.58z"/>
          </svg>
          Continue with Google
        </button>
      </div>

      <p className="text-center text-gray-500 text-sm mt-6">
        Don't have an account?{' '}
        <Link to="/register" className="text-purple font-semibold">
          Register now
        </Link>
      </p>
    </AuthLayout>
  )
}
