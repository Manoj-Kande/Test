import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopDiv from './components/Home';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Box from './components/Box';
import ReferPage from './components/ReferPage';
import ReferralBenefits from "./components/ReferralBenefits"
import FrequentQuestions from './components/FrequentQuestions';
function App() {
  

  return (
    <>
      <TopDiv></TopDiv>
      <NavBar/>
      <Header></Header>
      <Box></Box>
      <ReferPage></ReferPage>
      <ReferralBenefits></ReferralBenefits> 
      <FrequentQuestions />
      <ReferPage></ReferPage>

    </>
  )
}

export default App
