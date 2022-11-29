const Schedule = require('../../models/schedule');

const parseSchedule = (plainSchedule) => {
    let day = plainSchedule.slice(0, 2);
    let times = plainSchedule.slice(2).split('-');
    return new Schedule(day, times[0], times[1]);
}

const parseMultipleSchedules = (plainMultiSchedules) => {
    let scheduleArray = [];
    for (let plainSchedule of plainMultiSchedules.split(',')) {
        scheduleArray.push(parseSchedule(plainSchedule));
    }
    return scheduleArray;
}

const compareSchedules = (schedule1, schedule2) => {
    if (schedule1.day != schedule2.day) {
        return false;
    }
    if (schedule1.startTime >= schedule2.endTime && schedule2.startTime <= schedule1.endTime) {
        return false;
    }
    if (schedule1.startTime <= schedule2.endTime && schedule2.startTime >= schedule1.endTime) {
        return false;
    }
    return true;
}

const getScheduleCoincidences = (scheduleArr1, scheduleArr2, coincidences = 0) => {
    if (scheduleArr1.length == 0 || scheduleArr2.length == 0) {
        return coincidences;
    }
    if (compareSchedules(scheduleArr1[0], scheduleArr2[0])) {
        coincidences++;
    }
    if (scheduleArr1[0].day < scheduleArr2[0].day) {
        scheduleArr1.shift();
    } else if (scheduleArr1[0].day > scheduleArr2[0].day) {
        scheduleArr2.shift();
    } else {
        scheduleArr1.shift();
        scheduleArr2.shift();
    }
    return getScheduleCoincidences(scheduleArr1, scheduleArr2, coincidences);
}

module.exports = { parseSchedule, parseMultipleSchedules, compareSchedules, getScheduleCoincidences }