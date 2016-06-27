function periodFromWindow(periodString) {
    if(periodString == "custom") {
        return "minutes";
    }
    if(periodString === "1d") {
        return "hours";
    }
    if(periodString.endsWith("d")) {
        return "days";
    }
    return "minutes";
}

function timeValue(period, selectedPeriodString, noOfDaysOld) {
    var days = 0;
    if (noOfDaysOld) {
        days = noOfDaysOld;
    }

    var timestamp = new Date(new Date() - days * 24 * 3600 * 1000).getTime();

    if(selectedPeriodString === "custom") {
        return {
            field: "_timestamp",
            operator: "last",
            duration: period + "m",
            currentTime: timestamp
        };
    }
    return {
        operator: "last",
        duration: selectedPeriodString,
        currentTime: timestamp
    };
}

function getPeriodString(period, selectedPeriodString) {
    if(selectedPeriodString === "custom") {
        return (period >= 60) ? ((period / 60) + "h"): (period + "m");
    }
    return selectedPeriodString;
}