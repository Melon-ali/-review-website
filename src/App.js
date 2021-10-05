import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <About></About>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
