import React, { Component } from 'react';
import StudentRow from './StudentRow';

class StudentList extends Component {
  render() {
    const { students } = this.props;
    const tableHeads = Object.keys(students[0]);

    return (
      <div className="student-list">
        <button onClick={ this.addAverage }>Cacl Average</button>
        <table>
          <thead>
            <tr>
              {tableHeads.map((head, idx) =>
                <td key={ idx }>{ head }</td>
              )}
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) =>
              <StudentRow 
                key={ idx }
                { ...student }
                test="test"
              />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default StudentList;