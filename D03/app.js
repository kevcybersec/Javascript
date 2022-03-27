/**------- Tasks ----------*/
/**------- ONE ----------*/
//Write a JavaScript program that accept two integers and display the larger.


var a,b;
a=prompt("Enter First Number");
b=prompt("Enter Second Number");
if(a>b)
alert(a+" Is the greater Number");
else
alert(b+" Is the greater Number");


//Kevin Ndirangu

/**------- TWO ----------*/
//Write a javascript program to process loans based on the following scenarios
//1. an applicant is eligible for a loan if they have a good credit score and high income
//2. an applicant is eligible for a loan if they have a good credit and do not have a criminal record
//3. an applicant is eligible for a loan if they have a good credit score or high income

let creditScore = 20
let criminalRecord = 1
let incomeEarned = 20000

if (creditScore >= 20) {
  let creditScore = prompt (" Enter credit score");
  if (criminalRecord >=1) {
    alert (" Criminal record not eligible")
    let criminalRecord = prompt (" Enter criminal record");
    if (incomeEarned >= 20000) {
      let incomeEarned = prompt (" Enter income earned");
      }
    }
  alert (" Eligible");
  }
else {
  alert (" Not eligible for the loan");
}