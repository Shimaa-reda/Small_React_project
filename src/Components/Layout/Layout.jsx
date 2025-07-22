import React from 'react'
// import Navbar from '../Navbar/navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from "../Navbar/Navbar";


export default function Layout() {
  return (
    <div>
      <Navbar/>

    {/* content  */}
    <Outlet/>


    <Footer/>
    </div>
  )
}
