import Header from '@/components/navFootComponent/HeaderComponent'
import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <h1>Home Footer</h1>
    </div> 
  )
}

export default DefaultLayout