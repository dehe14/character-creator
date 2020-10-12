let itemPanelArrowLeft = document.getElementsByClassName("arrows")[0];
let itemPanelArrowRight = document.getElementsByClassName("arrows")[1];
let manipulationPanelArrowLeft = document.getElementsByClassName("arrows")[2];
let manipulationPanelArrowRight = document.getElementsByClassName("arrows")[3];
let currentRace = document.getElementById("race");
let currentHead = document.getElementById("head");
let currentChest = document.getElementById("chest");
let currentPants = document.getElementById("pants");

const Character = {
  race: [],
  head: [],
  chest: [],
  legs: [],
}

const ItemCount = {
  raceCount:6,
  hairCount:25,
  chestCount:8,
  legsCount:7,
}

let itemList, currentCategory;
let origin = "assets/img/"

//Itterates trough item images and adds them to Character object.

let assignItem = (category, itemCount, characterCategory) => {
  let item;
  for (var i = 0; i < itemCount; i++) {
    item = new Image();
    item.src = origin + category +"/"+ category + (i + 1) + ".png";
    characterCategory.push(item);
  }
}

//Generates an item on page with the function to change the item on the character

let changeCharacter = (itemContainer) => {
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

let createItemContainer = () => {
  let itemContainer;
  itemContainer = document.createElement("div");
  itemContainer.setAttribute('class', 'item');
  itemContainer.addEventListener('click', function() {
    changeCharacter(itemContainer);
});
  return itemContainer;
}

let generateItems = (characterCategory) => {
  itemList.innerHTML = "";
  for (var i = 0; i < characterCategory.length; i++) {
    let itemContainer = createItemContainer();
    itemList.appendChild(itemContainer);
    itemContainer.appendChild(characterCategory[i]);
  }
}

let displayItems = () => {
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


itemPanelArrowLeft.addEventListener('click', () => {
  switchCategory("left");
  displayItems();

});

itemPanelArrowRight.addEventListener('click', () => {
  switchCategory("right");
  displayItems();
});


// Checks the direction of the clicked arrow and goes to the next

let switchCategory = (direction) => {
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

let main = () =>{
  assignItem("race",6,Character.race);
  assignItem("hair",25,Character.head);
  assignItem("chest",8,Character.chest);
  assignItem("pants",7,Character.legs);
  displayItems();
}

window.onload = main();
