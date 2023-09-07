function calculatrice(){
    let un=document.querySelector(".one");
let deux=document.querySelector(".three");
let trois=document.querySelector(".three");
let quatre=document.querySelector(".four");
let cinq=document.querySelector(".five");
let sixNumber=document.querySelector(".six");
let sept=document.querySelector(".seven");
let huit=document.querySelector(".eight");
let neuf=document.querySelector(".nine");
let zeroNumber=document.querySelector(".zero");
let plusOperator=document.querySelector(".plus");
let minusOperator=document.querySelector(".minus");
let multOperator=document.querySelector(".mult");
let divisionOperator=document.querySelector(".division");
let point=document.querySelector(".comma");
let effacer=document.querySelector(".reset");
let egal=document.querySelector(".equal")

//fonction qui permet de calculer
function calcul(){
let a=document.getElementById("output").value;
let b=eval(a);
document.getElementById("output").value=b;
}
//fonction qui permet d afficher a l ecran
function afficher(valeur){
document.getElementById("output").value+=valeur;
}

//fonction pour effacer
function efface(){
document.getElementById("output").value="";
}



un.addEventListener('click',(e)=>afficher(un.textContent));
deux.addEventListener('click',(e)=>afficher(deux.textContent));
trois.addEventListener('click',(e)=>afficher(trois.textContent));
quatre.addEventListener('click',(e)=>afficher(quatre.textContent));
cinq.addEventListener('click',(e)=>afficher(cinq.textContent));
sixNumber.addEventListener('click',(e)=>afficher(sixNumber.textContent));
sept.addEventListener('click',(e)=>afficher(sept.textContent));
huit.addEventListener('click',(e)=>afficher(huit.textContent));
neuf.addEventListener('click',(e)=>afficher(neuf.textContent));
zeroNumber.addEventListener('click',(e)=>afficher(zeroNumber.textContent));
plusOperator.addEventListener('click',(e)=>afficher(plusOperator.textContent));
minusOperator.addEventListener('click',(e)=>afficher(minusOperator.textContent));
multOperator.addEventListener('click',(e)=>afficher(multOperator.textContent));
divisionOperator.addEventListener('click',(e)=>afficher(divisionOperator.textContent));
point.addEventListener('click',(e)=>afficher(point.textContent));
effacer.addEventListener('click',(e)=>efface());
egal.addEventListener('click',(e)=>calcul());

}


calculatrice();
