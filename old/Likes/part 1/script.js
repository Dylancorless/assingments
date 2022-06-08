var amount = 3;
var amountElement = document.querySelector("#number");

console.log(amountElement);

function add1(){
    amount++;
    amountElement.innerText = amount;
    console.log(amount);
    
}