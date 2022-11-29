const { parseEmployee, parseEmployeesFile, getEmployeeCoincidences, validateEmployeeString } = require('./employee.controller');

describe("Employee Controller", () => {
    test('Should throw error if the format of the input is a non valid string', () => {
        expect(() => { validateEmployeeString('12sd=dd33:99-00:00'); }).toThrow();
    })

    test('Should return an employee object if they receive an string', () => {
        const expected = {
            name: 'RENE',
            schedules: [
                {
                    day: 1,
                    startTime: '10:00',
                    endTime: '12:00'
                },
                {
                    day: 7,
                    startTime: '20:00',
                    endTime: '21:00'
                },
            ]
        };
        const result = parseEmployee('RENE=MO10:00-12:00,SU20:00-21:00');
        expect(expected).toEqual(result);
    });

    test('Should return an employee array if they receive a path with a valid txt file', () => {
        const expected = [{
            name: 'RENE',
            schedules: [
                {
                    day: 1,
                    startTime: '10:00',
                    endTime: '12:00'
                },
                {
                    day: 7,
                    startTime: '20:00',
                    endTime: '21:00'
                },
            ]
        },
        {
            name: 'ASTRID',
            schedules: [
                {
                    day: 1,
                    startTime: '10:00',
                    endTime: '12:00'
                },
            ]
        },
        {
            name: 'ANDRES',
            schedules: [
                {
                    day: 1,
                    startTime: '11:00',
                    endTime: '13:00'
                },
                {
                    day: 7,
                    startTime: '20:30',
                    endTime: '23:00'
                },
            ]
        }];
        const result = parseEmployeesFile('resources/test-data.txt');
        expect(expected).toEqual(result);
    });

    test("Should return an Object array with combinations of Employee's names and their coincidences", () => {
        expected = [
            {
                pair: "RENE-ASTRID",
                coincidences: 1,
            },
            {
                pair: "RENE-ANDRES",
                coincidences: 2,
            },
            {
                pair: "ASTRID-ANDRES",
                coincidences: 1,
            }
        ];
        const result = getEmployeeCoincidences('resources/test-data.txt');
        expect(expected).toEqual(result);
    });
});