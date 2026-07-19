import express from 'express'
import { courses, PROGRAM_NAME, PROGRAM_START, PROGRAM_END } from '../data/courses.js'

const router = express.Router()

// GET /api/courses
router.get('/', (req, res) => {
  res.json({
    program: {
      name: PROGRAM_NAME,
      startDate: PROGRAM_START,
      endDate: PROGRAM_END
    },
    courses
  })
})

// GET /api/courses/:id
router.get('/:id', (req, res) => {
  const course = courses.find((c) => c.id === req.params.id)
  if (!course) return res.status(404).json({ message: 'Course not found.' })
  res.json(course)
})

export default router
