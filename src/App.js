import React, { Component } from 'react'
import BDN_EventForm1 from './components/BDN_EventForm1'
import BDN_EventForm2 from './components/BDN_EventForm2'
import BDN_EventForm3 from './components/BDN_EventForm3'
import BDN_EventForm4 from './components/BDN_EventForm4'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event form demo</h1>
        <BDN_EventForm1 />
        <BDN_EventForm2 />
        <BDN_EventForm3 />
        <BDN_EventForm4 name="Bùi Đức Nguyên"/>
      </div>
    )
  }
}
