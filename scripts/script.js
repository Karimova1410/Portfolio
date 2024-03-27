document.addEventListener('DOMContentLoaded', function () {
  var dropdownBtn = document.querySelector('.dropbtn');
  var dropdownContent = document.querySelector('.dropdown-content');

  dropdownBtn.addEventListener('click', function () {
    dropdownContent.classList.toggle('show');
  });

  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
});

var password = "roza";
var loggedIn = false;
var messages = [];

document.getElementById("loginButton").addEventListener("click", function () {
  var passwordInput = document.getElementById("passwordInput").value;
  if (passwordInput === password) {
    loggedIn = true;
    document.getElementById("passwordInput").value = "";
    document.getElementById("loginButton").style.display = "none";
    document.getElementById("auth").style.display = "none";
    document.getElementById("submittedData").style.display = "block";
    displayMessages();
  } else {
    alert("Incorrect password. Please try again.");
  }
});


function displayMessages() {
  var messageList = document.getElementById("messageList");
  messageList.innerHTML = "";
  messages.forEach(function (msg) {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<strong>" + msg.name + ":</strong> " + msg.message;
    messageList.appendChild(listItem);
  });
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  alert("Your message is sended");
  messages.push({ name: name, email: email, message: message });

  if (loggedIn) {
    displayMessages();
  }

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
});

