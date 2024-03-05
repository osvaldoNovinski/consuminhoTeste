var kmAnte = 0;
var kmAtual = 0;
var combustivel = 0;
var labelKm = "0 Km por litro";

var result = 0;


 function calcMedia () {

   kmAnte = document.getElementById("kmAnt").value;
   kmAtual = document.getElementById("kmAtual").value
   combustivel = document.getElementById("qtdComb").value

   result = (kmAtual-kmAnte)/combustivel;
   labelKm = result+" Km por litro"

   document.getElementById("result").innerHTML = labelKm;

}

