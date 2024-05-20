import React from 'react'
import ReactDOM from 'react-dom'
import CasesList from './components/CasesList/CasesList.tsx'
import './index.css'
import Header from './components/Header/Header.tsx'
import Baner from './components/Baner/Baner.tsx'
import Footer from './components/Footer/Footer.tsx'
import './fonts/fonts.scss'
window.addEventListener('scroll', function (e) {
  e.preventDefault()
})

const Index = () => {
  return (
    <>
      <Header />
      <Baner />
      <CasesList />
      <Footer />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
)

export default Index
