import React, {useState} from 'react';
import logo from './logo.svg';
import { connect } from "react-redux"
import './App.css';

function App() {

  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          />
          { name }
      </header>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {}
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps,  mapDispatchToProps)(App);
