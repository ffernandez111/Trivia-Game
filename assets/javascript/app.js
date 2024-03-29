//create a decrementing timer for one minute

var number = 60;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

var questionsDiv = $('.questions');


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
$(document).ready(function () {
    $("#btn").click(function () {
        /* Single line Reset function executes on click of Reset Button */
        $("#form")[0].reset();
    });
});



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



//Trivia questions array
var questionArray = [
    {
        question: "Which of the following movies stars Leo Dicaprio",
        answers: {
            a: 'Transformers',
            b: 'The Devils Advocate',
            c: 'Whats Eating Gilbert Grape?',
            d: 'Life Of PI'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which of the following movies are about politics and the U.S.?",
        answers: {
            a: 'Armageddon',
            b: 'Dr. Doolittle',
            c: 'Vice',
            d: 'Fight Club'
        },
        correctAnswer: 'c'
    }
];

// Build out the HTML
for (var i = 0; i < questionArray.length; i++) {
    console.log(questionArray[i])
}


// Adding radio buttons for question#1 correct answer (not done completely...attempted but unsure)
// $(document).ready(function(){
//   $("input[type='button']").click(function(){
//       var userChoice = $("input[name='answerC1']:checked").val();
//       if(userChoice == questionArray.correctAnswer){
//         $("#timeRemaining").empty();
//         $(".question").empty();
//         $("#startButton").empty();
//         clearInterval(clock);
//         alert("Your are correct!" + radioValue);
//         }
//     })
// })