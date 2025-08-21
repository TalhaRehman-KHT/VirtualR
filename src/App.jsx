
import './App.css'
import FeatureSection from './components/FeatureSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'

function App() {


  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection />
        <FeatureSection />
      </div>
    </>
  )
}

export default App
