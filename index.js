// Write your solution in this file!
const employee = {
    name: "Jen",
    streetAddress: "321 Main Street"
}


function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete employee[key];
    return employee;
}


// Passes first test, fails second test.
// function updateEmployeeWithKeyAndValue(obj, key, value) {
//     const newEmployee = {...employee[key] = value};
//     return employee;    
//     return newEmployee;
// }

// function updateEmployeeWithKeyAndValue(obj, key, value) {
//     const newEmployee = {...employee[key] = value};    
//     return newEmployee;
//     return employee;
// }

// Passed first test, failed second test. This is destructive to the employee object.
// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     const newEmployee = {...employee[key] = value};
//     return employee;    
//     return newEmployee;
// }

// Failed attempts at 1st test.
// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     const newEmployee = {...employee[key] = value};  
//     return newEmployee;
// }

// From the lesson.
// function nondestructivelyUpdateObject(obj, key, value) {
//     const newObj = { ...obj };
  
//     newObj[key] = value;
  
//     return newObj;
//   }
  