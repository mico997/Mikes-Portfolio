import React, { Component } from 'react'
import moment from 'moment'

import NavigationContainer from './navigation/navigation-container'

import PortfolioContainer from './portfolio/portfolio-container'

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
        <NavigationContainer />
        <h1>Mikes 2nd Portfolio</h1>
        <div>Today's Date : {todaysDate}</div>
        <div>
          I was born : {age} on a {birthdayDay} {birthday}
        </div>

        <div>The Day Started {dayLength}. What Have you accomplished Today</div>

        <PortfolioContainer />
      </div>
    )
  }
}
