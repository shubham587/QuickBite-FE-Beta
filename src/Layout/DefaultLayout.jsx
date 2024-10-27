import Footer from '@/components/navFootComponent/FooterComponent'
import Header from '@/components/navFootComponent/HeaderComponent'
import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      {/* div of a width 1680px */}
      <div className="w-full mx-auto p-12">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout