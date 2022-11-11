/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */
let firstName,age,drink = "Wein";
firstName = prompt("Geben sie einen Namen ein:");
age = parseInt(prompt("Geben sie das alter ein:"));
drink = "Wein";

// if (age <=6) {
//     drink = "Milch";
// } else if (age ==6 && age <=12 ){
//     drink = "Saft";
// } else if(age ==13 && age <=18){
//     drink = "Cola";
// }
// console.log(firstName+" trinkt "+drink)

switch (true) {
    case (age <6):
        console.log(firstName+" trinkt Milch");
        break;
    case (age >=6 && age <13):
        console.log(firstName+" trinkt Saft");
        break;
    case (age >=13 && age <18):
        console.log(firstName+ " trinkt Cola");
        break;   
    default:
        console.log(firstName+" trinkt Wein");
        break;
}