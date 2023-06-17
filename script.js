// variable for Datpicker
const datePicker = document.getElementById("datePicker");
const choseDate = document.getElementById("choseDate");

// varibale to print value
const ageYear = document.getElementById("ageYear");
const ageMonth = document.getElementById("ageMonth");
const ageDays = document.getElementById("ageDays");
const ageHours = document.getElementById("ageHours");
const ageSecond = document.getElementById("ageSecond");
const ageMilliseconds = document.getElementById("ageMilliseconds");

datePicker.addEventListener("change", function () {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const selectDate = new Date(this.value);
  const DOB = selectDate.toLocaleDateString("en-US", options);
  console.log(DOB);

  choseDate.innerHTML = DOB;

  const Milliseconds_Btw_DOB = Date.parse(DOB);
  const Milliseconds_Btw_Now = Date.now();
  const ageMilliseconds = Milliseconds_Btw_Now - Milliseconds_Btw_DOB;

  // console.log(ageMilliseconds);

  // variables for calculation
  const Milliseconds = ageMilliseconds;
  const second = 1000;
  const minutes = second * 60;
  const hour = minutes * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  // calculation
  const years = Math.round(Milliseconds / year);
  const months = years * 12;
  const days = years * 365;
  const hours = Math.round(Milliseconds / hour);
  const seconds = Math.round(Milliseconds / second);

  // printing out the value
  ageYear.innerHTML = years;
  ageMonth.innerHTML = months;
  ageDays.innerHTML = days;
  ageHours.innerHTML = hours;
  ageSecond.innerHTML = seconds;
  ageMilliseconds.innerHTML = Milliseconds;

  document.querySelector(".age-calc").classList.add("expand");
});
