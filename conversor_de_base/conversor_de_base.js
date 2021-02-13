
function exec() {

    if(document.getElementById("valor").value != ""){

        for (var i=0;i<document.getElementsByName('calc').length;i++){
            if(document.getElementsByName('calc')[i].checked){
            var radio_b = document.getElementsByName('calc')[i].value;
            }  
        }
        switch (radio_b){
            case 'db':
                dec_bin();
                break;
            
            case 'dh':
                dec_hex();
                break;
            
            case "bd":
                bin_dec();
                break;

            case 'hd':
                hex_dec();
                break;
        }
    } 
    else {
        alert("Digite um valor válido!")
    }

}

function dec_bin() {
    let dec = document.getElementById("valor").value;
    let regra1 = /^[0-9]{1,}$/;
    if(dec.match(regra1)){
        document.getElementById("result").value = parseInt(dec).toString(2);
    }else{
        alert("Por favor, digite um número em decimal!");
    }
}

function dec_hex() {
    let dh = document.getElementById("valor").value;
    let regra2 = /^[0-9]{1,}$/;
    if(dh.match(regra2)){
        document.getElementById("result").value = parseInt(dh).toString(16);
    }else{
        alert("Por favor, digite um número em decimal!");
    }
}

function bin_dec() {
    let bin = document.getElementById("valor").value;
    let regra3 = /^[0-1]{1,}$/;
    if(bin.match(regra3)){
        document.getElementById("result").value = parseInt(bin, 2);
    }else {
        alert("Por favor, digite um número em binário!");
    }
}

function hex_dec() {
    let hex = document.getElementById("valor").value;
    let regra4 = /^[0-9a-f]+$/;
    if(hex.match(regra4)){
        document.getElementById("result").value = parseInt(hex, 16);
    }else {
        alert("Por favor, digite um número em hexadecimal!");
    }
}

function verific() {
    let radio = document.getElementsByName("calc");
    let tes = document.getElementById("valor").value;
    if(tes != ""){
        for(let i=0; i<radio.length; i++){
            radio[i].removeAttribute("disabled");
        }
    }else {
        for(let i=0; i<radio.length; i++){
            radio[i].setAttribute("disabled", true);
        }
    }
}


function clean() {
    document.getElementById("valor").value = " ";
    document.getElementById("result").value = " ";
    let radio = document.getElementsByName("calc");
    for(let i=0; i<radio.length; i++){
        radio[i].checked = false;
    }
}