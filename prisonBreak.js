let currentNum = Math.floor(Math.random()*10) + 1;

    const ranNum = (num, currentNum) => {
        
        while (num != currentNum)
    console.log(ranNum())}
    
    console.log(currentNum);

let currentNum1 = Math.floor(Math.random()*10) + 1;

    const ranNum1 = (num1, currentNum1) => {
        
        while (num1 != currentNum1)
    console.log(ranNum1())}
    
    console.log(currentNum1);

let rogueItem = "Screwdriver"  
let averageItem = "Pristine Krugerrand"  

const selectAverage = () => {

    alert (`You use the ${averageItem} to bribe the guard for your freedom`)
    alert ("The bribe was successful")
    alert ("To your surprise, the guard is an avid coin collector")
    alert ("They share photos of their collection and how long they have searched for a Pristine Kugerrand")
    alert ("They agree to escort you out of the prison in exchange for your Pristine Krugerrand")
    let finalDecision = prompt("Are you sure you want to give up your Pristine Krugerrand? [Yes/No]")
    if (finalDecision == "Yes" || finalDecision == "yes") {
    alert ("Congratulations, you've regained your freedom")
    startGame()}
    else if (finalDecision == "No" || finalDecision == "no") {
        alert ("You're returned to your cell to await your execution")
        alert ("Game Over!")
    startGame()}
        else{
        alert("Please choose a valid option")
        selectAverage()
    }
}
const selectRogue = () => {
    if (currentNum1 = currentNum1 % 2 == 0) {
    alert (`You used the ${rogueItem} to picklock the cell door and managed to sneak past everyone`)
    alert ("Congratulations, you've regained your freedom")
    startGame()}
else {
    alert (`You try to pick the lock with ${rogueItem}`)
    alert (`Unfortunately, your ${rogueItem} broke after getting jammed in the lock`)
    alert ("You failed to escape from prison and are dragged away screaming to meet your untimely demise")
    alert ("Game Over!")
    startGame()
}
}

const cellDoor1 = () => {
    let playerEndChoice = prompt ("Kill or Sneak Past")   
if (playerEndChoice == "Kill" || playerEndChoice == "kill") {
        alert ("So, you've chosen to kill the guard, how do you plan on doing this?")
    let killMethod = prompt ("Choke hold, wrestle the gun off the guard or slit their jugular with broken glass?[Choke, Gun or Glass]")
    alert ("Congratulations, you have successfully regained your freedom")
    startGame()}
else if (playerEndChoice == "Sneak Past" || playerEndChoice == "sneak past") {
    alert("Congratulations, you've regained your freedom")
    startGame()}
else {
    alert("Please choose a valid option")
cellDoor1()}
}

const cellDoor = () => {
    if (currentNum = currentNum % 2 == 0) {             // Random number generator to decide whether the door breaks or not.
    alert ("The door is locked and sturdy")
    alert ("You failed to escape from prison and are dragged away screaming to meet your untimely demise")
    alert ("Game Over!")   
    startGame()}
else {
    alert ("The door has come off it's hinges")
    alert ("You sneak down the corridor, being wary of your surroundings")
    alert ("Carelessly, there is only one guard that stands between you and freedom")
    alert ("Will you kill the guard or try to sneak past?")
cellDoor1()}
}

const initialBreak1 = () => {
 
    let playerBegChoice = prompt("Will you Try the cell door or Use starting item? [Cell Door/Item]")
    if (playerBegChoice == "Cell Door" || playerBegChoice == "cell door") {
        alert ("You try the cell door")
    cellDoor()
    }
else if (playerBegChoice == "") {
    alert ("Please choose a valid option")
initialBreak1()}
    else{
    selectAverage()}
}

const initialBreak = () => {
 
let playerBegChoice = prompt("Will you Try the cell door or Use starting item? [Cell Door/Item]")
if (playerBegChoice == "Cell Door" || playerBegChoice == "cell door") {
    alert ("You try the cell door")
cellDoor()
}
else if (playerBegChoice == "") {
    alert ("Please choose a valid option")
initialBreak()
}
    else{
    selectRogue()
    }
}

const startGame = () => {
        alert ("Welcome to Prison <br>")
let playGame = prompt("Are you ready to play [Yes/No]")
if (playGame == "") {
    alert ("Please answer 'yes' or 'no'")
startGame()
        }

else if (playGame == "N" || playGame == "n" || playGame == "No" || playGame == "no") {
            alert ("Suit yourself")
            window.top.close(); // this closes the tab within the browser that the game is open in. This is deliberately put in.
        }

    if (playGame == "Y" || playGame == "y" || playGame == "Yes" || playGame == "yes") {
        alert ("Great, let's go") 
    let charName = prompt ("Enter your name");
        alert (`Welcome ${charName}`)
        alert ("Please select your character")
    let charSelect = prompt ("Average Person [Pristine Krugerrand], Rogue [Screwdriver]")
    if (charSelect != "Average Person" && charSelect != "average person" && charSelect != "Rogue" && charSelect != "rogue") {
    alert("Please choose a valid character")
startGame()}

else if(charSelect == "Rogue" || charSelect == "rogue") {
    alert (`You have chosen ${charSelect}`)
    alert ("You have been arrested under a false accusation and have been sentenced to death")
    alert ("You have to break out of prison before your execution")
    alert ("You're in your prison cell, sat on the chair")
    alert ("You're contemplating how this could have happened")
    alert ("Surely this can't be real")
    alert ("You look around the room for any obvious signs of weakening")
initialBreak()}

else if (charSelect == "Average Person" || charSelect == "average person") {
    alert (`You have chosen ${charSelect}`)
    alert ("You have been arrested under a false accusation and have been sentenced to death")
    alert ("You have to break out of prison before your execution")
    alert ("You're in your prison cell, sat on the chair")
    alert ("You're contemplating how this could have happened")
    alert ("Surely this can't be real")
    alert ("You look around the room for any obvious signs of weakening")
    initialBreak1()}
}
}
