import React, { createContext, useContext, useState } from 'react'
import { PROGRAM_NAME, FORM_FEE, PAYMENT_FEE } from '../data/courses'

const EnrollmentContext = createContext(null)

export function EnrollmentProvider({ children }) {
  const [selectedCourse, setSelectedCourse] = useState(null)

  const enrollment = {
    program: PROGRAM_NAME,
    course: selectedCourse?.title || 'UI/UX Design',
    formFee: FORM_FEE,
    programFee: PAYMENT_FEE,
    total: FORM_FEE + PAYMENT_FEE
  }

  return (
    <EnrollmentContext.Provider value={{ selectedCourse, setSelectedCourse, enrollment }}>
      {children}
    </EnrollmentContext.Provider>
  )
}

export function useEnrollment() {
  const ctx = useContext(EnrollmentContext)
  if (!ctx) throw new Error('useEnrollment must be used within EnrollmentProvider')
  return ctx
}
