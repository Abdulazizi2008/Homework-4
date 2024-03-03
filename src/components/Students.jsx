import React, { Component } from "react";
import { ButtonGroup } from "react-bootstrap";

class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          group: "React N32",
          doesWork: false,
        },

        {
          id: 2,
          firstName: "Tom",
          lastName: "Smith",
          group: "React N45",
          doesWork: true,
        },

        {
          id: 3,
          firstName: "Bruce",
          lastName: "Lee",
          group: "React N50",
          doesWork: false,
        },
      ],
    };
  }
  render() {
    const { students } = this.state;
    return (
      <div className="container py-3">
        <form>
          <ButtonGroup className="w-100">
            <input
              type="text"
              placeholder="Search"
              className="form-control  p-2"
            />
            <select name="filter" id="filter" className="form-select w-auto ">
              <option value="All">All</option>
              <option value="React N32">React N32</option>
              <option value="React N45">React N45</option>
              <option value="React N50">React N50</option>
              <option value="React N58">React N58</option>
            </select>
            <button className="btn btn-outline-success  w-auto">Add</button>
          </ButtonGroup>
        </form>
        <studentsList students={students} />
      </div>
    );
  }
}

export default Students;
