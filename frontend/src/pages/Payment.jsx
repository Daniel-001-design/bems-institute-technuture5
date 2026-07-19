import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CreditCard, Landmark, Grid3x3, Lock, ShieldCheck, Info } from 'lucide-react'
import { useEnrollment } from '../context/EnrollmentContext'

const methods = [
  { id: 'card', label: 'Pay with Card', icon: CreditCard },
  { id: 'bank', label: 'Bank Transfer', icon: Landmark },
  { id: 'ussd', label: 'USSD', icon: Grid3x3 }
]

export default function Payment() {
  const navigate = useNavigate()
  const { enrollment } = useEnrollment()
  const [method, setMethod] = useState('card')
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState('')
  const [card, setCard] = useState({ number: '', name: '', expiry: '', cvv: '' })

  const handleChange = (e) => setCard({ ...card, [e.target.name]: e.target.value })

  const handlePay = async (e) => {
    e.preventDefault()
    setError('')
    setProcessing(true)
    try {
      const res = await fetch('/api/payment/charge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ method, amount: enrollment.total, course: enrollment.course })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Payment failed')
      navigate('/courses')
    } catch (err) {
      setError(err.message)
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[320px_1fr]">
      {/* Sidebar */}
      <aside className="bg-navy text-white px-8 py-10 flex flex-col">
        <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center mb-8">
          <img src="/logo.svg" alt="BEMS Institute" className="h-16 w-16" />
        </div>

        <p className="font-bold text-lg mb-6">Enrollment Summary</p>

        <div className="space-y-5 text-sm">
          <div>
            <p className="text-gray-400">Program</p>
            <p className="font-semibold">{enrollment.program}</p>
          </div>
          <div>
            <p className="text-gray-400">Course</p>
            <p className="font-semibold">{enrollment.course}</p>
          </div>
          <div>
            <p className="text-gray-400">Application Form</p>
            <p className="font-semibold">₦{enrollment.formFee.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-400">Program Fee</p>
            <p className="font-semibold">₦{enrollment.programFee.toLocaleString()}</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6">
          <p className="text-gray-400 text-sm">Total Amount</p>
          <p className="text-3xl font-extrabold mt-1">₦{enrollment.total.toLocaleString()}</p>
        </div>

        <div className="mt-auto flex items-center gap-2 text-gray-400 text-sm pt-10">
          <Lock size={15} />
          <div>
            <p className="text-white font-medium">Secure Payment</p>
            <p>Your payment is safe with us.</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="px-6 lg:px-14 py-10">
        <Link to="/courses" className="flex items-center gap-2 text-purple font-semibold text-sm mb-8 w-fit">
          <ArrowLeft size={16} /> Back to Courses
        </Link>

        <h1 className="text-3xl font-extrabold text-navy mb-1">Payment</h1>
        <p className="text-gray-500 mb-8">Complete your payment to enroll for {enrollment.program}</p>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Payment method selector */}
          <div className="border border-gray-100 rounded-2xl p-6 shadow-sm">
            <p className="font-bold text-navy mb-5">Select Payment Method</p>
            <div className="space-y-3">
              {methods.map((m) => {
                const active = method === m.id
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMethod(m.id)}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border transition-colors ${
                      active ? 'border-purple bg-tint' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                          active ? 'border-purple' : 'border-gray-300'
                        }`}
                      >
                        {active && <span className="h-2 w-2 rounded-full bg-purple" />}
                      </span>
                      <span className="font-semibold text-navy">{m.label}</span>
                    </div>
                    <m.icon size={20} className="text-navy" />
                  </button>
                )
              })}
            </div>

            <div className="flex items-center gap-4 mt-8 flex-wrap">
              <span className="font-bold text-blue-700 text-sm tracking-wide">VISA</span>
              <span className="font-bold text-orange-500 text-sm tracking-wide">Mastercard</span>
              <span className="font-bold text-red-600 text-sm tracking-wide">Verve</span>
              <span className="font-bold text-sky-600 text-sm tracking-wide">paystack</span>
            </div>
          </div>

          {/* Payment details */}
          <div className="border border-gray-100 rounded-2xl p-6 shadow-sm">
            <p className="font-bold text-navy mb-5">Payment Details</p>

            {method === 'card' && (
              <form onSubmit={handlePay} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="number"
                      value={card.number}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                      className="w-full pl-4 pr-11 py-3.5 rounded-lg border border-gray-200 bg-surface focus:border-purple outline-none text-sm"
                    />
                    <CreditCard size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Cardholder Name</label>
                  <input
                    type="text"
                    name="name"
                    value={card.name}
                    onChange={handleChange}
                    placeholder="Enter cardholder name"
                    required
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-surface focus:border-purple outline-none text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      value={card.expiry}
                      onChange={handleChange}
                      placeholder="MM / YY"
                      maxLength={7}
                      required
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-surface focus:border-purple outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">CVV</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cvv"
                        value={card.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        maxLength={4}
                        required
                        className="w-full pl-4 pr-11 py-3.5 rounded-lg border border-gray-200 bg-surface focus:border-purple outline-none text-sm"
                      />
                      <Info size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="w-full py-4 rounded-lg bg-purple text-white font-semibold hover:bg-purple-dark transition-colors disabled:opacity-60"
                >
                  {processing ? 'Processing…' : `Pay ₦${enrollment.total.toLocaleString()}`}
                </button>
              </form>
            )}

            {method === 'bank' && (
              <div className="text-sm text-gray-600 space-y-3">
                <p>Transfer the total amount to the account below, then click confirm.</p>
                <div className="bg-surface rounded-lg p-4 space-y-1">
                  <p><span className="text-gray-400">Bank:</span> Providus Bank</p>
                  <p><span className="text-gray-400">Account Name:</span> BEMS Institute of Technology</p>
                  <p><span className="text-gray-400">Account Number:</span> 1234567890</p>
                </div>
                <button
                  onClick={handlePay}
                  disabled={processing}
                  className="w-full py-4 rounded-lg bg-purple text-white font-semibold hover:bg-purple-dark transition-colors disabled:opacity-60"
                >
                  {processing ? 'Confirming…' : `I've Made the Transfer`}
                </button>
              </div>
            )}

            {method === 'ussd' && (
              <div className="text-sm text-gray-600 space-y-3">
                <p>Dial the code below on your registered phone number to complete payment.</p>
                <div className="bg-surface rounded-lg p-4 text-center font-bold text-navy text-lg">*901*000*50000#</div>
                <button
                  onClick={handlePay}
                  disabled={processing}
                  className="w-full py-4 rounded-lg bg-purple text-white font-semibold hover:bg-purple-dark transition-colors disabled:opacity-60"
                >
                  {processing ? 'Confirming…' : `I've Sent the USSD Code`}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom banner */}
        <div className="bg-tint rounded-2xl p-6 mt-6 flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-purple shrink-0">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="font-bold text-navy mb-1">Why do we collect payment?</p>
            <p className="text-sm text-gray-600">
              The application fee and program fee secure your enrollment for {enrollment.program}. After payment,
              bring your payment receipt to the BEMS office for verification.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
