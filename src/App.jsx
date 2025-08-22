
import './App.css'
import FeatureSection from './components/FeatureSection.jsx'
import Footer from './components/Footer.jsx'
import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'
import Price from './components/Price.jsx'
import Testimonial from './components/Testimonial.jsx'
import WorkFlow from './components/WorkFlow.jsx'

function App() {


  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Price />
        <Testimonial />
        <Footer />
      </div>
    </>
  )
}

export default App
