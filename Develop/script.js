// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?   
  //

  $(".saveBtn").click(function(){
    var task = $(this).siblings(".description").val()
    var timeBlock = $(this).parent().attr("id")
    localStorage.setItem(timeBlock, task)
  })

  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  $(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id").split("-")[1])
    var currentHour = dayjs().hour()
    console.log(blockHour)
    console.log(currentHour)
    if (blockHour < currentHour) {
      console.log("past")
      $(this).addClass("past")
    }
    else if (blockHour === currentHour) {
      console.log("present")
      $(this).addClass("present")
    }
    else if (blockHour > currentHour) {
      console.log("future")
      $(this).addClass("future")
    }
  })

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  for(var i = 9; i < 18; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i))
    console.log("#hour-" + i + " .description")
  }
  // TODO: Add code to display the current date in the header of the page.
var currentDate = dayjs().format("dddd, MMMM DD, YYYY")

document.getElementById("currentDay").textContent = currentDate;

});
