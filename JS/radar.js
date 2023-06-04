const velMax=40;
const velMin=20;
let conduceAuto;
let velocidad;



function Radar(iter) {

        if(conduceAuto == true){
            if(velocidad >= velMin && velocidad <= velMax) {
                // console.log("maneja bien");
                document.write(`Conductor ${iter + 1}: tu velocidad es 
                ${velocidad}Km/h, seguí manejando así y respetanto el trafico<br>`);
            }else if(velocidad <=0) {
                // console.log("ponelo en marcha monstruo");
                document.write(`Conductor ${iter + 1}: tu velocidad es 
                ${velocidad}Km/h, deberías poner en marcha el auto primero.<br>`);
            }else if(velocidad < velMin) {
                // console.log("vas muy lento");
                document.write(`Conductor ${iter + 1}: tu velocidad es 
                ${velocidad}Km/h, el mínimo en ciudad es 20, acelerá un poco<br>`);
            }else {
                // console.log("frená un poco inconciente");
                document.write(`Conductor ${iter + 1}: tu velocidad es 
                ${velocidad}Km/h, pará un poco, podés matar a alguien<br>`);
            }
        }else if(conduceAuto == false) {
            // console.log("Este radar no controla peatones o bicis");
            document.write(`Conductor ${iter + 1}: este radar no controla peatones o bicicletas<br>`);
        }
}
    

function ConsultaUsuario() {

    for(let i = 0; i < 3; i++) {
        let respuesta = prompt("Conduce un vehiculo? Si o No?");
        respuesta = respuesta.toUpperCase();
            if(respuesta == "SI") {
                conduceAuto=true;
                velocidad = prompt("ingrese velocidad(Km/h)");
                velocidad = parseInt(velocidad);
            }else if(respuesta == "NO") {
                conduceAuto = false;
            }else {
                alert("si o no por favor");
                i -= 1;
                conduceAuto = undefined;
            }
        Radar(i);
        }

}

ConsultaUsuario();


	
