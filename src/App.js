import React from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'

class App extends React.Component{
  render()
  {
    return(
      <div className="App">
        <PersonalInfo />
      </div>
    )
  }
}

export default App;