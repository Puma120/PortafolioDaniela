import HeroSection from './components/HeroSection'
import AboutMeSection from './components/AboutMeSection'
import ProjectsSection from './components/ProjectsSection'
import CertificatesSection from './components/CertificatesSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <CertificatesSection />
      <Footer />
    </div>
  )
}

export default App
