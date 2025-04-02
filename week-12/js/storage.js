// Reference variables
const loginFormRef = document.querySelector("#login");
const usernameRef = document.querySelector("#username");
const passwordRef = document.querySelector("#password");

function loginUser(e) {
  e.preventDefault();

  const usernameValue = usernameRef.value;
  const passwordValue = passwordRef.value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  let userFound = false;
  let correctPassword = false;

  for (let i = 0; i < users.length; i++) {
    const currentUser = users[i];
    if (currentUser.username === usernameValue) {
      userFound = true;

      if (currentUser.password === passwordValue) {
        correctPassword = true;
      }
    }
  }

  //  You're not on the list
  if (userFound === false) {
    // make user
    users.push({ username: usernameValue, password: passwordValue });
    localStorage.setItem("users", JSON.stringify(users));
  }
  // You put the wrong password
  else if (correctPassword === false) {
    alert("Incorrect password");
  }
  // You are logged in
  else {
    alert("Successfully logged in");
  }

  console.log(users);
}

loginFormRef.onsubmit = loginUser;
