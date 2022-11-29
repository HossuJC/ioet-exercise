const { getEmployeeCoincidences } = require('./controllers/employee/employee.controller');

const filepath = process.argv[2];

try {
    coincidencesSets = getEmployeeCoincidences(filepath || 'resources/data.txt');

    for (set of coincidencesSets) {
        console.log('%s: %d', set.pair, set.coincidences);
    }
} catch (err) {
    console.error(err.stack);
    return;
}