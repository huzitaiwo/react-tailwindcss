import { BrowserRouter, Route, Routes } from 'react-router-dom'

// styles and components
import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App font-poppins text-gray-600">
      <BrowserRouter>
        <Navbar />
        <main className='px-14 py-5 bg-gray-100'>
          <Routes>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
