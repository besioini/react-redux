import React from 'react';
import Header from './Header';

function Employee({ employee }) {
  return (
    <div className="employee-detail">
      <Header title='Employee Detail'/>
      <h1>{employee.name}</h1>
      <h2>{employee.title}</h2>
      <div className="contact-info">
        <p>Office: {employee.office}</p>
        <p>Mobile: {employee.mobile}</p>
        <p>SMS: {employee.sms}</p>
        <p>Email: {employee.email}</p>
      </div>
    </div>
  );
}

export default Employee;

