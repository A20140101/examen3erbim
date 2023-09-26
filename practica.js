var usuario = prompt("Coloca tu Nombre");
var correcto = 0;
var incorrecto = 0;
alert("Bienvenido/a al cuestionario sobre las Olimpíadas "+usuario);
var rpta1 = prompt("¿Cuándo se realizará la inauguración de las Olimpiadas?");
if (rpta1=="Viernes 29 de setiembre"){
    correcto = correcto + 1;
    alert("¡Eso es correcto!")
}else{
incorrecto = incorrecto + 1;
 alert("Eso es incorrecto :(")
}
var rpta2 = prompt("¿De qué color es la promoción de 2do de secundaria?");
if (rpta2=="Celeste o Turquesa"){
    correcto = correcto + 1;
    alert("¡Eso es correcto!")
}else{
incorrecto = incorrecto + 1;
 alert("Eso es incorrecto :(")
}
var rpta3 = prompt("¿Cual es el nuevo deporte que se ha incluido este año?");
if (rpta3=="Marcha atlética"){
    correcto = correcto + 1;
    alert("¡Eso es correcto!")
}else{
incorrecto = incorrecto + 1;
 alert("Eso es incorrecto :(")
}
if (correcto>incorrecto){
    document.write("Lo has hecho bien"+usuario)
}
if (correcto<incorrecto){
    document.write("Vuelve a intentarlo"+usuario)
}
if (correcto=incorrecto){
    document.write("Puedes hacerlo mejor"+usuario)
}