import { BrowserRouter, Route, Routes } from 'react-router-dom'

// styles and components
import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  return (
    <div className="App font-poppins text-gray-600">
      <div className='grid md:grid-cols-3'>
        <BrowserRouter>
          <Navbar />
          <Header />
          <main className='px-14 py-5 bg-gray-100 md:col-span-2'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
