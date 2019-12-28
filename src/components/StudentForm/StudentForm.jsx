import React, { Component } from 'react';
import TextInput from '../Forms/TextInput';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../../utils/common';

class StudentForm extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        name: '',
        gender: '',
        math: '',
        english: ''
      }
    }
  }

  handleChange = e => {
    const { data } = this.state;
    data[e.target.name] = e.target.value;
    this.setState({ data });
  }

  insertStudent = () => {
    const { students, updateStudentList } = this.props;
    const data = getDataFromLocalStorage('students') || students;
    const updatedData = [ ...data, this.state.data ];
    saveDataToLocalStorage('students', updatedData);
    updateStudentList(updatedData);
  }

  render() {

    return (
      <div className="student-form">
        <h2>Student form</h2>
        <div className="student-form-content">
          <TextInput name="name" label="Student Name" onChange={ this.handleChange } />
          <TextInput name="gender" label="Gender" onChange={ e => this.handleChange(e) } />
          <TextInput name="math" label="Math" onChange={ this.handleChange } />
          <TextInput name="english" label="English" onChange={ this.handleChange } />
        </div>
        <div className="student-form-buttons">
          <button onClick={ this.insertStudent }>Insert Student</button>
        </div>
      </div>
    )
  }
}

export default StudentForm;