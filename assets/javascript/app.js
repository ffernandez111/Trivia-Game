         //create a decrementing timer for one minute

         var number = 60;

         //  Variable that will hold our interval ID when we execute
         //  the "run" function
        var intervalId;


         //  When the start button gets clicked, execute the run function.
         $("#start-button").on("click", run);

         //  When the stop button gets clicked, execute the stop function.
         $("#stop-button").on("click", stop);

   
         //  The stop function
         function stop() {

          //  Clears our intervalId
          //  We just pass the name of the interval
          //  to the clearInterval function.
          clearInterval(intervalId);
          }
          
         // The reset function
         function reset() {
          intervalId = 1;
          number = 1;

          }



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

         //  Shows the number 
         $("#time").html(number);


         //  Once number hits zero...
         if (number === 0) {

         //  ...runs the stop function.
         stop();

         //  Alert the user that time is up.
         alert("Times Up!");
          }
          }

         // Adding radio buttons for question#1 correct answer (not done completely)
          $(document).ready(function(){
            $("input[type='button']").click(function(){
                var answer1 = $("input[name='answerC1']:checked").val();
                if(answerC1){
                    alert("Your are correct!" + radioValue);
                }
            });
        });







//player response code here
//function responses() {
  //var userAnswer;
  
  
  // if user click submit button without selecting any option, alert box should be say "please select choice answer".
  
  // If Correct answer
  //if(userAnswer === ) {
     //alert("Answer is correct!");
 // }
  // If incorrect answer
  //else {
     //alert("Answer is wrong!");
  //}
  
//}


