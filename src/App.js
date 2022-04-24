import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// styles and components
import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Create from './pages/Create'
import Navbar from './components/Navbar'
import Meal from './pages/Meal'


function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App font-poppins text-gray-600">
      {authIsReady && (
        <div className='grid md:grid-cols-3'>
          <BrowserRouter>
            <Navbar />
            <main className='px-6 md:px-14 py-6 bg-gray-100 md:col-span-2 min-h-screen'>
              <Routes>
                <Route path='/' element={!user ? <Navigate to='/login' /> : <Home />} />
                <Route path='/create' element={!user ? <Navigate to='/login' /> : <Create />} />
                <Route path='/signup' element={user ? <Navigate to='/' /> : <Signup />} />
                <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
                <Route path='/meals/:id' element={<Meal />}/>
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </main>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
