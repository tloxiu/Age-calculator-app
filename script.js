const errorDate = document.querySelector(".error-date");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

const inputDate = document.querySelector(".input-date");
const inputMonth = document.querySelector(".input-month");
const inputYear = document.querySelector(".input-year");

const titleDay = document.querySelector(".title-day");
const titleMonth = document.querySelector(".title-month");
const titleYear = document.querySelector(".title-year");

const resultYear = document.querySelector(".years");
const resultMonth = document.querySelector(".month");
const resultDay = document.querySelector(".day");

const submitBtn = document.querySelector(".submit-btn");

const resultSection = document.querySelector(".result-section");

const date = new Date();
const currentYear = date.getFullYear();



function getDaysInMonth(year, month) {
    
    function daysInFebruary(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28;
    }

    const daysInMonth = new Date(year, month, 0).getDate();

    if (month === 2) {
        return daysInFebruary(year);
    }

    return daysInMonth;
}

function checkDayInput(){
    if(!inputDate.value){
        errorDate.style.opacity = 1;
        errorDate.textContent = `This field is required`
        titleDay.classList.add("red-accent-title");
        inputDate.classList.add("red-accent-input");
    }  
    else if(inputDate.value < 1 || inputDate.value > getDaysInMonth(inputYear.value, inputMonth.value)){
        errorDate.style.opacity = 1;
        errorDate.textContent = `Must be a valid day`
        titleDay.classList.add("red-accent-title");
        inputDate.classList.add("red-accent-input");
    }
    else{
        errorDate.style.opacity = 0;
        titleDay.classList.remove("red-accent-title");
        inputDate.classList.remove("red-accent-input");
    }
}


function checkMonthInput(){
    if(!inputMonth.value){
        errorMonth.style.opacity = 1;
        errorMonth.textContent = `This field is required`
        titleMonth.classList.add("red-accent-title");
        inputMonth.classList.add("red-accent-input");
    }
    else if(inputMonth.value < 1 || inputMonth.value > 12){
        errorMonth.style.opacity = 1;
        errorMonth.textContent = `Must be a valid month`
        titleMonth.classList.add("red-accent-title");
        inputMonth.classList.add("red-accent-input");
    }
    else{
        errorMonth.style.opacity = 0;
        titleMonth.classList.remove("red-accent-title");
        inputMonth.classList.remove("red-accent-input");
    }
}


function checkYearInput(){
    if(!inputYear.value){
        errorYear.style.opacity = 1;
        errorYear.textContent = `This field is required`
        titleYear.classList.add("red-accent-title");
        inputYear.classList.add("red-accent-input");
    }  
    else if(inputYear.value > currentYear){
        errorYear.style.opacity = 1;
        errorYear.textContent = `Must be in the past`
        titleYear.classList.add("red-accent-title");
        inputYear.classList.add("red-accent-input");
    }
    else if(inputYear.value < 1950){
        errorYear.style.opacity = 1;
        errorYear.textContent = `Must be a valid year`
        titleYear.classList.add("red-accent-title");
        inputYear.classList.add("red-accent-input");
    }
    else{
        errorYear.style.opacity = 0;
        titleYear.classList.remove("red-accent-title");
        inputYear.classList.remove("red-accent-input");
    }
}


function saveShowInputs() {
    let userDate = parseInt(inputDate.value);
    let userMonth = parseInt(inputMonth.value);
    let userYear = parseInt(inputYear.value);

    let currentDate = new Date();  // Dodaj tę linię

    if(!userDate && !userMonth && !userYear){
        return
    }

    let differenceInYears = currentYear - userYear;

    let yearsInMonths = differenceInYears * 12 + userMonth - currentDate.getMonth() - 1;

    let daysInCurrentMonth = getDaysInMonth(currentYear, currentDate.getMonth() + 1);
    let daysRemaining = daysInCurrentMonth - currentDate.getDate() + userDate;
    let yearsInDays = yearsInMonths * daysInCurrentMonth + daysRemaining;

    resultYear.textContent = differenceInYears;
    resultMonth.textContent = yearsInMonths;
    resultDay.textContent = yearsInDays;
}




function checkInputs(){
    checkDayInput();
    checkMonthInput();
    checkYearInput();
}



submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    checkInputs();
    saveShowInputs();
}) 