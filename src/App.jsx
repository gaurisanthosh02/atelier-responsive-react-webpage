import About from './About'
import './App.css'
import Collection from './Collection'
import Contact from './Contact'
import Footer from './Footer'
import { Home } from './Home'

function App() {

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center" >
        <Home/>
        <About/>
        <Collection/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
