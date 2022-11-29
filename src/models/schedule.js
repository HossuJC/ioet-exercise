class Schedule {
    constructor(day, startTime, endTime) {
        if (startTime >= endTime) {
            throw new Exception('The given time range is not valid');
        }
        switch (day) {
            case "MO":
                this.day = 1;
                break;
            case "TU":
                this.day = 2;
                break;
            case "WE":
                this.day = 3;
                break;
            case "TH":
                this.day = 4;
                break;
            case "FR":
                this.day = 5;
                break;
            case "SA":
                this.day = 6;
                break;
            case "SU":
                this.day = 7;
                break;
            default:
                throw new Exception('The given day in the string is not a valid value');
        }
        this.startTime = startTime;
        this.endTime = endTime;
    }
}

module.exports = Schedule;