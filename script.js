let menuVisible = false;
//Función que oculta o muestra el menu
function movetoMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function select(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

var texts = [
    "Hi ,I'm Mohit.I am a full stack Developer",
    "I love coding",
    "Passionate about web development",
    "As a developer, I enjoy tackling new challenges,every day and constantly improving my problem-solving skills",
  ];
  
  var typewriter = document.getElementById("typewriter");
  var delay = 2000; // Delay between text changes in milliseconds
  
  function typeText(text, index) {
    if (index < text.length) {
      typewriter.textContent = text.substring(0, index + 1);
      setTimeout(function() {
        typeText(text, index + 1);
      }, 100); // Delay between each character being typed
    } else {
      setTimeout(function() {
        changeText();
      }, delay); // Delay before changing to the next text
    }
  }
  
  function changeText() {
    var randomIndex = Math.floor(Math.random() * texts.length);
    var randomText = texts[randomIndex];
    typeText(randomText, 0);
  }
  
  // Start the typewriter effect
  changeText();