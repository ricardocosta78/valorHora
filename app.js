function calcular(){
    var vencimento = document.getElementById('vencimento').value;
    var horas = document.getElementById('horas').value;

    var resultado = ((vencimento *12)/(horas*52)).toFixed(4)

    document.getElementById('valor').value=resultado
    
}

function apagar(){
    document.getElementById('valor').value = "";
    document.getElementById('vencimento').value = "";
    document.getElementById('horas').value = "";
}