


var itemPanelArrowLeft = document.getElementsByClassName("arrows")[0];
var itemPanelArrowRight = document.getElementsByClassName("arrows")[1];
var manipulationPanelArrowLeft = document.getElementsByClassName("arrows")[2];
var manipulationPanelArrowRight = document.getElementsByClassName("arrows")[3];
var currentRace = document.getElementById("race");
var currentHead = document.getElementById("head");
var currentChest = document.getElementById("chest");
var currentPants = document.getElementById("pants");
var Character = {
  race: [],
  head: [],
  chest: [],
  legs: [],
}

var ItemCount = {
  raceCount:6,
  hairCount:25,
  chestCount:8,
  legsCount:7,
}
var itemList, currentCategory;
var origin = "assets/img/"

itemPanelArrowLeft.addEventListener('click', function() {
  switchCategory("left");
  displayItems();

});

itemPanelArrowRight.addEventListener('click', function() {
  switchCategory("right");
  displayItems();
});

//Itterates trough item images and adds them to Character object.
function assignItem(category, itemCount, characterCategory) {
  var item;
  for (var i = 0; i < itemCount; i++) {
    item = new Image();
    item.src = origin + category +"/"+ category + (i + 1) + ".png";
    characterCategory.push(item);
  }
}

//Generates an item on page with the function to change the item on the character
function changeCharacter(itemContainer) {
  currentCategory = document.getElementById("category").textContent;
  switch (currentCategory) {
    case "Race":
      currentRace.src = itemContainer.getElementsByTagName("img")[0].src;
    break;

    case "Hair":
      currentHead.src = itemContainer.getElementsByTagName("img")[0].src;
    break;

    case "Chest":
      currentChest.src = itemContainer.getElementsByTagName("img")[0].src;
    break;

    case "Pants":
    currentPants.src = itemContainer.getElementsByTagName("img")[0].src;
    break;
  }
};

function createItemContainer() {
  var itemContainer;
  itemContainer = document.createElement("div");
  itemContainer.setAttribute('class', 'item');
  itemContainer.addEventListener('click', function() {
    changeCharacter(itemContainer);
});
  return itemContainer;
}

function generateItems(characterCategory) {
  itemList.innerHTML = "";
  for (var i = 0; i < characterCategory.length; i++) {
    var itemContainer = createItemContainer();
    itemList.appendChild(itemContainer);
    itemContainer.appendChild(characterCategory[i]);
  }
}

function displayItems() {
  currentCategory = document.getElementById("category").textContent;
  itemList = document.getElementsByClassName("item-list")[0];
  switch (currentCategory) {
    case "Race":
      generateItems(Character.race);
      break;

    case "Hair":
      generateItems(Character.head);
      break;

    case "Chest":
      generateItems(Character.chest);
      break;

    case "Pants":
      generateItems(Character.legs);
      break;
  }
}




// Checks the direction of the clicked arrow and goes to the next
function switchCategory(direction) {
  currentCategory = document.getElementById("category").textContent;
  switch (direction,currentCategory) {
    case "left","Race":
      document.getElementById("category").textContent = "Hair";
      break;

    case "left","Hair":
      document.getElementById("category").textContent = "Chest";
      break;

    case "left","Chest":
      document.getElementById("category").textContent = "Pants";
      break;

    case "left","Pants":
      document.getElementById("category").textContent = "Race";
      break;

    case "right","Race":
      document.getElementById("category").textContent = "Pants";
      break;

    case "right","Pants":
      document.getElementById("category").textContent = "Chest";
      break;

    case "right","Chest":
      document.getElementById("category").textContent = "Hair";
      break;

    case "right","Hair":
      document.getElementById("category").textContent = "Race";
      break;

  }
}

//Fills the character categories with the items and displays them wehn the page loads.
function main() {
  assignItem("race",6,Character.race);
  assignItem("hair",25,Character.head);
  assignItem("chest",8,Character.chest);
  assignItem("pants",7,Character.legs);
  displayItems();
}
window.onload = main();
