let playerAttack
let enemyAttack
let fightResult
let playerLives = 3
let enemyLives = 3

function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function startGame(){
    let attackSection = document.getElementById('attack-selector')
    attackSection.style.display = 'none'
    let resetSection = document.getElementById('reset')
    resetSection.style.display = 'none'

    let buttonPet = document.getElementById('button-pet')
    buttonPet.addEventListener('click', pickPlayerPet)

    let buttonFire = document.getElementById('button-fire')
    buttonFire.addEventListener('click', fireAttack)
    let buttonWater = document.getElementById('button-water')
    buttonWater.addEventListener('click', waterAttack)
    let buttonPlant = document.getElementById('button-plant')
    buttonPlant.addEventListener('click', plantAttack)

    let buttonReset = document.getElementById('button-reset')
    buttonReset.addEventListener('click', resetGame)
}

function pickPlayerPet(){
    let inputHipodoge = document.getElementById("vohon").checked
    let inputCapipepo = document.getElementById("roslyna").checked
    let inputRatigueya = document.getElementById("woda").checked
    let spanPlayerPet = document.getElementById("player-pet-name")
    let petPickedPlayer
    if(inputHipodoge){
        petPickedPlayer = "Red"
    } else if(inputCapipepo){
        petPickedPlayer = "Green"
    } else if(inputRatigueya){
        petPickedPlayer = "Blue"
    }
    if(!petPickedPlayer){
        alert("⚠️ Por favor, selecciona a tu mascota ⚠️")
    } else{
        //alert("Haz seleccionado a " + petPicked)
        spanPlayerPet.innerHTML = petPickedPlayer
        pickEnemyPet()
    }
}

function pickEnemyPet(){
    let petSection = document.getElementById('pet-selector')
    petSection.style.display = 'none'
    let attackSection = document.getElementById('attack-selector')
    attackSection.style.display = 'flex'
    let resetSection = document.getElementById('reset')
    resetSection.style.display = 'none'
    let petNames = ["Red", "Green", "Blue"]
    let spanEnemyPet = document.getElementById("enemy-pet-name")
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

function plantAttack(){
    playerAttack = "❄️"
    enemyRandomAttack()
}

function enemyRandomAttack(){
    let attackList = ["🔥", "💧", "❄️"]
    enemyAttack = attackList[randomNumber(1, 3) - 1]
    fightLogic()
}

function fightLogic(){
    let spanPlayerLives = document.getElementById("player-lives")
    let spanEnemyLives = document.getElementById("enemy-lives")

    if(playerAttack == enemyAttack){
        fightResult = "➖"
        //spanPlayerLives.innerHTML = playerLives
        //spanEnemyLives.innerHTML = enemyLives
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
    let messagesSection = document.getElementById("result")
    let messagePlayerAttacks = document.getElementById("player-attacks")
    let messageEnemyAttacks = document.getElementById("enemy-attacks")

    let newPlayerAttack = document.createElement('p')
    let newEnemyAttack = document.createElement('p')

    messagesSection.innerHTML = fightResult
    newPlayerAttack.innerHTML = playerAttack
    newEnemyAttack.innerHTML = enemyAttack
    
    messagePlayerAttacks.appendChild(newPlayerAttack)
    messageEnemyAttacks.appendChild(newEnemyAttack)
}

function endGameMessage(status){
    let resetSection = document.getElementById('reset')
    resetSection.style.display = 'block'
    let buttonFire = document.getElementById('button-fire')
    let buttonWater = document.getElementById('button-water')
    let buttonPlant = document.getElementById('button-plant')
    buttonFire.disabled = true
    buttonWater.disabled = true
    buttonPlant.disabled = true
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