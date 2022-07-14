import React from 'react';
import logo from './logo.svg';
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar';



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <NavBar />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Outlet />
          
        </header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Main;
