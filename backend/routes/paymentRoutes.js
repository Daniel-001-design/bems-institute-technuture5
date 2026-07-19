import express from 'express'
import { FORM_FEE, PAYMENT_FEE } from '../data/courses.js'

const router = express.Router()

// POST /api/payment/charge
// NOTE: This is a mock endpoint for development/demo purposes.
// In production, replace this with a real Paystack/Flutterwave server-side
// integration: initialize a transaction, redirect/collect card details via
// the provider's SDK (never handle raw card data yourself), then verify the
// transaction using the provider's verify endpoint before marking as paid.
router.post('/charge', (req, res) => {
  const { method, amount, course } = req.body
  const expectedTotal = FORM_FEE + PAYMENT_FEE

  if (!method || !amount || !course) {
    return res.status(400).json({ message: 'Missing payment details.' })
  }

  if (amount !== expectedTotal) {
    return res.status(400).json({ message: 'Payment amount does not match the required total.' })
  }

  const reference = `BEMS-${Date.now()}`

  // Simulate a successful charge.
  res.json({
    message: 'Payment successful.',
    reference,
    method,
    amount,
    course,
    status: 'success'
  })
})

export default router
