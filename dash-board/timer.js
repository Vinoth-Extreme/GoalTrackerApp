const timeBox = document.getElementById("timeBox");
const day = document.getElementById("day")
const date = document.getElementById("date")
const month = document.getElementById("month")
const year= document.getElementById("year")
let isAM = false

const getDayName = (x) => {
    if (x === 1) {
        return "Sun";
    } else if (x === 2) {
        return "Mon";
    } else if (x === 3) {
        return "Tue";
    } else if (x === 4) {
        return "Wed";
    } else if (x === 5) {
        return "Thu";
    } else if (x === 6) {
        return "Fri";
    } else {
        return "Sat";
    }
}

const getMonthName = (x) => {
    if (x === 0) {
        return "Jan";
    } else if (x === 1) {
        return "Feb";
    } else if (x === 2) {
        return "Mar";
    } else if (x === 3) {
        return "Apr";
    } else if (x === 4) {
        return "May";
    } else if (x === 5) {
        return "Jun";
    } else if (x === 6) {
        return "Jul";
    } else if (x === 7) {
        return "Aug";
    } else if (x === 8) {
        return "Sep";
    } else if (x === 9) {
        return "Oct";
    } else if (x === 10) {
        return "Nov";
    } else if (x === 11) {
        return "Dec";
    }
}

const getHour12Hour = (hrs) => {
    if(hrs > 12) {
        isAM = false;
        if((hrs-12) < 10) {
            return `0${hrs-12}`
        } else {
            return hrs-12
        }
    } else {
        isAM = true
        return hrs;
    }
}

setInterval(() => {
    const info = new Date()
    const time = 
        // (info.getHours() >= 10 ? info.getHours() : `0${info.getHours()}`)
        getHour12Hour(info.getHours())
        + ":" + 
        (info.getMinutes() >= 10 ? info.getMinutes() : `0${info.getMinutes()}`)
        + ":" + 
        (info.getSeconds() >= 10 ? info.getSeconds() : `0${info.getSeconds()}`)
        + " " +
        (isAM === true ? "AM" : "PM")

    timeBox.innerHTML = time
    date.innerHTML = info.getDate();
    day.innerHTML = getDayName(info.getDay());
    month.innerHTML= getMonthName(info.getMonth())
    year.innerHTML = info.getFullYear();
}, 1000)