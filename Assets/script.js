$(document).ready(function() {
   hourUpdater()
   
// Get the the current date and time in the Nav
   const now = moment().format('MMMM Do YYYY, h:mm a') 

var $dateHeading = $("#navbar-date");
   $dateHeading.text(now);

// Referencing planner element 
   var $plannerDiv = $("#plannerContainer");
 // Clean slate (start with nothing)
   // $plannerDiv.empty();

for (var i = 9; i < 18; i++){
 // Build out rows (center)
   var $tableRow= $("<tr>");
   $tableRow.addClass('row');

// Timebox of row (left side)
   var timeDiv = $("<div>");
   timeDiv.addClass("col-md-2 timeDiv");
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
   userInput.addClass("col-md-9 user-input number");
   userInput.attr("number", i);
   userInput.css("background-color", "grey");

// Save button of row (right side)
   var btnSave = $("<button>");
   btnSave.addClass("col-md-1 save-btn name");
   btnSave.attr("name", i)
   btnSave.css("background-color", "cornflowerblue");
   btnSave.text("Save");
// Adding them all to the page
   $tableRow.append(timeDiv, userInput, btnSave)
   $('#formPlanner').append($tableRow)
   //console.log($tableRow, timeDiv, btnSave)

}
$('.number').each(function() {
   var time = ($(this).attr('number'));
   var userTask = $(this).val();

   // On Click for Save button
   $('.save-btn').on('click', function(e){
      e.preventDefault();
      
      $('.user-input').each(function() {
         var time = ($(this).attr('number'));
         // var userTask = $(this).val();
         // console.log(time)
         // console.log(userTask)
         
         emptyArr = [];
         storageObj = {
            currentHour: time ,
            userVal: userTask,
         }
         // Set localStorage
         emptyArr.push(storageObj)
         localStorage.setItem(time, JSON.stringify(emptyArr));
         
      })
   });
   // Get localStorage
   localStorage.getItem(JSON.stringify(userTask))
   // console.log(time)
   // console.log(userTask)
})
function hourUpdater() {
   // get current number of hours
   var currentHour = moment().hours();

   $(".col-md-9").each(function() {
   var timeBlock = parseInt($(this).attr("number"));

     // check to see if past
   if (timeBlock < currentHour) {
      $(".col-md-9").addClass("past");
   } 
   else if (timeBlock === currentHour) {
      $(".col-md-9").removeClass("past");
      $(".col-md-9").addClass("present");
   } 
   else {
      $(".col-md-9").removeClass("past");
      $(".col-md-9").removeClass("present");
      $(".col-md-9").addClass("future");
   }
   console.log(".col-md-9")
});
}


})