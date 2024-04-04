let num1;
let num2;
let resultado;

let btnSuma = document.getElementById('Ejercicio1')
let btnResta =document.getElementById('Ejercicio2')
let ResOpe = document.getElementById('Resultado')

function LeerDatos() {
    num1 = Number(prompt('Ingrese el valor del número 1'))
    num2 = Number(prompt('Ingrese el valor del número 2'))
}

btnSuma.addEventListener('click', function(){
    LeerDatos()
    
})

function Suma(num1,num2) {
    let suma = num1+num2
    return suma
}