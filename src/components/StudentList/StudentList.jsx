import React, { Component } from 'react';
import students from './data/studentData';
import StudentRow from './StudentRow';

const tableHeads = Object.keys(students[0]);

class StudentList extends Component {
  render() {
    return (
      <div className="student-list">
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
              <StudentRow key={ idx } { ...student } />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default StudentList;