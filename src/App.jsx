import React, { useState } from 'react'
import './App.css'

import AppHeader from './components/AppHeader'
import TattooItem from './components/TattooItem'
import TattooPost from './components/TattooPost'

import tattoos from './data/tattoos'


function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null)

  function OnTattooOpenClick(theTattoo) {
    setSelectedTattoo(theTattoo)
  }
  const tattooElements = tattoos.map((tattoo, index) => {
    return <TattooItem key={index} tattoo={tattoo} />
  })
  
  let tattooPost = null
  if (!!selectedTattoo) {
      tattooPost = <TattooPost tattoo={selectedTattoo} />
  }

  return (
    <div className='App'>
      <AppHeader />
      <div className='app-grid'>
        {tattooElements}
      </div>
      {tattooPost}
    </div>
  )
}

export default App
