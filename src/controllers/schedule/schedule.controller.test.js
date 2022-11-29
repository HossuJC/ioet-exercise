const Schedule = require('../../models/schedule');
const { parseSchedule, parseMultipleSchedules, compareSchedules, getScheduleCoincidences } = require('./schedule.controller');

describe('Schedule Controller', () => {
    test('Should throw an error if they receive a string with a non valid time range', () => {
        expect(() => { parseSchedule('MO12:00-09:00'); }).toThrow();
    })

    test('Should throw an error if the receive a string with a non valid day', () => {
        expect(() => { parseSchedule('MU12:00-14:00'); }).toThrow();
    })

    test('Should return an schedule object if they receive a valid string', () => {
        const expected = {
            day: 1,
            startTime: '10:00',
            endTime:'12:00'
        }
        const result = parseSchedule('MO10:00-12:00');
        expect(expected).toEqual(result);
    });

    test('Should return an array of schedules if they receive a valid string', () => {
        const expected = [
            {
                day: 1,
                startTime: '10:00',
                endTime:'12:00'
            },
            {
                day: 2,
                startTime: '12:00',
                endTime:'14:00'
            },
            {
                day: 3,
                startTime: '12:00',
                endTime:'14:00'
            },
            {
                day: 4,
                startTime: '12:00',
                endTime:'14:00'
            },
            {
                day: 5,
                startTime: '12:00',
                endTime:'14:00'
            },
            {
                day: 6,
                startTime: '12:00',
                endTime:'14:00'
            },
            {
                day: 7,
                startTime: '12:00',
                endTime:'14:00'
            }
        ];
        const result = parseMultipleSchedules('MO10:00-12:00,TU12:00-14:00,WE12:00-14:00,TH12:00-14:00,FR12:00-14:00,SA12:00-14:00,SU12:00-14:00');
        expect(expected).toEqual(result);
    });

    test('Should return false if they receive two schedules with different days', () => {
        const expected = false;
        const result = compareSchedules(new Schedule('MO', '10:00', '12:00'), new Schedule('WE', '11:00', '13:00'));
        expect(expected).toBe(result);
    })

    test('Should return false if they receive two schedules when the first one starts and finishes before the second one', () => {
        const expected = false;
        const result = compareSchedules(new Schedule('MO', '10:00', '12:00'), new Schedule('MO', '13:00', '15:00'));
        expect(expected).toBe(result);
    })

    test('Should return false if they receive two schedules when the first one starts and finishes after the second one', () => {
        const expected = false;
        const result = compareSchedules(new Schedule('MO', '10:00', '12:00'), new Schedule('MO', '08:00', '10:00'));
        expect(expected).toBe(result);
    })

    test('Should return true if they receive two schedules with same day and time range', () => {
        const expected = true;
        const result = compareSchedules(new Schedule('MO', '10:00', '12:00'), new Schedule('MO', '10:00', '12:00'));
        expect(expected).toBe(result);
    })

    test('Should return true if they receive two schedules with day and time range coincidences', () => {
        const expected = true;
        const result = compareSchedules(new Schedule('MO', '10:00', '12:00'), new Schedule('MO', '11:00', '13:00'));
        expect(expected).toBe(result);
    })

    test('Should return the number of day and time coincidences betweet two arrays of Schedules', () => {
        array1 = [
            {
                day: 1,
                startTime: '10:00',
                endTime:'12:00'
            },
            {
                day: 3,
                startTime: '12:00',
                endTime:'14:00'
            },
            {
                day: 6,
                startTime: '12:00',
                endTime:'14:00'
            },
            {
                day: 7,
                startTime: '12:00',
                endTime:'14:00'
            }
        ];
        array2 = [
            {
                day: 1,
                startTime: '10:00',
                endTime:'12:00'
            },
            {
                day: 2,
                startTime: '12:00',
                endTime:'14:00'
            },
            {
                day: 5,
                startTime: '12:00',
                endTime:'14:00'
            },
            {
                day: 7,
                startTime: '12:30',
                endTime:'13:00'
            }
        ];
        const expected = 2;
        const result = getScheduleCoincidences(array1, array2);
        expect(expected).toBe(result);
    })
});