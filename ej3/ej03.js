/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/
function showRandomDigit() {
  try{
    const randomDigit = Math.floor(Math.random() * 10);
    switch(randomDigit) {
      case 0:
        document.getElementById("seg-a").style.background = "#e0e000";  
        document.getElementById("seg-b").style.background = "#e0e000";
        document.getElementById("seg-c").style.background = "#e0e000";
        document.getElementById("seg-d").style.background = "#e0e000";
        document.getElementById("seg-e").style.background = "#e0e000";
        document.getElementById("seg-f").style.background = "#e0e000";
        document.getElementById("seg-g").style.background = "#030303";
        break;
      case 1:
        document.getElementById("seg-a").style.background = "#030303";
        document.getElementById("seg-d").style.background = "#030303";
        document.getElementById("seg-e").style.background = "#030303";
        document.getElementById("seg-f").style.background = "#030303";
        document.getElementById("seg-g").style.background = "#030303";
        break;
      case 2:
        document.getElementById("seg-a").style.background = "#e0e000";  
        document.getElementById("seg-b").style.background = "#e0e000";
        document.getElementById("seg-c").style.background = "#030303";
        document.getElementById("seg-d").style.background = "#e0e000";
        document.getElementById("seg-e").style.background = "#e0e000";
        document.getElementById("seg-f").style.background = "#030303";
        document.getElementById("seg-g").style.background = "#e0e000";
        break;
      case 3:
        document.getElementById("seg-a").style.background = "#e0e000";  
        document.getElementById("seg-b").style.background = "#e0e000";
        document.getElementById("seg-c").style.background = "#e0e000";
        document.getElementById("seg-d").style.background = "#e0e000";
        document.getElementById("seg-e").style.background = "#030303";
        document.getElementById("seg-f").style.background = "#030303";
        document.getElementById("seg-g").style.background = "#e0e000";
        break;
      case 4:
        document.getElementById("seg-a").style.background = "#030303";  
        document.getElementById("seg-b").style.background = "#e0e000";
        document.getElementById("seg-c").style.background = "#e0e000";
        document.getElementById("seg-d").style.background = "#030303";
        document.getElementById("seg-e").style.background = "#030303";
        document.getElementById("seg-f").style.background = "#e0e000";
        document.getElementById("seg-g").style.background = "#e0e000";
      case 5:
        document.getElementById("seg-a").style.background = "#e0e000";  
        document.getElementById("seg-b").style.background = "#030303";
        document.getElementById("seg-c").style.background = "#e0e000";
        document.getElementById("seg-d").style.background = "#e0e000";
        document.getElementById("seg-e").style.background = "#030303";
        document.getElementById("seg-f").style.background = "#e0e000";
        document.getElementById("seg-g").style.background = "#e0e000";
        break;  
      case 6: 
        document.getElementById("seg-a").style.background = "#e0e000";  
        document.getElementById("seg-b").style.background = "#030303";
        document.getElementById("seg-c").style.background = "#e0e000";
        document.getElementById("seg-d").style.background = "#e0e000";
        document.getElementById("seg-e").style.background = "#e0e000";
        document.getElementById("seg-f").style.background = "#e0e000";
        document.getElementById("seg-g").style.background = "#e0e000";
        break;
      case 7: 
        document.getElementById("seg-a").style.background = "#e0e000";  
        document.getElementById("seg-b").style.background = "#e0e000";
        document.getElementById("seg-c").style.background = "#e0e000";
        document.getElementById("seg-d").style.background = "#030303";
        document.getElementById("seg-e").style.background = "#030303";
        document.getElementById("seg-f").style.background = "#030303";
        document.getElementById("seg-g").style.background = "#030303";
        break;  
      case 8:
        document.getElementById("seg-a").style.background = "#e0e000";  
        document.getElementById("seg-b").style.background = "#e0e000";
        document.getElementById("seg-c").style.background = "#e0e000";
        document.getElementById("seg-d").style.background = "#e0e000";
        document.getElementById("seg-e").style.background = "#e0e000";
        document.getElementById("seg-f").style.background = "#e0e000";
        document.getElementById("seg-g").style.background = "#e0e000";  
      case 9:
        document.getElementById("seg-a").style.background = "#e0e000";  
        document.getElementById("seg-b").style.background = "#e0e000";
        document.getElementById("seg-c").style.background = "#e0e000";
        document.getElementById("seg-d").style.background = "#e0e000";
        document.getElementById("seg-e").style.background = "#030303";
        document.getElementById("seg-f").style.background = "#e0e000";
        document.getElementById("seg-g").style.background = "#e0e000";
        break; 
    }
    
  }catch(error){
    console.error("Error al mostrar el dígito:", error);    
  }
}