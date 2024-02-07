
const buttons = document.getElementsByClassName("button")

let arrayButtons = Array.from(buttons)

let offScreen = document.getElementById("offScreen")

let indexContent = document.  getElementById("indexContent" ) //buscar como hanilitar el display mas adelante mediante funcion

const powerBtn = document.getElementById("onOff")

const indexFather = document.getElementsByClassName("selectedChannel")

//ocultamos de salida la pantalla de encendido, de tal forma que solo se harávisible cuando se presione en el Powerbtn

   indexContent.style.display= "none"

            powerBtn.addEventListener("click", (e) => {
            
                //añadimos toggle a las variables de pantalla encendida y apagada y se genera la clase "fantasma" Welcome que nos servirá para controlar eventos posteriores
                offScreen.classList.toggle("Welcome")
                indexContent.classList.toggle("Welcome")
                
                if (offScreen.classList.contains("Welcome")) {
                    indexContent.style.display = "flex"
                arrayButtons.map(item => {
            item.addEventListener("click", (evento) => {
            offScreen.classList.remove(offScreen.classList[offScreen.classList.length - 1]) //Removemos clase anterior para no acumular registro de canales clickados
            offScreen.classList.add("Channel" + evento.target.id.slice(-1))
            indexContent.style.display = "none" }) })   

                
                } else {
                    indexContent.style.display = "none"
                }
            })
//mapeado el array de botones de tal forma que podamos añadir o remover clases hara dar lugar al evento "eleccion de canal"
            
          
            
                    

            