// write your JS code here

let num = 0;

 function minu() {
num--;
let price = 5.99;
 	document.querySelector("#btn").innerHTML = `<p>Total price is</p> ${num * price - price}`;
 	document.querySelector(".number").innerHTML = `${num}`;
	
}



function plus() {
num++;
let price = 5.99;
	document.querySelector("#btn").innerHTML = `<p>Total price is</p> ${num * price}`;
	document.querySelector(".number").innerHTML = `${num}`;
}

