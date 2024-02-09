import React from 'react'

function EmployeeListItem({ employee }) {
  return (
    <div className="employee-list-item">
      <h3>{employee.name}</h3>
      {/* <img src="" alt="" /> */}
      <p>Title: {employee.title}</p>
    </div>
  );
}

export default EmployeeListItem;
