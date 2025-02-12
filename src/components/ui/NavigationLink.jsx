import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationLink = ({ to, icon }) => {
  return (
    <NavLink
    to={to}
    className={({ isActive }) =>
      `p-3 rounded-md hover:bg-primary-surface ${
        isActive ? 'bg-primary-surface' : ''
      }`
    }
  >
    <img src={icon} alt="navigation icon" className="w-6 h-6 bg-cover" />
  </NavLink>
  )
}

export default NavigationLink