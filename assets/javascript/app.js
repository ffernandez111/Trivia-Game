        //create a decrementing timer for one minute


        //  Interval Demonstration
        //  Set our number counter to 100.
        var number = 60;

        //  Variable that will hold our interval ID when we execute
        //  the "run" function
        var intervalId;


        //  When the start button gets clicked, execute the run function.
        $("#start-button").on("click", run);

        //  The run function sets an interval
        //  that runs the decrement function once a second.
        function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

        //  The decrement function.
        function decrement() {

        //  Decrease number by one.
        number--;

        //  Show the number in the #show-number tag.
        $("#time-remaining").html("<h1>" + number + "</h1>");


        //  Once number hits zero...
        if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Times Up!");
      }
    }

        //  The stop function
        function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
}

//  Execute the run function.
run();




