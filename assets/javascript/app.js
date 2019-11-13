//var timer = "oneMinute"



//  Start on click.
$("#start-button").on("click", function() {
    //  Set the button alert's timeout to run three seconds after the function's called.
    delayButtonAlert = setTimeout(function() {
      alert("Alert #2: Called 3 seconds after the start button is clicked.");
    }, 3000);
  });

