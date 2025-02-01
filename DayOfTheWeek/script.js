let date= new Date();
let dayNumber= date.getDay();
let theDayIs;
let quote;
switch(dayNumber){
    case 0:
        theDayIs="Sunday";
        quote="Chill day";
        break;
    case 1:
        theDayIs="Monday";
        quote="Day of Work";
        break;
    case 2:
        theDayIs="Tuesday";
        quote="2nd Day of Work";
        break;
    case 3:
        theDayIs="Wednesday";
        quote="3rd Day of Work";
        break;
    case 4:
        theDayIs="Thursday";
        quote="4th Day of Work";
        break;
    case 5:
        theDayIs="Friday";
        quote="5th Day of Work";
        break;
    case 6:
        theDayIs="Saturday";
        quote="6th Day of Work";
        break;
}

let spanOfWeekday = document.getElementById("weekday");
spanOfWeekday.innerHTML = `${theDayIs}`;

let spanOfQuote = document.getElementById("quote");
spanOfQuote.innerHTML = `${quote}`;

