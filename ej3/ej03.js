/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/
function showRandomDigit() {
  try{
    const randomDigit = Math.floor(Math.random() * 10);
    const display = document.getElementById("displayLED"); 
    display.innerHTML = randomDigit;
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
        document.getElementById("seg-c").style.color = "#030303";
        document.getElementById("seg-f").style.color = "#030303";;
        break;
      case 3:
        document.getElementById("seg-e").style.color = "#030303";
        document.getElementById("seg-f").style.color = "#030303";
        break;
      case 4:
        document.getElementById("seg-a").style.color = "#030303"; 
        document.getElementById("seg-d").style.color = "#030303";
        document.getElementById("seg-e").style.color = "#030303";
        break;
      case 5:
        document.getElementById("seg-b").style.color = "#030303";
        document.getElementById("seg-e").style.color = "#030303";
        break;  
      case 6: 
        document.getElementById("seg-b").style.color = "#030303";
        break;
      case 7: 
        document.getElementById("seg-d").style.color = "#030303";
        document.getElementById("seg-e").style.color = "#030303";
        document.getElementById("seg-f").style.color = "#030303";
        document.getElementById("seg-g").style.color = "#030303";
        break;  
      case 8:
        break;  
      case 9:
        document.getElementById("seg-e").style.color = "#030303";
        break; 
    }
    
  }catch(error){
    console.error("Error al mostrar el dígito:", error);    
  }
}