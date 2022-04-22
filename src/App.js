import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// styles and components
import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Create from './pages/Create';
import Navbar from './components/Navbar'


function App() {
  const { authIsReady } = useAuthContext()

  return (
    <div className="App font-poppins text-gray-600">
      {authIsReady && (
        <div className='grid md:grid-cols-3'>
          <BrowserRouter>
            <Navbar />
            <main className='px-6 md:px-14 py-6 bg-gray-100 md:col-span-2 min-h-screen'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<Create />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
              </Routes>
            </main>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
