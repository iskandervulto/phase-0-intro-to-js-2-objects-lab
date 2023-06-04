// Write your solution in this file!
const employee = {
    name: `Bob`,
    streetAddress: "123",
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function updateEmployeeWithKeyAndValue (employee, key, value) {
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
  }

  beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
  }

  beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function deleteFromEmployeeByKey(employee, key){
    const clonedEmployee = {...employee};
    delete clonedEmployee[key];
    return clonedEmployee
  }

  beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
  }

