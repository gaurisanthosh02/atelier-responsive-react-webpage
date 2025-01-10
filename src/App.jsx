import About from './About'
import './App.css'
import Client from './Client'
import Collection from './Collection'
import Contact from './Contact'
import Footer from './Footer'
import { Home } from './Home'
import Process from './Process'

function App() {

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center" >
        <Home/>
        <About/>
        <Process/>
        <Client/>
        <Collection/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
