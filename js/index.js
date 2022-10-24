/*
*Trabajo práctico integrador JS
*Grupos separados: Comisión 22021
*PROFESORA: ERICA GENTILI
*ALUMNA:ESTEFANI BENICIO
*/
/*boton Borrar: limpia la celda */
 function borrar(){
    document.getElementById('totalCompra').innerHTML="Total a Pagar: $";
}
 /*Boton resume: calcula el valor segun categoria*/
function resume(){
var cantidad= document.getElementById('cantidadEntrada').value;
var categorias= document.getElementById('categoria').value;
var total=Number;
console.log(cantidad);
      switch (categorias) {
        case "estudiante":
          total=40*cantidad;//40 es el resultado de (200 - 200*80%)
          break;
        case "trainne":
          total=100*cantidad;//100 es el resultado de (200 - 200*50%)
          break;
        case "junior":
          total=170*cantidad;//170 es el resultado de (200-200*15%)
          break;
      }
  document.getElementById('totalCompra').innerHTML="Total a Pagar: $"+total;
}