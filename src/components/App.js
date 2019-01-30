import React, { Component } from 'react'
import UserCreate from './UserCreate'
import LanguageSelector from './LanguageSelector'
import { LanguageStore } from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector onLanguageChange={this.onLanguageChange} />
          
          <ColorContext.Provider value='red'>
              <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}
