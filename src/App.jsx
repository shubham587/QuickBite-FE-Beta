import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import DefaultLayout from './Layout/DefaultLayout.jsx'
import HomeComp from  "./components/pageComponents/HomeComponent/index.jsx"
import CategoryComp from './components/pageComponents/CategoryComponent/index.jsx'
import CatalogueComp from './components/pageComponents/catalogueComponent/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomeComp />
      },
      {
        path: 'category',
        element: <CategoryComp />
      },
      {
        path: "catalogue",
        element: <CatalogueComp />
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
