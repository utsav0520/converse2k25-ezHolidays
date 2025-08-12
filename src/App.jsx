import React from 'react'
import AppBar from './components/AppBar.jsx'
import AppFottor from './components/AppFottor.jsx'
import HighlightSection from './components/HighlightSection.jsx'
import FormSection from './components/FormSection.jsx'
import CardSections from './components/CardSections.jsx'

function App() {
  return (
    <>
      <AppBar />
      <HighlightSection/>
      <FormSection/>
      <CardSections/>
      <AppFottor />
    </>
  )
}

export default App
