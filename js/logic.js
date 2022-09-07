let playerAttack
let enemyAttack

function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function startGame(){
    let buttonPet = document.getElementById('button-pet')
    buttonPet.addEventListener('click', pickPlayerPet)

    let buttonFire = document.getElementById('button-fire')
    buttonFire.addEventListener('click', fireAttack)
    let buttonWater = document.getElementById('button-water')
    buttonWater.addEventListener('click', waterAttack)
    let buttonPlant  = document.getElementById('button-plant')
    buttonPlant.addEventListener('click', plantAttack)
}

function pickPlayerPet(){
    let inputHipodoge = document.getElementById("vohon").checked
    let inputCapipepo = document.getElementById("roslyna").checked
    let inputRatigueya = document.getElementById("woda").checked
    let spanPlayerPet = document.getElementById("player-pet-name")
    let petPickedPlayer
    if(inputHipodoge){
        petPickedPlayer = "Vohon"
    } else if(inputCapipepo){
        petPickedPlayer = "Roslyna"
    } else if(inputRatigueya){
        petPickedPlayer = "Woda"
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
    let petNames = ["Vohon", "Roslyna", "Woda"]
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
    playerAttack = "🌱"
    enemyRandomAttack()
}

function enemyRandomAttack(){
    let attackList = ["🔥", "💧", "🌱"]
    enemyAttack = attackList[randomNumber(1, 3) - 1]
    fightResult()
}

function fightResult(){
    let messagesSection = document.getElementById("messages")
    let paragraph = document.createElement('p')
    paragraph.innerHTML = "Tu mascota atacó con " + playerAttack + ", la mascota del enemigo atacó con " + enemyAttack + ":P"
    messagesSection.appendChild(paragraph)
}

window.addEventListener("load", startGame)