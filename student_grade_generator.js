//creating the function to generate the students grade
function gradeGenerator(){
    //create a variable for prompt to prompt users for their grades
    const prompt = require('prompt-sync')();
    //creating a variable that will store the users input
    //ensuring the input is recognised as a number
    let grade = parseFloat(prompt('Enter valid grade here:'));
    //using if...else condition to output the correct grade based on the users input
    //creating a range of 0 to 100 to ensure the users input is inline with the grading
    //80 to 100 receive grade A
    if(grade > 79 && grade <= 100){
        console.log('A');}
    //From 60 to 79 receive the grade B    
    else if(grade <= 79 && grade >= 60 ){
        console.log('B');}
    //49 to 59 receive the grade C    
    else if(grade <= 59  && grade >= 49){
        console.log('C');}
    //40 to 49 receive the grade D    
    else if(grade <= 49 && grade >= 40){
        console.log('D');}
    //0 to 40 receive the grade E    
    else if(grade < 40 && grade >= 0){
        console.log('E');}
    //if the input is not within the range of the graded values    
    else{console.log('Not a valid grade')}    
};



