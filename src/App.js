import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services';
import About from './components/About/About';
import Update from './components/Update/Update';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path="/home">
            <Header></Header>
              <Home></Home>
            <Footer></Footer>
          </Route> 
          <Route exact path="/">
            <Header></Header>
              <Home></Home>
            <Footer></Footer>
          </Route> 
          <Route path="/about">
            <Header></Header>
              <About></About>
            <Footer></Footer>
          </Route> 
          <Route path="/services">
            <Header></Header>
              <Services></Services>
            <Footer></Footer>
          </Route> 
          <Route path="/update">
            <Header></Header>
              <Update></Update>
            <Footer></Footer>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
