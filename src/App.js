import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import CarRoo from './components/carRoo/CarRoo.js';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        {/* <NavRoo className='cornerIcons' /> */}
        <CarRoo />
        

      </div>
    );
  }

}

export default App;
