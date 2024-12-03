//bussines name genrators

// adjective:
// Crazy, Amazing, Fire

// shopName :
// engine
// food
// Garments

// Another Word:
//  Bros , Limited , Hub

// without array

let adjective = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire",
  };
  let shopName = {
    1: "engine",
    2: "food",
    3: "Garments",
  };
  let anotherWord = {
    1: "Bros",
    2: "Limited",
    3: "Hub",
  };
  
  let ran1 = Math.floor(Math.random() * 3 + 1);
  let ran2 = Math.floor(Math.random() * 3 + 1);
  let ran3 = Math.floor(Math.random() * 3 + 1);
  
  console.log(`${adjective[ran1]} ${shopName[ran2]} ${anotherWord[ran3]}`);
  