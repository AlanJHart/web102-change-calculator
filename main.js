// Write your JavaScript here
let dollar = 100;
let dollars = 0;
let quarter = 25;
let quarters = 0;
let dime = 10;
let dimes = 0;
let nickel = 5;
let nickels = 0;
let pennie = 1;
let pennies = 0;

// document.getElementById("calculate-change").addEventListener("click", handleClickEvent());
// const button = document.querySelector('button');


function handleClickEvent() {
let due = document.getElementById("amount-due").value;
let received = document.getElementById("amount-received").value;

let change = 100*(received - due);
console.log(change);
change = change.toFixed();
console.log(change);
dollars = ( change / dollar ) | 0;
console.log(dollars, change);
change = change % dollar;
console.log(change);
quarters = ( change / quarter ) | 0;
console.log(quarters, change);
change = change % quarter;
console.log(change);
dimes = ( change / dime ) | 0;
console.log(dimes, change);
change = change % dime;
console.log(change);
nickels = ( change / nickel ) | 0;
console.log(nickels, change);
change = change % nickel;
console.log(change);
pennies = change;
console.log(pennies, change);

let output = document.createTextNode( dollars + " DOLLARS " );
document.getElementById("dollars-output").appendChild(output);
output = document.createTextNode( quarters +  " QUARTERS ");
document.getElementById("quarters-output").appendChild(output);
output = document.createTextNode( dimes + " DIMES ");
document.getElementById("dimes-output").appendChild(output);
output = document.createTextNode( nickels + " NICKELS ");
document.getElementById("nickels-output").appendChild(output);
output = document.createTextNode( pennies + " PENNIES ");
document.getElementById("pennies-output").appendChild(output);
console.log("d" + dollars + "q" + quarters + "d" + dimes + "n" + nickels + "p" + pennies)
}

let newoutput = document.createTextNode("Change to return to customer is: ");
    document.getElementById("div1").appendChild(newoutput);
