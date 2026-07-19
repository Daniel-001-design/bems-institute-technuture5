import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { users, findUserByIdentifier, findUserByEmailOrPhone } from '../data/users.js'
import { courses } from '../data/courses.js'

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me'

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { fullName, email, phone, password, confirmPassword, courseId } = req.body

    if (!fullName || !email || !phone || !password || !confirmPassword || !courseId) {
      return res.status(400).json({ message: 'All fields are required.' })
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match.' })
    }

    const course = courses.find((c) => c.id === courseId)
    if (!course) {
      return res.status(400).json({ message: 'Selected course is invalid.' })
    }

    if (findUserByEmailOrPhone(email, phone)) {
      return res.status(409).json({ message: 'An account with this email or phone already exists.' })
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const user = {
      id: users.length + 1,
      fullName,
      email,
      phone,
      passwordHash,
      program: 'Technuture 5.0',
      courseId,
      paid: false,
      createdAt: new Date().toISOString()
    }
    users.push(user)

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' })

    res.status(201).json({
      message: 'Account created successfully.',
      token,
      user: { id: user.id, fullName: user.fullName, email: user.email, courseId: user.courseId }
    })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong during registration.' })
  }
})

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { identifier, password } = req.body

    if (!identifier || !password) {
      return res.status(400).json({ message: 'Email/phone and password are required.' })
    }

    const user = findUserByIdentifier(identifier)
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' })
    }

    const valid = await bcrypt.compare(password, user.passwordHash)
    if (!valid) {
      return res.status(401).json({ message: 'Invalid credentials.' })
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' })

    res.json({
      message: 'Login successful.',
      token,
      user: { id: user.id, fullName: user.fullName, email: user.email, courseId: user.courseId }
    })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong during login.' })
  }
})

export default router
