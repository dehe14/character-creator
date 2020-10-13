
itemPanelArrowLeft = document.getElementsByClassName("arrows")[0];
itemPanelArrowRight = document.getElementsByClassName("arrows")[1];
manipulationPanelArrowLeft = document.getElementsByClassName("arrows")[2];
manipulationPanelArrowRight = document.getElementsByClassName("arrows")[3];
currentRace = document.getElementById("race");
currentHead = document.getElementById("head");
currentChest = document.getElementById("chest");
currentPants = document.getElementById("pants");
origin = "assets/img/"

Character = {
  race: [],
  head: [],
  chest: [],
  legs: [],
}

 ItemCount = {
  raceCount:6,
  hairCount:25,
  chestCount:8,
  legsCount:7,
}


function initData() {
var itemPanelArrowLeft, itemPanelArrowRight, manipulationPanelArrowLeft, manipulationPanelArrowRight, currentRace, currentHead, currentChest, currentPants, itemList, currentCategory, origin;
var Character, ItemCount;
}



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

//Changes the item on the character based on the category
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

//Creates a container with an event to switch the curent item on the character to the item clicked
function getNewItemContainer() {
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
    var itemContainer = getNewItemContainer();
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
  initData();
  assignItem("race",6,Character.race);
  assignItem("hair",25,Character.head);
  assignItem("chest",8,Character.chest);
  assignItem("pants",7,Character.legs);
  displayItems();
}
window.onload = main();
