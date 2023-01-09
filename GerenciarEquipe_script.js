var button = document.getElementById('btn-div');

button.addEventListener("click", function() {

var container = document.getElementById('container');

if(container.style.display === "none"){
    container.style.display = "block";
} else {
    container.style.display = "none";
}
});

var divs = [

     document.getElementById('container')
];

divs.forEach(x => x.style.display = "none"); //iniciar todos escondidos

divs.forEach(x => x.style.display = "none");

function ativar(posicao){      
    if (divs[posicao].style.display == "none"){ 
      divs.forEach(x => x.style.display = "none"); //esconde todos os outros
      divs[posicao].style.display = "block"; //mostra este
    }
    else {
      divs[posicao].style.display = "none";
    }
  }