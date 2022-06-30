import React, { Component } from 'react'
import Adventure from './Adventure'
import Console from './Console'
import Playground from './Playground'

export default class MainFile extends Component {
  render() {
    return (
      <div className='mainDiv'>
      <Console/>
      <Playground/>
      <Adventure/>
      </div>
    )
  }
}
