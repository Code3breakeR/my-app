import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'

function SideBar() {
  return (
    <div className='sidebar'>
      <div><Link className='sbar' to='contact'>Contact</Link></div>
      <div><Link className='sbar' to='share'>Share</Link></div>
      <div><Link className='sbar' to='feedback'>FeedBack</Link></div>
    </div>
  )
}

export default SideBar
