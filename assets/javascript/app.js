
$(document).ready(function(){

// Start the Game Function
$("#start").click(startGame);
    function startGame(){
        randomTarget = 0;
        userScore = 0;  








function showQuestions(questions){
    // code will go here
    var output = [];
	var answers;
    for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];






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
submitButton.addEventListener('click', showResults);

}  // End document ready 