
function exec() {
    let valor = document.getElementById("valor").value;
    let cot_u = document.getElementById("cot_us").value;
    let cot_eu = document.getElementById("cot_euro").value;
    if(valor && cot_u && cot_eu != ""){
        alert("Por favor preencha só uma cotação e tente novamente!")
    }else{
        if(valor.value != ""){
            for (var i=0;i<document.getElementsByName('calc').length;i++){
                if(document.getElementsByName('calc')[i].checked){
                var radio_b = document.getElementsByName('calc')[i].value;
                }  
            }
            switch (radio_b){
                case 'ru':
                    real_dol();
                    break;
                
                case 're':
                    real_eur();
                    break;
                
                case "ur":
                    dol_real();
                    break;

                case 'er':
                    eur_real();
                    break;
            }
        } 
        else {
            alert("Digite um valor válido!")
        }
    }

}

function real_dol() {
    let val_r = document.getElementById("valor").value;
    let val_d = document.getElementById("cot_us").value;
    let resultado = val_r / val_d;
    document.getElementById("result").value = resultado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function real_eur() {
    let val_re = document.getElementById("valor").value;
    let val_cot_eu = document.getElementById("cot_euro").value;
    let resultado_real_eur = val_re / val_cot_eu;
    document.getElementById("result").value = resultado_real_eur.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function dol_real() {
    let val_dol = document.getElementById("valor").value;
    let val_cot_dl = document.getElementById("cot_us").value;
    let resultado_dol_real = val_dol * val_cot_dl;
    document.getElementById("result").value = resultado_dol_real.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function eur_real() {
    let val_eur = document.getElementById("valor").value;
    let val_cot_eur = document.getElementById("cot_euro").value;
    let resultado_eur_real = val_eur * val_cot_eur;
    document.getElementById("result").value = resultado_eur_real.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
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
    document.getElementById("valor").value = "";
    document.getElementById("cot_euro").value = "";
    document.getElementById("cot_us").value = "";
    document.getElementById("result").value = "";
    var radio = document.getElementsByName("calc");
    for(var i=0; i<radio.length; i++){
        radio[i].checked = false;
    }
}