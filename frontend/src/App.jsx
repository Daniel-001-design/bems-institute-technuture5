import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Register from './pages/Register'
import Payment from './pages/Payment'
import { EnrollmentProvider } from './context/EnrollmentContext'

function Layout({ children }) {
  const location = useLocation()
  const bare = ['/login', '/register', '/payment'].includes(location.pathname)

  if (bare) return children

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <EnrollmentProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Layout>
    </EnrollmentProvider>
  )
}
