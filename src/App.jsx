import { useState } from 'react'
import './App.css'
import {Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Projects from './pages/Projects'
import Layout from './components/Layout'
import Contacts from './pages/contacts'
import Dashboard from './pages/Dashboard'
import Leads from './pages/Leads'
import AiAgents from './pages/AiAgents'
import Support from './pages/Support'
import Notifications from './pages/Notifications'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes> 
        <Route path="/" element={<Layout />}>

          <Route path='/' element={<Dashboard/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/leads' element={<Leads/>} />
          <Route path='/aiAgent' element={<AiAgents/>} />
          <Route path='/support' element={<Support/>} />
          <Route path='/notifications' element={<Notifications/>} />
          <Route path='*' element={<Navigate to="/"/>}/>
          </Route>

        </Routes>
      </Router>
      
    </>
  )
}

export default App
