function startGame(){
    let buttonPet = document.getElementById('button-pet')
    buttonPet.addEventListener('click', pickPlayerPet)
}

function pickPlayerPet(){
    let inputHipodoge = document.getElementById("hipodoge").checked
    let inputCapipepo = document.getElementById("capipepo").checked
    let inputRatigueya = document.getElementById("ratigueya").checked
    let spanPlayerPet = document.getElementById("player-pet-name")
    let petPicked = ""
    if(inputHipodoge){
        petPicked = "Hipodoge"
    } else if(inputCapipepo){
        petPicked = "Capipepo"
    } else if(inputRatigueya){
        petPicked = "Ratigueya"
    }
    if(!petPicked){
        alert("⚠️ Por favor, selecciona a tu mascota ⚠️")
    } else{
        //alert("Haz seleccionado a " + petPicked)
        spanPlayerPet.innerHTML = petPicked
    }
}

window.addEventListener("load", startGame)