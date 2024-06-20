function calcular ()
{
    var valor = parseFloat(document.getElementById('valor').value);
  
    let valorAux150 = valor * 150 / 100;
    let valor150 = valor + valorAux150;
        valor150 += 24;

    let valorAux100 = valor * 100 / 100;
    let valor100 = valor + valorAux100;
        valor100 += 24;

    let valorAux60 = valor * 60 / 100;
    let valor60 = valor + valorAux60;
        valor60 += 24;

    document.getElementById('id1').innerHTML = valor150;
    document.getElementById('id2').innerHTML = valor100;
    document.getElementById('id3').innerHTML = valor60;
    
}
