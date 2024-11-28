document.getElementById("pizza-btn").addEventListener("click", orderPizza);

function orderPizza() {
  var size = prompt("What size do you want?");
  var topping1 = prompt("What is the first topping you want?");
  var topping2 = prompt("What is the second topping you want?");

  var output = `your ${size} pizza with ${topping1} and ${topping2} will be done in 15 minuites!`;

  alert(output);
}

document.getElementById("greet-btn").addEventListener("click", greet);

function greet() {
  let userName = prompt("What is your name?");
  let userCity = prompt("Where do you live?");

  var output = `Welcome ${userName} from ${userCity}!`;

  alert(output);
}

document.getElementById("pet-btn").addEventListener("click", pet);

function pet() {
  let number1 = prompt("give me a number");
  let number2 = prompt("give me another number");
  let animal1 = prompt("now give me an animal");
  let animal2 = prompt("Give me another animal");

  if (number1 != 7 || animal1 != "cat") {
    alert("incorrect");
  } else {
    var output = `You have ${number1} ${animal1}'s and ${number2} ${animal2}'s!`;
    alert(output);
  }
}
