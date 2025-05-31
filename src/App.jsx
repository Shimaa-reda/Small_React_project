import React from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Portofolio from './Components/Portofolio/Portofolio'

export default function App() {

 let router= createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      // childern


      {path:'/',element:<Home/>},

      {path:'about',element:<About/>},
      {path:'portofolio',element:<Portofolio/>},

      {path:'contact',element:<Contact/>},


       {path:'*',element:<NotFound />},

    ]},
   

   
   

  ])
  return (
   <>
    {/* <h1 className='text-center p-5 bg-info'> app page</h1>
    <i class="fa-brands fa-facebook"></i> */}

    <RouterProvider router={router}/>
 

   
   
   </>
  )
}
