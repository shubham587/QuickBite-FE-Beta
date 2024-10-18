import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import DefaultLayout from './Layout/DefaultLayout'
import HomeComp from './components/pageComponents/HomeComponent'
const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomeComp />
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
