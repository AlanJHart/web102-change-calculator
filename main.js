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

function handleClickEvent() {
let due = document.getElementById("amount-due").value;
let received = document.getElementById("amount-received").value;
let change = 100*(received - due);
dollars = (change / dollar) | 0;
change = change % dollar;
quarters = (change / quarter) | 0;
change = change % quarter;
dimes = (change / dime) | 0;
change = change % dime;
nickels = (change / nickel) | 0;
change = change % nickel;
pennies = Math.round(change);

let output;
    document.getElementById("dollars-output").innerHTML = dollars;
    document.getElementById("quarters-output").innerHTML = quarters;
    document.getElementById("dimes-output").innerHTML = dimes;
    document.getElementById("nickels-output").innerHTML = nickels;
    document.getElementById("pennies-output").innerHTML = pennies;
}
  