import React, { Component } from 'react';
import Header from './components/Header';
import StudentList from './components/StudentList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <StudentList/>
      </div>
    )
  }
}

export default App;
