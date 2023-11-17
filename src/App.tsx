
import './App.css'
import Footer from './components/Footer'
import { Navbar } from './components/Navbar'
import Homepage from './pages/Homepage'
import { Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Transactionpage from './pages/Transactionpage'


function App() {
  

  return (
    <div className="App">


    
      
      <header>
        <Navbar />
      </header>

      <main>
          
        
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='Signup' element={<Signup />} />
          <Route path='Signin' element={<Signin/>} />
          <Route path='Signup/Signin' element={<Signin/>} />
          <Route path='Transactionpage' element={<Transactionpage/>} />
        </Routes>
        


      </main>
        <footer>
          <Footer />
        </footer>
            
      


    </div>
  )
}

export default App
