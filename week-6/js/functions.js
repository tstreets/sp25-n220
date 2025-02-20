function letsGo() {
  console.log("FUNction Time!");
}

letsGo();

function calculateTotal(itemPrice, taxRate = 0.07, discountRate = 0.1) {
  const groupsOfTwenty = Math.floor(itemPrice / 20);

  let discount;
  switch (groupsOfTwenty) {
    case 0:
      discount = 0;
      break;
    case 1:
      discount = discountRate * 0.5;
      break;
    case 2:
      discount = discountRate;
      break;
    case 3:
      discount = discountRate * 2;
      break;
    default:
      discount = discountRate * 4;
  }

  return (itemPrice * (1 + taxRate) * (1 - discount)).toFixed(2);

  //   if (itemPrice > 100) {
  //     return itemPrice * (1 + taxRate) * (1 - discountRate * 2);
  //   } else if (itemPrice > 80) {
  //     return itemPrice * (1 + taxRate) * (1 - discountRate);
  //   } else if (itemPrice > 60) {
  //     return itemPrice * (1 + taxRate) * (1 - discountRate);
  //   } else if (itemPrice > 40) {
  //     return itemPrice * (1 + taxRate) * (1 - discountRate);
  //   } else if (itemPrice > 20) {
  //     return itemPrice * (1 + taxRate) * (1 - discountRate);
  //   } else {
  //     return itemPrice * (1 + taxRate);
  //   }
}

console.log("Kidney = $20, Tax Rate = 40%:", calculateTotal(20, 0.4));

const items = [10, 20, 20, 50];

function showItems() {
  const newSection = document.createElement("section");
  newSection.innerHTML = "<h4>Items</h4>";

  let total = 0;
  for (let i = 0; i < items.length; i++) {
    newSection.innerHTML += "<p>$" + items[i] + "</p>";
    total += items[i];
  }

  newSection.innerHTML += "<hr />";

  newSection.innerHTML += "<p>$" + calculateTotal(total, 0.5) + "</p>";

  document.body.appendChild(newSection);
}

showItems();
