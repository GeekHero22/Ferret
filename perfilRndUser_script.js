function seguir() {
    var btn = document.getElementsByClassName("seguir");
    btn[0].innerHTML="Seguir";
}

function seguindo() {
    var btn = document.getElementsByClassName("seguir");
    btn[0].innerHTML="Seguindo";
}

var stateButton = true;
function seguindoUser(el){
    var btn = document.getElementsByClassName("seguir");

    if ( stateButton == false ) {
        btn[0].innerHTML="Seguir";
        stateButton = true;
        el.style.backgroundColor = ('#8b6af7');
} else {
        btn[0].innerHTML="Seguindo";
        stateButton = false;
        el.style.backgroundColor = ('#6c4dcf');
}
}
    