// OUTILS
import React, {useState, Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// STYLES
import './Styles/App.scss'
import Loader from './Components/Loader'
// COMPOSANTS
import Home from './Components/Home'
import Footer from './Components/Footer'
import Header from './Components/Header'
import PriseDeRdv from './Components/PriseDeRdv'



//function App() {
class App extends Component {

  constructor() {
    super()
    this.state = {
      loading: true
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 5000);
  }

 


  render(){
    return (
      <div className="App">

        <Router>
          
          <Switch>
            {this.state.loading ? <Loader /> : null}
            <Route exact path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
            <Route path="/priseDeRdv">
              <Header />
              <PriseDeRdv />
              <Footer />
            </Route>
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
