// A function that calculates the net pay based on the arious deduction and gross pay
function netSalaryCalculator(){
    //A variable that allows users to input into the terminal
    const prompt = require('prompt-sync')();
    //A variable that stores the users input on gross pay
    let basicSalary = parseFloat(prompt('Enter your basic salary:'));
    //A variable that stores users input on their pensionable pay
    let pensionPay = parseInt(prompt('Enter your pensionable pay:'));
    //Function that calculates the users PAYE based on their gross pay input
    function payeeRates(){
        if(basicSalary <= 24000){return(basicSalary * 0.10);}
        else if(basicSalary >= 24001 && basicSalary <= 32333 ){return(basicSalary * 0.25);}
        else if(basicSalary >= 32334 && basicSalary <= 500000){return(basicSalary * 0.30);}
        else if(basicSalary >= 500001 && basicSalary <= 800000){return(basicSalary * 0.325);}
        else if(basicSalary > 800000){return(basicSalary * 0.35);}
    }
    //Function that outputs the users NHIF deduction based on their gross pay input
    let nhifDeductions = () => {
        if(basicSalary <= 5999){return(150);}
        else if(basicSalary >= 6000 && basicSalary <= 7999){return(300);}
        else if(basicSalary >= 8000 && basicSalary <= 11999){return(400);}
        else if(basicSalary >= 12000 && basicSalary <= 14999){return(500);}
        else if(basicSalary >= 15000 && basicSalary <= 19999){return(600);}
        else if(basicSalary >= 20000 && basicSalary <= 24999){return(750);}
        else if(basicSalary >= 25000 && basicSalary <= 29999){return(850);}
        else if(basicSalary >= 30000 && basicSalary <= 34999){return(900);}
        else if(basicSalary >= 35000 && basicSalary <= 39999){return(950);}
        else if(basicSalary >= 40000 && basicSalary <= 44999){return(1000);}
        else if(basicSalary >= 45000 && basicSalary <= 49999){return(1100);}
        else if(basicSalary >= 50000 && basicSalary <= 59999){return(1200);}
        else if(basicSalary >= 60000 && basicSalary <= 69999){return(1300);}
        else if(basicSalary >= 70000 && basicSalary <= 79999){return(1400);}
        else if(basicSalary >= 80000 && basicSalary <= 89999){return(1500);}
        else if(basicSalary >= 90000 && basicSalary <= 99999){return(1600);}
        else if(basicSalary >= 100000 ){return(1700);}
    }
    //Function that calculates the users NSSF based on their pensionable pay input
    let nssfDeductions = () => {
        if(pensionPay <= 6000){return(pensionPay * 0.6);}
        else if(pensionPay >= 6001 && pensionPay <= 18000){
            let firstDeduction = 6000 * 0.6;
            let secondDeduction = pensionPay * 0.6;
            return(firstDeduction + secondDeduction);
        }
    }
    //Calling the functions created above and storing them in variables
    let payee = payeeRates();
    let nhif = nhifDeductions();
    let nssf = nssfDeductions();
    //A variable that stores the net pay after all the deductions
    let netSalary = basicSalary - payee - nhif - nssf;
    //Giving output to the user
    console.log('Gross pay: ' + basicSalary);
    console.log('PAYE: ' + payee);
    console.log('NHIF deduction: ' + nhif);
    console.log('NSSF deduction: ' + nssf);
    console.log('Net pay: ' + netSalary);
}
netSalaryCalculator();