
let btnEjercicio1 = document.getElementById('Ejercicio1')
let btnEjercicio2 = document.getElementById('Ejercicio2')
let btnEjercicio3 = document.getElementById('Ejercicio3')

//Ejercicio 1

let nota1,nota2,nota3,promedio,exa,taller,notafinal;

function LeerDatosEjercicio1() {
    nota1 = Number(prompt('Ingrese la nota 1'))
    nota2 = Number(prompt('Ingrese la nota 2'))
    nota3 = Number(prompt('Ingrese la nota 3'))
    exa = Number(prompt('Ingrese la nota del examen'))
    
    taller = Number(prompt('Ingrese la nota del taller'))
}

function OperacionesEjercicio1(nota1,nota2,nota3,exa,taller) {
    promedio = ((nota1+nota2+nota3)/3)*(55/100)
    let examen1 = exa*(30/100)
    let taller1 = taller*(15/100)

    notafinal = promedio + examen1 + taller1
    console.log(`La nota es ${promedio}` )
    console.log(`La nota es ${examen1}` )
    console.log(`La nota es ${taller1}` )
    console.log(`La nota final es ${notafinal}` )
}

btnEjercicio1.addEventListener('click',function(){
    LeerDatosEjercicio1()
    OperacionesEjercicio1(nota1,nota2,nota3,exa,taller)
})

//Ejercicio 2

let numero1,numero2,numero3,numero4,suma,prom,producto;

function LeerDatosEjercicio2() {
    numero1 = Number(prompt('Ingrese la número 1'))
    numero2 = Number(prompt('Ingrese la número 2'))
    numero3 = Number(prompt('Ingrese la número 3'))
    numero4 = Number(prompt('Ingrese la número 4'))
}

function OperacionEjercicio2(numero1,numero2,numero3,numero4) {
    suma = numero1+numero2+numero3+numero4 
    producto = numero1*numero2*numero3*numero4 
    prom = (numero1+numero2+numero3+numero4)/4
}

btnEjercicio2.addEventListener('click',function(){
    console.log('Boton 2')
})