
import './App.css'
import Footer from './components/Footer'
import { Navbar } from './components/Navbar'
import Homepage from './pages/Homepage'
import { Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  

  return (
    <div className="App">


    
      
      <header>
        <Navbar />
      </header>

      <main>
          
        
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='signup' element={<Signup />} />
          <Route path='signin' element={<Signin />} />
        </Routes>
        


      </main>
        <footer>
          <Footer />
        </footer>
            
      


    </div>
  )
}

export default App
