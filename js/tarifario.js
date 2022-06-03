debugger

let confirmacion = prompt ("A++ Voces Profesionales \n ¡Bienvenido! \n Ponemos el mejor sonido en tu publicidad, tu obra o tu evento \n Para contratar nuestros servicios, escriba OK")

while (confirmacion != "OK"){
    confirmacion = prompt ("Para contratar nuestros servicios, debe escribir OK")
}

let servicio = prompt ("Elija uno de nuestros servicios, escribiendo el valor numérico \n 1) Voz en off para Radio/TV/Redes \n 2) Locución para eventos")

switch (servicio){
    case "1":
        console.log ("Voz en off")
        let minutos = prompt("¿De cuántos minutos es la grabación?")
        console.log (minutos, " minutos")        
        calcular (minutos, tarifaOff)
        alert("¡Muchas Gracias! El servicio y la tarifa se mostrarán a través de la consola.")
        break
    case "2":
        console.log ("Locución para eventos")
        let horas = prompt("¿De cuántas horas es el evento?")
        console.log (horas, " horas")
        calcular (horas, tarifaEvento)
        alert("¡Muchas Gracias! El servicio y la tarifa se mostrarán a través de la consola.")
        break
    default:
        console.error("La opción ingresada no es válida")
        break
}