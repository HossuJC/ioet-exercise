const Employee = require('../../models/employee');
const fs = require('fs');
const { parseMultipleSchedules, getScheduleCoincidences } = require('../schedule/schedule.controller');

const pattern = /[A-Z]+=([A-Z]{2}([0-1][0-9]|2[0-4]):([0-5][0-9])-([0-1][0-9]|2[0-4]):([0-5][0-9]),?)+/;

const validateEmployeeString = (plainEmployee) => {
    if (!pattern.test(plainEmployee))
        throw new Exception('The given data has an invalid format');
}

const parseEmployee = (plainEmployee) => {
    validateEmployeeString(plainEmployee);
    let employeeInfoArray = plainEmployee.split('=');
    return new Employee(employeeInfoArray[0], parseMultipleSchedules(employeeInfoArray[1]));
}

const parseEmployeesFile = (path) => {
    let plainEmployees = fs.readFileSync(path, 'utf-8').split('\r\n');
    let employees = [];
    for (employee of plainEmployees) {
        employees.push(parseEmployee(employee));
    }
    return employees;
}

const getEmployeePairs = (employees) => employees.map( (emp1, i) => employees.slice(i + 1).map(emp2 => [emp1, emp2]) ).flat();

const deepCopy = (array) => JSON.parse(JSON.stringify(array));

const getEmployeeCoincidences = (path) => {
    let employees = parseEmployeesFile(path);
    let combinations = getEmployeePairs(employees);
    let coincidencesCount = []
    for (combination of combinations) {
        coincidences = getScheduleCoincidences(deepCopy(combination[0].schedules), deepCopy(combination[1].schedules));
        if (coincidences > 0) {
            coincidencesCount.push({
                pair: combination[0].name + '-' + combination[1].name,
                coincidences: coincidences
            });
        }
    }
    return coincidencesCount;
}

module.exports = { validateEmployeeString, parseEmployee, parseEmployeesFile, getEmployeeCoincidences }