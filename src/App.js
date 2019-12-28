import React, { Component } from 'react';
import Header from './components/Header';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import students from './utils/data/studentData';
import { getDataFromLocalStorage } from './utils/common';

import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      stds: getDataFromLocalStorage('students') || students
    }
  }

  render() {
    const { stds } = this.state;

    return (
      <div className="app">
        <Header/>
        <StudentList students={ stds } />
        <StudentForm 
          updateStudentList={ data => this.setState({ stds: data }) } 
          students={ stds } 
        />
      </div>
    )
  }
}

export default App;
