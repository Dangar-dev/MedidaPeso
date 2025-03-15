

function Calcular(){

    let peso=document.getElementById("ca1").value;
    let altu=document.getElementById("ca2").value;
    let sexo=document.getElementById("gen1");
    let pesoideal=0, emagrecer=0, imc=0;

    
    if (peso.trim() === "" || altu.trim() === "") {
        alert("Por favor, preencha todos os campos antes de calcular.");
        return;
    }   
    if(isNaN(peso))
    {
        alert("Digite somente valores numéricos para fazer o calculo")
        document.getElementById("ca1").value="";
        document.getElementById("ca1").focus();
    }
    else if(isNaN(altu))
        {
            alert("Digite somente valores numéricos para fazer o calculo")
            document.getElementById("ca2").value="";
            document.getElementById("ca2").focus();
        }
    else 
    {
        peso=parseFloat(peso);
        altu=parseFloat(altu);
        imc=peso.toFixed(1)/Math.pow(altu,2);
        if (sexo.checked==true)
            pesoideal=54.695 + ((altu -1.524)*53.5433);
         else    
           pesoideal=62.2328 + ((altu -1.6002)*53.5433);
           
        pesoideal=pesoideal.toFixed(1);
        
        
        document.getElementById("res1").value=pesoideal; 

    emagrecer = peso-pesoideal;
    emagrecer = emagrecer.toFixed(1);
    if(emagrecer>0)
        document.getElementById("res2").value="Você precisa emagrecer" +"  " + emagrecer +"Kg";
    else if(emagrecer<0)
        document.getElementById("res2").value="Você precisa engordar"+" "+(emagrecer*-1) +"Kg";
    else
     document.getElementById("res2").value="Parabéns, peso ideal! "
    }    
    
}

function Limpar(){

    document.getElementById("ca1").value = ""; 
    document.getElementById("ca2").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";
}