function adicionar() {

    
    var ing = document.getElementById("add").value;
    var lista  = document.getElementById("lista").innerHTML;
    lista = lista +"<li>"+ing+"</li>";
    
    document.getElementById("lista").innerHTML = lista;

    document.getElementById("add").onclick = function() {
         if(!ing) {
        document.getElementsByTagName("button").style.display = none;
        return false;
    } else{
        return true;
    }
    }
    }
  