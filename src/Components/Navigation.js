import React from 'react'
import { Link } from 'react-router-dom'
import './newStyles.css'

const Navigation = () => {
  return (
    <div className="navbar">
    <Link to="/Home"  className='textDecoration'>Home</Link>
    <Link to="/Students" className='textDecoration' >Students</Link>
    <Link to="/Contact"  className='textDecoration'>Contact Us</Link>
 
    </div>
  )
}

export default Navigation