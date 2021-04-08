// OUTILS
import React, {useState, useEffect, Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// STYLES
import './Styles/App.scss'
import Loader from './Components/Loader'
// COMPOSANTS
import Home from './Components/Home'
import Footer from './Components/Footer'
import Header from './Components/Header'
import PriseDeRdv from './Components/PriseDeRdv'



export default function App() {
//class App extends Component {
  
  const [isLoading, setIsLoading] = useState(true)

  // constructor() {
  //   super()
  //   this.state = {
  //     loading: true
  //   }
  // }

  // componentWillMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       loading: false
  //     })
  //   }, 5000);
  // }
  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false)
    }, 3000);

  }, [])

  //render(){
    return (
      <div className="App">

        <Router>
          <Switch>
            {isLoading ? <Loader /> : null}

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
