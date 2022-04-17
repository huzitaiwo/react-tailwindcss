import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
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
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
