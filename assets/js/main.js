let arrowLeftButton = document.getElementsByClassName("arrows")[0];
let arrowRightButton = document.getElementsByClassName("arrows")[1];
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

let chest1, chest2, chest3, chest4, chest5, chest6, chest7, chest8;
let hairA1, hairA2, hairA3, hairA4, hairA5, hairA6, hairA7, hairA8;
let hairB1, hairB2, hairB3, hairB4, hairB5, hairB6, hairB7, hairB8;
let hairC1;
let hairD1, hairD2, hairD3, hairD4, hairD5, hairD6, hairD7, hairD8;
let pants1, pants2, pants3, pants4, pants5, pants6, pants7;
let race1, race2, race3, race4, race5, race6;
let itemList, currentCategory;


let assignHair = () => {
  hairA1 = new Image();
  hairA1.src = "assets/img/hair/hair1/hair1-blue.png";
  Character.head.push(hairA1);
  hairA2 = new Image();
  hairA2.src = "assets/img/hair/hair1/hair1-cyan.png";
  Character.head.push(hairA2);
  hairA3 = new Image();
  hairA3.src = "assets/img/hair/hair1/hair1-green.png";
  Character.head.push(hairA3);
  hairA4 = new Image();
  hairA4.src = "assets/img/hair/hair1/hair1-orange.png";
  Character.head.push(hairA4);
  hairA5 = new Image();
  hairA5.src = "assets/img/hair/hair1/hair1-original.png";
  Character.head.push(hairA5);
  hairA6 = new Image();
  hairA6.src = "assets/img/hair/hair1/hair1-purple.png";
  Character.head.push(hairA6);
  hairA7 = new Image();
  hairA7.src = "assets/img/hair/hair1/hair1-red.png";
  Character.head.push(hairA7);
  hairA8 = new Image();
  hairA8.src = "assets/img/hair/hair1/hair1-yellow.png";
  Character.head.push(hairA8);

  hairB1 = new Image();
  hairB1.src = "assets/img/hair/hair2/hair2-cyan.png";
  Character.head.push(hairB1);
  hairB2 = new Image();
  hairB2.src = "assets/img/hair/hair2/hair2-green.png";
  Character.head.push(hairB2);
  hairB3 = new Image();
  hairB3.src = "assets/img/hair/hair2/hair2-orange.png";
  Character.head.push(hairB3);
  hairB4 = new Image();
  hairB4.src = "assets/img/hair/hair2/hair2-original.png";
  Character.head.push(hairB4);
  hairB5 = new Image();
  hairB5.src = "assets/img/hair/hair2/hair2-purple.png";
  Character.head.push(hairB5);
  hairB6 = new Image();
  hairB6.src = "assets/img/hair/hair2/hair2-red.png";
  Character.head.push(hairB6);
  hairB7 = new Image();
  hairB7.src = "assets/img/hair/hair2/hair2-yellow.png";
  Character.head.push(hairB7);
  hairB8 = new Image();
  hairB8.src = "assets/img/hair/hair2/hiar2-blue.png";
  Character.head.push(hairB8);

  hairC1 = new Image();
  hairC1.src = "assets/img/hair/hair3/hair3-trapper.png";
  Character.head.push(hairC1);

  hairD1 = new Image();
  hairD1.src = "assets/img/hair/hair4/hair4-blue.png";
  Character.head.push(hairD1);
  hairD2 = new Image();
  hairD2.src = "assets/img/hair/hair4/hair4-cyan.png";
  Character.head.push(hairD2);
  hairD3 = new Image();
  hairD3.src = "assets/img/hair/hair4/hair4-green.png";
  Character.head.push(hairD3);
  hairD4 = new Image();
  hairD4.src = "assets/img/hair/hair4/hair4-orange.png";
  Character.head.push(hairD4);
  hairD5 = new Image();
  hairD5.src = "assets/img/hair/hair4/hair4-original.png";
  Character.head.push(hairD5);
  hairD6 = new Image();
  hairD6.src = "assets/img/hair/hair4/hair4-purple.png";
  Character.head.push(hairD6);
  hairD7 = new Image();
  hairD7.src = "assets/img/hair/hair4/hair4-red.png";
  Character.head.push(hairD7);
  hairD8 = new Image();
  hairD8.src = "assets/img/hair/hair4/hair4-yellow.png";
  Character.head.push(hairD8);
}

let assignChest = () => {
  chest1 = new Image();
  chest1.src = "assets/img/chest/chest1.png";
  Character.chest.push(chest1);
  chest2 = new Image();
  chest2.src = "assets/img/chest/chest2.png";
  Character.chest.push(chest2);
  chest3 = new Image();
  chest3.src = "assets/img/chest/chest3.png";
  Character.chest.push(chest3);
  chest4 = new Image();
  chest4.src = "assets/img/chest/chest4.png";
  Character.chest.push(chest4);
  chest5 = new Image();
  chest5.src = "assets/img/chest/chest5.png";
  Character.chest.push(chest5);
  chest6 = new Image();
  chest6.src = "assets/img/chest/chest6.png";
  Character.chest.push(chest6);
  chest7 = new Image();
  chest7.src = "assets/img/chest/chest7.png";
  Character.chest.push(chest7);
  chest8 = new Image();
  chest8.src = "assets/img/chest/chest8.png";
  Character.chest.push(chest8);
}

let assignPants = () => {
  pants1 = new Image();
  pants1.src = "assets/img/pants/pants1.png";
  Character.legs.push(pants1);
  pants2 = new Image();
  pants2.src = "assets/img/pants/pants2.png";
  Character.legs.push(pants2);
  pants3 = new Image();
  pants3.src = "assets/img/pants/pants3.png";
  Character.legs.push(pants3);
  pants4 = new Image();
  pants4.src = "assets/img/pants/pants4.png";
  Character.legs.push(pants4);
  pants5 = new Image();
  pants5.src = "assets/img/pants/pants5.png";
  Character.legs.push(pants5);
  pants6 = new Image();
  pants6.src = "assets/img/pants/pants6.png";
  Character.legs.push(pants6);
  pants7 = new Image();
  pants7.src = "assets/img/pants/pants7.png";
  Character.legs.push(pants7);
}

let assignRace = () => {
  race1 = new Image();
  race1.src = "assets/img/race/green.png";
  Character.race.push(race1);
  race2 = new Image();
  race2.src = "assets/img/race/nigga.png";
  Character.race.push(race2);
  race3 = new Image();
  race3.src = "assets/img/race/normal.png";
  Character.race.push(race3);
  race4 = new Image();
  race4.src = "assets/img/race/nuj.png";
  Character.race.push(race4);
  race5 = new Image();
  race5.src = "assets/img/race/something.png";
  Character.race.push(race5);
  race6 = new Image();
  race6.src = "assets/img/race/welldone.png";
  Character.race.push(race6);
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




arrowLeftButton.addEventListener('click', () => {
switchCategoryReverse();
displayItems();

});

arrowRightButton.addEventListener('click', () => {
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
