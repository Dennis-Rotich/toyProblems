//create the function to detect speed of car
function speedDetect(){
    //create variable to allow user to input values
    const prompt = require('prompt-sync')();
    //storing user input to variable driverSpeed
    let driverSpeed = parseFloat(prompt('Input speed of vehicle:'));
    //giving an output of Ok if the speed is less or equal to 70
    if(driverSpeed <= 70){
        console.log('Ok');
    }
    //calculating the demerit points of the car which is 1 point for every 5km/s above 70km/s
    else if(driverSpeed > 70){
        //calculate the value of speed above 70km/s
        let demerit = driverSpeed - 70;
        //calculate demerit points for the car and ensuring it is an integer value
        let demeritPoints = parseInt(demerit / 5);
        //giving an output of license suspended for demerit points above 12 points
        if(demeritPoints > 12){
            console.log('License suspended');
        }
        //giving an output of the total demerit points if the value is under 12 points
        else{
            console.log('Points: '+ demeritPoints);
        }
    }
};
speedDetect();




