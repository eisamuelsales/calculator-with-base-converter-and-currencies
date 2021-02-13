
function exec() {

    if(document.getElementById("valor").value && document.getElementById("valor2").value != ""){
        var select = document.getElementById("select");
        var itemSelecionado = select.options[select.selectedIndex].value;
        console.log(itemSelecionado);
        
        switch (itemSelecionado){
            case 'mais':
                soma();
                break;
            
            case 'menos':
                subtracao();
                break;
            
            case "mult":
                mult();
                break;

            case 'div':
                div();
                break;

            case "resto":
                resto();
                break;

            case "":
                vazio();
                break;
        }

    }else if(document.getElementById("valor2").value == ""){
        alert("Digite algum valor no campo: Segundo Valor")

    }else{
        alert("Digite algum valor no campo: Primeiro Valor")
    }

}

function soma() {
    let v1 = document.getElementById("valor").value;
    let v2 = document.getElementById("valor2").value;
    let result = Number(v1) + Number(v2)
    document.getElementById("result").value = result;

}

function subtracao() {
    let v1 = document.getElementById("valor").value;
    let v2 = document.getElementById("valor2").value;
    let result = Number(v1) - Number(v2)
    document.getElementById("result").value = result;
}

function mult() {
    let v1 = document.getElementById("valor").value;
    let v2 = document.getElementById("valor2").value;
    let result = Number(v1) * Number(v2)
    document.getElementById("result").value = result;
}

function div() {
    let v1 = document.getElementById("valor").value;
    let v2 = document.getElementById("valor2").value;
    let result = Number(v1) / Number(v2)
    document.getElementById("result").value = result;
}

function resto() {
    let v1 = document.getElementById("valor").value;
    let v2 = document.getElementById("valor2").value;
    let result = Number(v1) % Number(v2)
    document.getElementById("result").value = result;
}

function vazio() {
    alert("Selecione alguma operação!")
}

function verific() {
    let val = document.getElementById("valor").value;
    if(val != ""){
        document.getElementById("valor2").removeAttribute("disabled")
    } else {
        document.getElementById("valor2").setAttribute("disabled", true)
    }
}


function clean() {
    document.getElementById("valor").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("result").value = "";
    document.getElementById("select").value = "";
}