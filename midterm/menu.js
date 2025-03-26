// Reference variables
const menuRef = document.querySelector("#menu");
const cartRef = document.querySelector("#cart");
const noItemsRef = document.querySelector("#no-items");

// Array variables (data)
const menu = [
  { name: "Hamburger", price: 2.99 },
  { name: "Cheeseburger", price: 3.99 },
  { name: "Cheese Pizza", price: 3.99 },
  { name: "Pepperoni Pizza", price: 4.99 },
  { name: "Sausage Pizza", price: 4.99 },
  { name: "Caesar Salad", price: 3.99 },
  { name: "Fries", price: 1.99 },
  { name: "Onion Rings", price: 2.49 },
  { name: "Shoulder Shrug", price: 0.0 },
];
const cart = [];

const noItemsHtml = noItemsRef.innerHTML;

function checkNoItems() {
  if (cart.length === 0) {
    cartRef.innerHTML += noItemsHtml;
  }
}

function addToCart(e) {
  cart.push({
    name: e.target.dataset.name,
    price: e.target.dataset.price,
    specialRequest: "",
    inStock: true,
  });

  showCartTable();
}

function showCartTable() {
  cartRef.innerHTML =
    "<tr><th>Item Name</th><th>Price</th><th>Special Request</th><th>Actions</th></tr>";

  checkNoItems();

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    total += Number(cartItem.price);

    const newRow = document.createElement("tr");
    newRow.innerHTML += "<td>" + cartItem.name + "</td>";
    newRow.innerHTML += "<td>$" + cartItem.price + "</td>";

    newRow.innerHTML +=
      "<td><textarea data-index='" +
      i +
      "' oninput='updateSpecialRequest(event)'></textarea></td>";

    newRow.innerHTML +=
      "<td><button data-index='" +
      i +
      "' onclick='removeFromCart(event)'>-</button></td>";

    cartRef.appendChild(newRow);
  }

  if (cart.length) {
    cartRef.innerHTML +=
      "<tr><td>Total</td><td colspan='3'>$" + total.toFixed(2) + "</td></tr>";
  }
}

function updateSpecialRequest(e) {
  const index = e.target.dataset.index;
  const value = e.target.value;

  const oldItem = cart[index];

  cart.splice(index, 1, {
    name: oldItem.name,
    price: oldItem.price,
    specialRequest: value,
  });
}

function removeFromCart(e) {
  cart.splice(e.target.dataset.index, 1);

  showCartTable();
}

for (let i = 0; i < menu.length; i++) {
  const currentItem = menu[i];

  const newLi = document.createElement("li");
  const newButton = document.createElement("button");
  newButton.innerText = "+";
  newButton.onclick = addToCart;
  newButton.dataset.name = currentItem.name;
  newButton.dataset.price = currentItem.price;
  newLi.appendChild(newButton);

  const newSpan = document.createElement("span");
  newSpan.innerHTML += currentItem.name;
  newSpan.innerHTML += " ($" + currentItem.price + ")";
  newLi.appendChild(newSpan);

  menuRef.appendChild(newLi);
}
