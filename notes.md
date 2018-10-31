// hide result div
//handle click event of START button
    //hide result div
    //start the timer(after interval call counter function)
    //within counter function check if time hit 0 stop the timer and call result count function and hide question div amd show results div
    //else decrement time by 1 and update html with latest time

//handle click event for Done button
    //hide the question div
    //show result div
    //call result count function
    //Stop timer
    //initialize timer variablr back to actual time
    //update remaining time html to 0

//handle new game click event
    //hide result div
    //show questions div

//write down result count function
    //declare 3 variables for right, wrong and unanswered
    //grab input from user
    // create an array of user answeres
    //create an array for actual answeres
    //looping through right answeres and user answeres
        //check if UA === AA, increment right by 1
        //else if UA[i] === undefined, increment unanswered by 1
        //else incremnet wrong by 1
    //unchecked all radio buttons
    //change html for right, wront and unanswered thing 


    
       var checkQ1 = $("input[name='Q1']:checked").val();
       console.log(checkQ1);

       var checkQ2 = $("input[name='Q2']:checked").val();
       console.log(checkQ2);

       var checkQ3 = $("input[name='Q3']:checked").val();
       console.log(checkQ3);

clearing out radio buttons
$('input[type=radio]').prop('checked', false);



Questions
Name the school that Harry Potter attended? Hogwarts Nottingham Hagedorn
From what tree do acorns come? Oak Pine Ginka
What is the top colour in a rainbow? Red Blue Yellow
What is the distance around a circle called? Circumference Radius Diameter
What colour are Smurfs? Blue Green Brown