const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  const bill = Number(billInput.value);

  const tipPercent = Number(tipInput.value) / 100;

  const tipAmount = bill * tipPercent;

  const total = tipAmount + bill;

  console.log(total);

  const perPersonTotal = total / numberOfPeople;

  console.log(perPersonTotal);

  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

const increasePeople = () => {
  numberOfPeople += 1;

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill()
};

const decreasePeople = () => {

    if(numberOfPeople <= 1){
        alert("hey! you cannot have less than one person")
        return
    }
    numberOfPeople -= 1

    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
}
