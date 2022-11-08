// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let currentTime = dayjs();
const currentHour = Number(currentTime.format("H"));
const currentDate = currentTime.format("MMM DD, YYYY");

$(document).ready(function () {
  $(".btn").on("click", function() {
    localStorage.setItem($(this).parent().attr("id"), $(this).siblings("textarea").val());
  })

  for (let i = 9; i <= 17; i++) {
    $("#hour-"+ i).children("textarea").val(localStorage.getItem("hour-"+ i));
  }

  $(".time-block").each(function() {
    const plannerHour = $(this).attr("id").split("-")[1];
    if (currentHour == plannerHour) {
      $(this).addClass("present");
    } else if (currentHour > plannerHour) {
      $(this).addClass("past");
    } else if (currentHour < plannerHour) {
      $(this).addClass("future");
    }
  });

  let plannerDate = document.getElementById("currentDay");
  plannerDate.textContent = currentDate;
});
