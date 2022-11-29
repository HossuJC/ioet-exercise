const { getEmployeeCoincidences } = require('./controllers/employee/employee.controller');

try {
    coincidencesSets = getEmployeeCoincidences('resources/data.txt');

    for (set of coincidencesSets) {
        console.log('%s: %d', set.pair, set.coincidences);
    }
} catch (err) {
    console.error(err.stack);
    return;
}