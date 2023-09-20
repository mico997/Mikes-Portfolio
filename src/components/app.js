import React, { Component } from 'react'
import moment from 'moment'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';



import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about-me";
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import NoMatch from './pages/no-match';









const todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a')
const age = moment('19960121 10:30:08', 'YYYYMMDD h:mm:ss', true).fromNow()
const birthdayDay = moment(
  '19970121 10:30:08',
  'YYYYMMDD h:mm:ss',
  true,
).format('dddd')
const birthday = moment('19960121 10:30:08', 'YYYYMMDD h:mm:ss', true).format(
  'MMM Do YYYY',
)
const dayLength = moment().startOf('day').fromNow()
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <h1>Mikes 2nd Portfolio</h1>
            <div>Today's Date : {todaysDate}</div>
            <div>
              I was born : {age} on a {birthdayDay} {birthday}
            </div>

            <div>The Day Started {dayLength}. What Have you accomplished Today</div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>




      </div>
    )
  }
}
