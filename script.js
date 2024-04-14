const dayText = document.querySelector("#dayText");
const monthText = document.querySelector("#monthText");
const yearText = document.querySelector("#yearText");

const daysText = document.querySelector("#daysText");
const monthsText = document.querySelector("#monthsText");
const yearsText = document.querySelector("#yearsText");

const dayInput = document.querySelector("#dayInput");
const monthInput = document.querySelector("#monthInput");
const yearInput = document.querySelector("#yearInput");

const dayError = document.querySelector("#dayError");
const monthError = document.querySelector("#monthError");
const yearError = document.querySelector("#yearError");

const btn = document.querySelector("#btn");

const d = new Date();
let dayFlag = false;
let monthFlag = false;
let yearFlag = false;
let dmyFlag = false;

btn.addEventListener("click", () => {
  // Day to Month Verification
  if (monthInput.value == 1 && dayInput.value > 31) {
    dmyFlag = false;
  } else if (monthInput.value == 2 && dayInput.value > 28) {
    dmyFlag = false;
  } else if (monthInput.value == 3 && dayInput.value > 31) {
    dmyFlag = false;
  } else if (monthInput.value == 4 && dayInput.value > 30) {
    dmyFlag = false;
  } else if (monthInput.value == 5 && dayInput.value > 31) {
    dmyFlag = false;
  } else if (monthInput.value == 6 && dayInput.value > 30) {
    dmyFlag = false;
  } else if (monthInput.value == 7 && dayInput.value > 31) {
    dmyFlag = false;
  } else if (monthInput.value == 8 && dayInput.value > 31) {
    dmyFlag = false;
  } else if (monthInput.value == 9 && dayInput.value > 30) {
    dmyFlag = false;
  } else if (monthInput.value == 10 && dayInput.value > 31) {
    dmyFlag = false;
  } else if (monthInput.value == 11 && dayInput.value > 30) {
    dmyFlag = false;
  } else if (monthInput.value == 12 && dayInput.value > 31) {
    dmyFlag = false;
  } else {
    dmyFlag = true;
  }

  // Day Empty Value Check
  if (dayInput.value == "") {
    dayError.textContent = "This field is required";
    dayFlag = false;
    // Day Validation
  } else if (dayInput.value <= 0 || dayInput.value > 31) {
    dayError.textContent = "Must be a valid day";
    dayFlag = false;
  } else {
    dayError.textContent = "";
    dayFlag = true;
  }

  // Month Empty Value Check
  if (monthInput.value == "") {
    monthError.textContent = "This field is required";
    monthFlag = false;
    // Month Validation
  } else if (monthInput.value <= 0 || monthInput.value > 12) {
    monthError.textContent = "Must be a valid month";
    monthFlag = false;
  } else {
    monthError.textContent = "";
    monthFlag = true;
  }

  // Year Empty Value Check
  if (yearInput.value == "") {
    yearError.textContent = "This field is required";
    yearFlag = false;
    // Year Validation
  } else if (yearInput.value <= 0) {
    yearError.textContent = "Must be a valid year";
    yearFlag = false;
  } else if (yearInput.value > 2024) {
    yearError.textContent = "Must be in the past";
    yearFlag = false;
  } else {
    yearError.textContent = "";
    yearFlag = true;
  }

  // Current Date Validation
  if (yearInput.value == d.getFullYear()) {
    if (monthInput.value > d.getMonth() + 1) {
      monthError.textContent = "Must be in the past";
      monthFlag = false;
    } else if (monthInput.value == d.getMonth() + 1) {
      if (dayInput.value >= d.getDate()) {
        dayError.textContent = "Must be in the past";
        dayFlag = false;
      }
    }
  }

  // Flag Activation
  if (dmyFlag == false) {
    dayError.textContent = "Must be a valid day";
    dayFlag = false;
    monthFlag = false;
    yearFlag = false;
  }
  if (dayFlag == false) {
    dayText.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else {
    dayText.style.color = "hsl(0, 1%, 44%)";
    dayInput.style.border = "1px solid hsl(0, 0%, 86%)";
  }
  if (monthFlag == false) {
    monthText.style.color = "hsl(0, 100%, 67%)";
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else {
    monthText.style.color = "hsl(0, 1%, 44%)";
    monthInput.style.border = "1px solid hsl(0, 0%, 86%)";
  }
  if (yearFlag == false) {
    yearText.style.color = "hsl(0, 100%, 67%)";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else {
    yearText.style.color = "hsl(0, 1%, 44%)";
    yearInput.style.border = "1px solid hsl(0, 0%, 86%)";
  }

  // Age Calculator
  if (
    dayFlag == true &&
    monthFlag == true &&
    yearFlag == true &&
    dmyFlag == true
  ) {
    var dob = new Date(yearInput.value, monthInput.value - 1, dayInput.value);

    var yearDob = dob.getYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();

    var yearNow = d.getYear();
    var monthNow = d.getMonth();
    var dateNow = d.getDate();

    // Year Calculation
    yearAge = yearNow - yearDob;

    // Month Calculation
    if (monthNow >= monthDob) var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow - monthDob;
    }

    // Day Calculation
    if (dateNow >= dateDob) var dateAge = dateNow - dateDob;
    else {
      monthAge--;
      var dateAge = 31 + dateNow - dateDob;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    // Text Correction
    if (yearAge > 1) yearsText.textContent = " years";
    else yearsText.textContent = " year";
    if (monthAge > 1) monthsText.textContent = " months";
    else monthsText.textContent = " month";
    if (dateAge > 1) daysText.textContent = " days";
    else daysText.textContent = " day";

    document.querySelector("#years").textContent = yearAge;
    document.querySelector("#months").textContent = monthAge;
    document.querySelector("#days").textContent = dateAge;
  }
});
