import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import WorkingExperience from './components/WorkingExp';
import './css/App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {

    }
  }
  render() {
    return (
      <div className='App'>
        <div className='navbar'>
          <h1>CV Builder 0.1v</h1>
        </div>
        <div className='main'>
          <GeneralInfo />
          <Education />
          <WorkingExperience />
        </div>
        <div className='footer'>
          
        </div>
      </div>
    )
  }
}

export default App;
