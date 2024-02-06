
const buttons = document.getElementsByClassName("button")

let arrayButtons = Array.from(buttons)

let offScreen = document.getElementById("offScreen")

let onScreen = document.getElementById("indexContent").style.display ="none"

const powerBtn = document.getElementsByClassName("onBtn")

    



//mapeado el array de botones de tal forma que podamos añadir o remover clasesara dar lugar al evento "eleccion de canal"
arrayButtons.map(item => {
        item.addEventListener("click", (evento) => {
            offScreen.classList.remove(offScreen.classList[offScreen.classList.length - 1]) //Removemos clase anterior para no acumular registro de canales clickados
            offScreen.classList.add("Channel" + evento.target.id.slice(-1))
        })
    }
)