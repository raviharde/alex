import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/logo.png'
import icon1 from '../assets/dashboard.svg'
import icon2 from '../assets/briefcase.svg'
import icon3 from '../assets/idcard.svg'
import icon4 from '../assets/calendar.svg'
import icon5 from '../assets/question.svg'
import icon6 from '../assets/team.svg'
import icon7 from '../assets/bell.svg'
import PageTitle from './PageTitle'
import NavigationLink from './ui/NavigationLink'
const Layout = () => {
    return (
        <div className="min-h-screen flex flex-row bg-primary-surface ">
            <div className='bg-white flex flex-col border-r border-border pr-2 pl-2 pt-4  items-center'>
                <img src={logo} alt='CM' className='h-8 w-auto max-w-max mb-6' />
                <nav className=" text-white flex flex-col gap-2 ">
                    <NavigationLink to="/" icon={icon1} />
                    <NavigationLink to="/projects" icon={icon2} />
                    <NavigationLink to="/contacts" icon={icon3} />
                    <NavigationLink to="/aiAgent" icon={icon4} />
                    <NavigationLink to="/leads" icon={icon6} />
                    <span className='border-b border-gray-400'></span>
                    <NavigationLink to="/support" icon={icon5} />
                    <NavigationLink to="/notifications" icon={icon7} />
                </nav>
                
            </div>
            <main className="flex-grow py-3 px-7">
                <Outlet />
            </main>


        </div>
    )
}

export default Layout