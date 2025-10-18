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
        "button text": [ "Go to store", "Go to cave", "Fight dragon"]
    }
]
//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick= fightDragon;

//creating function
function update(location){

}

function goTown(){
button1.innerText="Go to store"
button2.innerText="Go to cave"
button3.innerText="Fight dragon"
button1.onclick=goStore;
button2.onclick=goCave;
button3.onclick=fightDragon;
const text = document.querySelector("#text");
text.innerText='You are in the town square. You see a sign that says "Store."';
}

function goStore(){
button1.innerText="Buy 10 health (10 gold)"
button2.innerText="Buy weapon (30 gold)"
button3.innerText="Go to town square"
button1.onclick=buyHealth;
button2.onclick=buyWeapon;
button3.onclick=goTown;
const text = document.querySelector("#text");
text.innerText="You enter the store.";
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