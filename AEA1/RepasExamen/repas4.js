let numUs = parseInt(prompt("Introdueix un número"));
while(isNaN(numUs) || numUs > 20){
    numUs = parseInt(prompt("Introdueix un número menor o igual a 20"));
}
    
if(numUs % 2 ==0 ){
    alert("El número: " + numUs + " és divisible per 2")
}else{
    alert("El número: " + numUs + " no és divisible per 2");
}
