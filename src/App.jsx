import About from './About'
import './App.css'
import Collection from './Collection'
import { Home } from './Home'

function App() {

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center" >
        <Home/>
        <About/>
        <Collection/>
      </div>
    </>
  )
}

export default App
