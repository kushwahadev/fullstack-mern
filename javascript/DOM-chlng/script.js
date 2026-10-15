// example 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "Paragraph is changed!";
  });

// example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let cities = document.getElementById("citiesList");
    cities.firstElementChild.classList.add("highlight");
  });

// exampe 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.color = "brown";
  coffeeType.style.fontSize = "20px";
});

// example 4

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Butter Croissant";
  document.getElementById("shoppingList").appendChild(newItem);
});

// example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

// example 6

document
  .getElementById("clickMeButton")
  .addEventListener("mouseover", function () {
    alert("Mouse is over the button!");
  });

// example 7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You clicked on a tea item: " + event.target.textContent);
  }
});

// example 8

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;

    let feedbackInput = document.getElementById("feedbackDisplay");
    feedbackInput.textContent = "Your feedback: " + feedback;
  });

// example 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent =
    "DOM is fully loaded and parsed!";
});

// example 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let para = document.getElementById("descriptionText");
    para.classList.toggle("highlight");
  });
