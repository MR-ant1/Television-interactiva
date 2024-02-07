const buttons = document.getElementsByClassName("button")

let arrayButtons = Array.from(buttons)

let offScreen = document.getElementById("offScreen")

let indexContent = document. getElementById("indexContent" ) //buscar como hanilitar el display mas adelante mediante funcion

const powerBtn = document.getElementById("onOff")

const selectedChannel = document.getElementsByClassName("selectedChannel")

const clock = document.querySelector(".clockAndDate")

let led = document.getElementsByClassName("led")








let Ontv = false
//ocultamos de salida la pantalla de encendido, de tal forma que solo se harávisible cuando se presione en el Powerbtn

   indexContent.style.display= "none"

            powerBtn.addEventListener("click", (e) => {
            
                //añadimos toggle a las variables de pantalla encendida y apagada y se genera la clase "fantasma" Welcome que nos servirá para controlar eventos posteriores
               /* offScreen.classList.toggle("Welcome")
                indexContent.classList.toggle("Welcome")*/
                Ontv = !Ontv

                //(offScreen.classList.contains("Welcome")){
                if  (Ontv===true) {
                    indexContent.style.display = "flex"
                //mapeado el array de botones de tal forma que podamos añadir o remover clases hara dar lugar al evento "eleccion de canal"
                    arrayButtons.map(item =>{                                                                                                                           
                    item.addEventListener("click", (evento) => {
                    offScreen.classList.remove(offScreen.classList[offScreen.classList.length - 1])
                     //Removemos clase anterior para no acumular registro de canales clickados
                    offScreen.classList.add("Channel" + evento.target.id.slice(-1)) 
                    indexContent.style.display = "none"
                    channelNumber.textContent = evento.target.id.slice(-1);
                    setTimeout(() => {
                    channelNumber.textContent = "";
                    }, 1000) }) }) 
                     } 
                     else {
                        indexContent.style.display = "none"
                        offScreen.classList.add("portada")
                    }
                    })
          
                   
function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0')
    const segundos = ahora.getSeconds().toString().padStart(2, '0')

    const horaActual = `${horas}:${minutos}:${segundos}`
    clock.textContent = horaActual; // Mostrar la hora

    // Mostrar la fecha
    const fecha = ahora.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    clock.textContent += ` | ${fecha}`}
    
    // Actualizar el reloj cada segundo
    setInterval(actualizarReloj, 1000);



    if (Ontv=true) {
        
    }