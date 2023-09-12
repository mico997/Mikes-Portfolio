import React, { Component } from 'react'
import moment from 'moment'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Mikes 2nd Portfolio</h1>
        <div>Today's Date : {moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <div>
          I was born :{' '}
          {moment('19970121 10:30:08', 'YYYYMMDD h:mm:ss', true).fromNow()}
        </div>
        <div>
          The Day Started {moment().startOf('day').fromNow()}. What Have you
          accomplished Today
        </div>
      </div>
    )
  }
}
