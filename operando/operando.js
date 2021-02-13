
function exec() {

    if(document.getElementById("valor").value != ""){

        for (var i=0;i<document.getElementsByName('calc').length;i++){
            if(document.getElementsByName('calc')[i].checked){
            var radio_b = document.getElementsByName('calc')[i].value;
            }  
        }
        switch (radio_b){
            case 'x!':
                fatorial();
                break;
            
            case 'x2':
                quadrado();
                break;
            
            case "x3":
                cubo();
                break;

            case 'rq':
                raiz();
                break;

            case "seno":
                seno();
                break;

            case "1/x":
                div();
                break;
        }
    } 
    else {
        alert("Digite um valor válido!")
    }

}

function fatorial() {
    var fator = 1;
    var fa = document.getElementById("valor").value;
    for(i=1; i<=fa; i++) {
        fator = fator * i;
    }  
    document.getElementById("result").value = fator;
}

function quadrado() {
    var qd = document.getElementById("valor").value;
    document.getElementById("result").value = Math.pow(qd, 2);
}

function cubo() {
    var cub = document.getElementById("valor").value;
    document.getElementById("result").value = Math.pow(cub, 3);
}

function raiz() {
    var rz = document.getElementById("valor").value;
    document.getElementById("result").value = Math.sqrt(rz);
}

function seno() {
    var sen = document.getElementById("valor").value;
    document.getElementById("result").value = Math.sin(sen);
}

function div() {
    var div = document.getElementById("valor").value;
    document.getElementById("result").value = 1 / div;
}

function verific() {
    var radio = document.getElementsByName("calc");
    var tes = document.getElementById("valor").value;
    if(tes != ""){
        for(var i=0; i<radio.length; i++){
            radio[i].removeAttribute("disabled");
        }
    }else {
        for(var i=0; i<radio.length; i++){
            radio[i].setAttribute("disabled", true);
        }
    }
}


function clean() {
    document.getElementById("valor").value = " ";
    document.getElementById("result").value = " ";
    var radio = document.getElementsByName("calc");
    for(var i=0; i<radio.length; i++){
        radio[i].checked = false;
    }
}