 let xp=0;
 let health=100;
 let gold= 50;
 let currentWeapon=0;
 let fighting;
 let monterHealth;
 let inventory=["stick", "dagger", "sword"];
 
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("text");
const xpText = document.querySelector("xpText");
const halthText = document.querySelector("healthText");
const goldText=document.querySelector("goldText");
const monsterStats=document.querySelector("monsterStats");
const monsterNameText= document.querySelector("monsterNameText");
const monsterHealthText=document.querySelector("monsterHealthText");

const location = [
    {
        name:"town square",
        "button text": [ "Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: 'You are in the town square. You see a sign that says "Store". '
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square" ],
        "button functions":[buyHealth, buyWeapon, goTown],
        text:"You enter the store."
    }

]
//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick= fightDragon;

//creating function
function update(location){

button1.innerText=location["button text"][0];
button2.innerText=location["button text"][1];
button3.innerText=location["button text"][2];
button1.onclick=location["button functions"][0];
button2.onclick=location["button functions"][1];
button3.onclick=location["button functions"][2];
const text = document.querySelector("#text");
text.innerText=location["text"];

}

function goTown(){
 update(location[0]);

}

function goStore(){
 update(location[1]);
}

function goCave(){
button1.innerText="Fight slime"
button2.innerText="Fight fanged beast"
button3.innerText="Go to town square"
button1.onclick=buyHealth;
button2.onclick=buyWeapon;
button3.onclick=goTown;
const text = document.querySelector("#text");
text.innerText="You enter the cave. You see some monsters.";
}

function fightDragon(){
button1.innerText="Attack"
button2.innerText="Fight fanged beast"
button3.innerText="Go to town square"
button1.onclick=buyHealth;
button2.onclick=buyWeapon;
button3.onclick=goTown;
const text = document.querySelector("#text");
text.innerText="You enter the cave. You see some monsters.";
}

function buyHealth(){

}




function buyWeapon(){

}