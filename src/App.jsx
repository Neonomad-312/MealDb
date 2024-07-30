import React from 'react'
import Meals from './pages/Meals'
import './App.css'
import AppHeader from './components/appHeader/AppHeader'
import AppHero from './components/appHero/AppHero'
import AppSearch from './components/appSearch/AppSearch'

const App = () => {
  return (
    <div className='container'>
        <AppHeader/>
        <AppHero/>
        <AppSearch/>
        <Meals />
    </div>
  )
}

export default App