import React from 'react'
import EmployeeListItem from './EmployeeListItem';

function EmployeeList({ data }) {
  return (
    <div className="employee-list">
      {data.map(employee => (
        <EmployeeListItem employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;