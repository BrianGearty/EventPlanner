$(document).ready(function() {
// Get the the current date and time in the Nav
   const now = moment().format('MMMM Do YYYY, h:mm a') 

var $dateHeading = $("#navbar-date");
   $dateHeading.text(now);

// Referencing planner element 
   var $plannerDiv = $("#plannerContainer");
 // Clean slate (start with nothing)
   $plannerDiv.empty();

for (var i = 9; i < 18; i++){
 // Build out rows (center)
   var $tableRow= $("<tr>");
   $tableRow.addClass('row');

// Timebox of row (left side)
   var timeDiv = $("<div>");
   timeDiv.addClass("col-md-2");
   timeDiv.css("background-color", "coral");

// Determining AM or PM
   var showHour = i
   var mornNight = "";
   if (showHour > 12) {
      showHour = showHour - 12;
      mornNight = "pm";
   } else {
      showHour = showHour;
      mornNight = "am";
      if( showHour === 12) {
         mornNight = "pm";
      }
   };
// Display time 
   timeDiv.text(showHour + " " + mornNight)
// Setting up text input area for user
   var userInput = $("<textarea>");
   userInput.addClass("col-md-9 user-input");
   userInput.attr("id", i);
   userInput.css("background-color", "grey");

// Save button of row (right side)
   var btnSave = $("<button>");
   btnSave.addClass("col-md-1 save-btn");
   btnSave.attr("id", i)
   btnSave.css("background-color", "cornflowerblue");
// Adding them all to the page
   $tableRow.append(timeDiv, userInput, btnSave)
   $('#formPlanner').append($tableRow)
   //console.log($tableRow, timeDiv, btnSave)

}
var todos = [];
// On Click for Save button
$('.save-btn').on('click', function(e){
   e.preventDefault();
   
   $('.user-input').each(function() {
      var time = ($(this).attr('number'));
      var userTask = $(this).val();
      // console.log(time)
      // console.log(userTask)
      // console.log(time);
// Set localStorage
      localStorage.setItem("text",time, userTask);
// Get localStorage
      $("user-input").val(localStorage.getItem("text" ));
      console.log($(userTask))
      
      // $("col-md-9 user-input").val(localStorage.getItem("hour-10"));
      // $("#hour-11 .description").val(localStorage.getItem("hour-11"));
      // $("#hour-12 .description").val(localStorage.getItem("hour-12"));
      // $("#hour-13 .description").val(localStorage.getItem("hour-13"));
      // $("#hour-14 .description").val(localStorage.getItem("hour-14"));
      // $("#hour-15 .description").val(localStorage.getItem("hour-15"));
      // $("#hour-16 .description").val(localStorage.getItem("hour-16"));
      // $("#hour-17 .description").val(localStorage.getItem("hour-17"));
})
})




})