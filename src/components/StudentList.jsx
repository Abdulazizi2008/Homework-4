import React, { Component } from "react";

class StudentList extends Component {
  render() {
    const { students } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Group</th>
              <th>Does work?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.group}</td>
                <td>{student.doesWork}</td>
                <td className="d-flex gap-2">
                  <button className="btn btn-warning btm-sm">Edit</button>
                  <button className="btn btn-danger btm-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
