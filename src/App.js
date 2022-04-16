import { BrowserRouter, Route, Switch } from 'react-router-dom'

// styles
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
