let leftArrowLeft = document.getElementsByClassName("arrows")[0];
let leftArrowRight = document.getElementsByClassName("arrows")[1];
let rightArrowLeft = document.getElementsByClassName("arrows")[2];
let rightArrowRight = document.getElementsByClassName("arrows")[3];
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

let assignHair = () => {
  let hair;
  let key = 1;
  for (var i = 0; i < ItemCount.hairCount; i++) {
    hair = new Image();
    hair.src = origin + "hair/hair" + key + ".png";
    Character.head.push(hair);
    key++;
  }
  console.log(key);
  // return hairCount;
}

let assignChest = () => {
  let chest;
  let key = 1;
  for (var i = 0; i < ItemCount.chestCount; i++) {
    chest = new Image();
    chest.src = origin + "chest/chest" + key + ".png";
    Character.chest.push(chest);
    key++;
  }
}

let assignPants = () => {
  let pants;
  let key = 1;
  for (var i = 0; i < ItemCount.legsCount; i++) {
    pants = new Image();
    pants.src = origin + "pants/pants" + key + ".png";
    Character.legs.push(pants);
    key++;
  }
}

let assignRace = () => {
  let race;
  let key = 1;
  for (var i = 0; i < ItemCount.raceCount; i++) {
    race = new Image();
    race.src = origin + "race/race" + key + ".png";
    Character.race.push(race);
    key++;
  }
}

let changeCharacter = (itemContainer) => {
  currentCategory = document.getElementById("category").textContent;

  if (currentCategory == "Race") {
    currentRace.src = itemContainer.getElementsByTagName("img")[0].src;
  }
  if (currentCategory == "Hair") {
    currentHead.src = itemContainer.getElementsByTagName("img")[0].src;
  }
  if (currentCategory == "Chest") {
    currentChest.src = itemContainer.getElementsByTagName("img")[0].src;
  }
  if (currentCategory == "Pants") {
    currentPants.src = itemContainer.getElementsByTagName("img")[0].src;
  }
}

let createItemContainer = () => {
  let itemContainer;
  itemContainer = document.createElement("div");
  itemContainer.setAttribute('class', 'item');
  itemContainer.addEventListener('click', function() {
    changeCharacter(itemContainer);
});
  return itemContainer;
}

let displayItems = () => {
  currentCategory = document.getElementById("category").textContent;
  itemList = document.getElementsByClassName("item-list")[0];

  if (currentCategory == "Race") {
    itemList.innerHTML = "";
    for (var i = 0; i < Character.race.length; i++) {
      let itemContainer = createItemContainer();
      itemList.appendChild(itemContainer);
      itemContainer.appendChild(Character.race[i]);
    }
  }
  if (currentCategory == "Hair") {
    itemList.innerHTML = "";
    for (var i = 0; i < Character.head.length; i++) {
      let itemContainer = createItemContainer();
      itemList.appendChild(itemContainer);
      itemContainer.appendChild(Character.head[i]);
    }
  }
  if (currentCategory == "Chest") {
    itemList.innerHTML = "";
    for (var i = 0; i < Character.chest.length; i++) {
      let itemContainer = createItemContainer();
      itemList.appendChild(itemContainer);
      itemContainer.appendChild(Character.chest[i]);
    }
  }
  if (currentCategory == "Pants") {
    itemList.innerHTML = "";
    for (var i = 0; i < Character.legs.length; i++) {
      let itemContainer = createItemContainer();
      itemList.appendChild(itemContainer);
      itemContainer.appendChild(Character.legs[i]);
    }
  }
}

assignRace();
assignHair();
assignChest();
assignPants();
displayItems();


leftArrowLeft.addEventListener('click', () => {
switchCategoryReverse();
displayItems();

});

leftArrowRight.addEventListener('click', () => {
switchCategory();
displayItems();
});



let switchCategory = () => {
  currentCategory = document.getElementById("category").textContent;
  if (currentCategory == "Race") {
    document.getElementById("category").textContent = "Hair";
  } else if (currentCategory == "Hair") {
    document.getElementById("category").textContent = "Chest";
  } else if (currentCategory == "Chest") {
    document.getElementById("category").textContent = "Pants";
  }else if (currentCategory == "Pants") {
    document.getElementById("category").textContent = "Race";
  }
}

let switchCategoryReverse = () => {
  currentCategory = document.getElementById("category").textContent;
  if (currentCategory == "Race") {
    document.getElementById("category").textContent = "Pants";
  } else if (currentCategory == "Pants") {
    document.getElementById("category").textContent = "Chest";
  } else if (currentCategory == "Chest") {
    document.getElementById("category").textContent = "Hair";
  }else if (currentCategory == "Hair") {
    document.getElementById("category").textContent = "Race";
  }
}
