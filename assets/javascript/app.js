
$(document).ready(function(){



function resultsCounter() {
  var right;
  var wrong;
  var unanswered;
  var userAns [];
  var trueAns [];
   //compare user's answer to true answer
      if userAns[]===trueAns[] {
   // calculate right
      rightAnswers++;
      }
      else if userAns[i]===undefined {
   // calculate unanswered
       unanswered++;      
      }
      else 
   // calculate wrong
        wrongAnswers++;
  // uncheck radio buttons
  var checkQ1 = $("input[name='Q1']:checked").val();
  console.log(checkQ1);

  var checkQ2 = $("input[name='Q2']:checked").val();
  console.log(checkQ2);

  var checkQ3 = $("input[name='Q3']:checked").val();
  console.log(checkQ3);

//clearing out radio buttons
$('input[type=radio]').prop('checked', false); 

}


 function resetGame () {
    startGame();   
}

function startTimer() {
  {
    var count=30;
    var counter=setInterval(timer, 1000);
    count=count-1;
    if (count <= 0)
    {
       resultsCounter();
       clearInterval(counter);
       return;
    }
   document.getElementById("timer").innerHTML=count + " secs"; 
  }
}

//function endTimer() {
    if (count > 30)
    {
      //stopClock
    }
//}

  function done() {
  //handle click event for Done button
    //hide quiz div
      $(".quiz").hide();
    //show result div
      $(".results").hide();
    //call result count function
      resultsCounter();
    //Stop timer
      endTimer();
    //initialize timer variablr back to actual time 
      startTimer();
    //update remaining time html to 0
//} 



// Start the Game Function
$("#start").click(startGame);
    function startGame(){              
        $("button").click(function(){
          $(".results").hide();
          $(".quiz").show();
        });
        startTimer();
            if (timer == 0) {
              endTimer ()
              $(".quiz").hide();
              $(".results").show();
              resultsCounter () }
             else {
              timer--;
              //update html
             }
            }





/* 
function showQuestions(questions){
    // code will go here
    var output = [];
	var answers;
    for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];  */

/* Javascript generated questions
     myQuestions = [
        {
          question: "Name the school that Harry Potter attended?",
          answers: {
            a: "Hagedorn",
            b: "Hogwarts",
            c: "Nottingham"
          },
          correctAnswer: "b"
        },
        {
          question: "From what tree do acorns come?",
          answers: {
            a: "Oak",
            b: "Pine",
            c: "Ginka"
          },
          correctAnswer: "a"
        },
        {
          question: "What is the distance around a circle called?",
          answers: {
            a: "Radius",
            b: "Diameter",
            c: "Circumference",
          },
          correctAnswer: "c"
        },
        {
          question: "What is the top colour in a rainbow?",
          answers: {
            a: "Red",
            b: "Yellow",
            c: "Blue",
         },
         correctAnswer: "a"
        },        
        {
          question: "What colour are Smurfs?",
          answers: {
            a: "Green",
            b: "Brown",
            c: "Blue",
        },
           correctAnswer: "c"
        },
      ];
}  


function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);  */

}  // End document ready