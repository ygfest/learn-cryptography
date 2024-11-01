import React from 'react'
import HomeContainer from './components/home-container'
import NavigationBar from '../components/nav-bar'
import Drawer from '../components/drawer'

function Home() {
  return (
    <div className="p-6 md:p-12">
      <NavigationBar/>
      <Drawer/>
      <HomeContainer/>
      
    </div>
  )
}

export default Home
