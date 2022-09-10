const attackSection = document.getElementById('attack-selector')
const resetSection = document.getElementById('reset')
const buttonPet = document.getElementById('button-pet')
const buttonFire = document.getElementById('button-fire')
const buttonWater = document.getElementById('button-water')
const buttonIce = document.getElementById('button-ice')
const buttonReset = document.getElementById('button-reset')

const inputHipodoge = document.getElementById("red")
const inputCapipepo = document.getElementById("green")
const inputRatigueya = document.getElementById("blue")
const spanPlayerPet = document.getElementById("player-pet-name")
let petPickedPlayer

const petSection = document.getElementById('pet-selector')

let petNames = ["Red", "Green", "Blue"]
const spanEnemyPet = document.getElementById("enemy-pet-name")

let attackList = ["🔥", "💧", "❄️"]

const spanPlayerLives = document.getElementById("player-lives")
const spanEnemyLives = document.getElementById("enemy-lives")

const messagesSection = document.getElementById("result")
const messagePlayerAttacks = document.getElementById("player-attacks")
const messageEnemyAttacks = document.getElementById("enemy-attacks")

let petDex = []
let playerAttack
let enemyAttack
let fightResult
let playerLives = 3
let enemyLives = 3

class Pet {
    constructor(name, img, lives){
        this.name = name
        this.img = img
        this.lives = lives
        this.attacks = []
    }
}

let red = new Pet("Red", "./assets/red.png", 3)
let green = new Pet("Green", "./assets/green.png", 3)
let blue = new Pet("Blue", "./assets/blue.png", 3)

red.attacks.push(
    { name: '🔥', id: 'button-fire' },
    { name: '🔥', id: 'button-fire' },
    { name: '🔥', id: 'button-fire' },
    { name: '💧', id: 'button-fire' },
    { name: '❄️', id: 'button-fire' },
)

function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function startGame(){
    attackSection.style.display = 'none'
    resetSection.style.display = 'none'
    buttonPet.addEventListener('click', pickPlayerPet)
    buttonFire.addEventListener('click', fireAttack)
    buttonWater.addEventListener('click', waterAttack)
    buttonIce.addEventListener('click', iceAttack)
    buttonReset.addEventListener('click', resetGame)
}

function pickPlayerPet(){
    if(inputHipodoge.checked){
        petPickedPlayer = "Red"
    } else if(inputCapipepo.checked){
        petPickedPlayer = "Green"
    } else if(inputRatigueya.checked){
        petPickedPlayer = "Blue"
    }
    if(!petPickedPlayer){
        alert("⚠️ Por favor, selecciona a tu mascota ⚠️")
    } else{
        spanPlayerPet.innerHTML = petPickedPlayer
        pickEnemyPet()
    }
}

function pickEnemyPet(){
    petSection.style.display = 'none'
    attackSection.style.display = 'flex'
    resetSection.style.display = 'none'
    spanEnemyPet.innerHTML = petNames[randomNumber(1, 3) - 1]
}

function fireAttack(){
    playerAttack = "🔥"
    enemyRandomAttack()
}

function waterAttack(){
    playerAttack = "💧"
    enemyRandomAttack()
}

function iceAttack(){
    playerAttack = "❄️"
    enemyRandomAttack()
}

function enemyRandomAttack(){
    enemyAttack = attackList[randomNumber(1, 3) - 1]
    fightLogic()
}

function fightLogic(){
    if(playerAttack == enemyAttack){
        fightResult = "➖"
    } else if(playerAttack == "💧" && enemyAttack == "🔥"){
        fightResult = "✅"
        enemyLives--
        spanEnemyLives.innerHTML = enemyLives + "❤️"
    } else if(playerAttack == "🔥" && enemyAttack == "❄️"){
        fightResult = "✅"
        enemyLives--
        spanEnemyLives.innerHTML = enemyLives + "❤️"
    } else if(playerAttack == "❄️" && enemyAttack == "💧"){
        fightResult = "✅"
        enemyLives--
        spanEnemyLives.innerHTML = enemyLives + "❤️"
    } else{
        fightResult = "❌"
        playerLives--
        spanPlayerLives.innerHTML = playerLives + "❤️"
    }
    printResult()
    if(playerLives == 0 || enemyLives == 0){
        if(playerLives == 0){
            endGameMessage(0)
        }
        else{
            endGameMessage(1)
        } 
    }
}

function printResult(){
    let newPlayerAttack = document.createElement('p')
    let newEnemyAttack = document.createElement('p')

    messagesSection.innerHTML = fightResult
    newPlayerAttack.innerHTML = playerAttack
    newEnemyAttack.innerHTML = enemyAttack
    
    messagePlayerAttacks.appendChild(newPlayerAttack)
    messageEnemyAttacks.appendChild(newEnemyAttack)
}

function endGameMessage(status){
    resetSection.style.display = 'block'
    buttonFire.disabled = true
    buttonWater.disabled = true
    buttonIce.disabled = true
    let messagesSection = document.getElementById("result")
    if(status){
        messagesSection.innerHTML = "🥳 ¡Ganaste el combate! 🥳"
    } else{
        messagesSection.innerHTML = "❌ Perdiste el combate ❌"
    }
}

function resetGame(){
    location.reload()
}

window.addEventListener("load", startGame)