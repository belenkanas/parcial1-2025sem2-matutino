/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/
function showRandomDigit() {
 
}

 try{
    const randomDigit = Math.floor(Math.random() * 10);
    const display = document.getElementById("displayLED"); 
    display.textContent = randomDigit;
    switch(randomDigit) {
      case 0:
        document.getElementById("seg-g").style.color = "#030303";
        break;
      case 1:
        document.getElementById("seg-a").style.color = "#030303";
        document.getElementById("seg-d").style.color = "#030303";
        document.getElementById("seg-e").style.color = "#030303";
        document.getElementById("seg-f").style.color = "#030303";
        document.getElementById("seg-g").style.color = "#030303";
        break;
      case 2:
        document.getElementById("seg-a").style.color = "red";
        document.getElementById("seg-b").style.color = "red";
        document.getElementById("seg-d").style.color = "red";
        document.getElementById("seg-e").style.color = "red";
        document.getElementById("seg-g").style.color = "red";
        break;
      case 3:
        document.getElementById("seg-a").style.color = "red";
        document.getElementById("seg-b").style.color = "red";
        document.getElementById("seg-c").style.color = "red";
        document.getElementById("seg-d").style.color = "red";
        document.getElementById("seg-g").style.color = "red";
        break;
    }
  }
  catch(error){
  console.error("¡No se ha implementado la función showRandomDigit! Ver archivo ej03.js.");
  }