function displayOutput(message) {
  console.log(message);
}

function showUserName() {
  const input = document.getElementById("nameInput");
  const output = document.getElementById("output");
  const name = input.value.trim();

  if (name) {
    output.textContent = `Hello, ${name}!`;
  } else {
    output.textContent = "Please enter a name.";
  }
}

// Example usage:
// showUserName();
