//Introduccion a JS
//Ejercicio 2
console.log("---- INTRODUCCION A JS ----");
console.log("--- Ejercicio 2 ---");

let a = 7;
let b = 8;
let c = a + b;
console.log("La suma de a y b es igual a: " + c);

//Ejercicio 3
console.log("--- Ejercicio 3 ---");
let nombreUsuario = prompt("Por favor, ingrese su nombre de usuario:");
console.log("Su nombre es " + nombreUsuario);

//Operadores logicos y condicionales
console.log("---- OPERADORES LOGICOS Y CONDICIONALES ----");

//Ejercicio 1
console.log("--- Ejercicio 1 ---");
let num1 = 23;
let num2 = 45;
let num3 = 15;
let numMayor = num1;
if (num2 > numMayor) {
    numMayor = num2;
}
if (num3 > numMayor) {
    numMayor = num3;
}
console.log("De los siguientes números " + num1 + ", " + num2 + ", " + num3 + ", el mayor es " + numMayor)

//Ejercicio 2
console.log("--- Ejercicio 2 ---");
let numParImpar = prompt("Por favor, ingrese un número:");
if (numParImpar % 2 === 0) {
    console.log("El número", numParImpar, "es par.");
} else {
    console.log("El número", numParImpar, "es impar.");   
}

//Operadores de Asignación y Bucles
console.log("---- OPERADORES LOGICOS Y CONDICIONALES ----");

//Ejercicio 1
console.log("--- Ejercicio 1 ---");
let contador = 10;
while (contador > 0) {
  console.log(contador);
  contador--;
}

//Ejercicio 2
console.log("--- Ejercicio 2 ---");
let numero;
do {
  numero = parseFloat(prompt("Ingrese un número mayor a 100:"));
  if (numero <= 100) {
    console.log("El número ingresado no es mayor a 100. Intente nuevamente.");
  }
} while (numero <= 100);
console.log("El número ingresado es:", numero);

//Funciones de JavaScript
console.log("---- FUNCIONES DE JAVASCRIPT ----");

//Ejercicio 1
console.log("--- Ejercicio 1 ---");
let contador2 = 3;
function esPar(numero) {
    return numero % 2 === 0;
}
do {
    let numImparPar = prompt("Por favor, ingrese un número:");
    console.log("El numero " + numImparPar + " es par: " + esPar(numImparPar));
    contador2--
} while (contador2 >= 1);

//Ejercicio 2
console.log("--- Ejercicio 2 ---");
function convertirCelsiusAFahrenheit() {
    let celsius = prompt("Por favor, ingrese la temperatura en Celsius:");
    let fahrenheit = celsius * 1.8 + 32; 
    console.log(celsius + "°C equivalen a " + fahrenheit + "°F.");
}

//Objetos en JavaScript
console.log("---- OBJETOS EN JAVASCRIPT ----");

//Ejercicio 1
console.log("--- Ejercicio 1 ---");
let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Barcelona",
    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;  
        console.log("La nueva ciudad de " + this.nombre + " es la ciudad de " + this.ciudad + ".");
    },
};

let newCity = prompt("Por favor, ingrese una nueva ciudad para " + persona.nombre + ".");
persona.cambiarCiudad(newCity);

//Ejercicio 2
console.log("--- Ejercicio 2 ---");
let libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    anio: 1605,
    esAntiguo: function(anioActual) {
        let edad = anioActual - this.anio;
        let booleano;
        if (edad > 10){
            booleano = true;
            return booleano;
        } else {
            booleano = false;
            return booleano;
        }
    },
};

let anioActual = prompt("Por favor, ingrese el año actual");
console.log("El libro " + libro.titulo + " es antiguo: " + libro.esAntiguo(anioActual));

//Arrays en JavaScript
console.log("---- ARRAYS EN JAVASCRIPT ----");

//Ejercicio 1
console.log("--- Ejercicio 1 ---");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosDoblados = [];
for (let i = 0; i < numeros.length; i++) {
  numerosDoblados.push(numeros[i] * 2);
}
console.log("Array original:", numeros);
console.log("Array con los números doblados:", numerosDoblados);

//Ejercicio 2
console.log("--- Ejercicio 2 ---");
const pares = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
}
console.log("Los primeros 10 números pares son:", pares);

//Introduccion al DOM
console.log("---- INTRODUCCION AL DOM ----");

//Ejercicio 1
console.log("--- Ejercicio 1 ---");
const button = document.getElementById("botonColor");
const parrafo = document.getElementsByClassName("elementoP");

const handleStyleParrafo = () => {
    for (const parrafos of parrafo) {
        parrafos.classList.add("textoAzul");
    }
};

button.addEventListener("click", handleStyleParrafo);

//Ejercicio 2
console.log("--- Ejercicio 2 ---");
const buttonInput = document.getElementById("buttonInput");
const getDataInputs = () => {
    const textoCampo = document.getElementById("miCampo").value;
    alert("El valor ingresado es " + textoCampo);
};
buttonInput.addEventListener("click", getDataInputs);

//Eventos en DOM
console.log("---- EVENTOS EN DOM ----");

//Ejercicio 1
console.log("--- Ejercicio 1 ---");
const miLista = document.getElementById('miLista');
const elementosLi = miLista.getElementsByTagName('li');
for (let i = 0; i < elementosLi.length; i++) {
    elementosLi[i].addEventListener('click', function() {
        console.log(this.textContent);
    });
}

//Ejercicio 2
console.log("--- Ejercicio 2 ---");
const campo = document.getElementById('miCampo2');
const deshabilitarBtn = document.getElementById('deshabilitar');
const habilitarBtn = document.getElementById('habilitar');
deshabilitarBtn.addEventListener('click', () => {
    campo.disabled = true;
    campo.style.cursor = 'not-allowed';
});

habilitarBtn.addEventListener('click', () => {
    campo.disabled = false;
    campo.style.cursor = 'text';
});

//Local Storage
console.log("---- LOCAL STORAGE ----");

//Ejercicio 1
console.log("--- Ejercicio 1 ---");
const formulario = document.getElementById('miFormulario');
const correoInput = document.getElementById('correo');
const correoGuardadoDiv = document.getElementById('correoGuardado');
const correoGuardado = localStorage.getItem('correo');
if (correoGuardado) {
    correoGuardadoDiv.textContent = `Correo guardado: ${correoGuardado}
    <button onclick="eliminarCorreo()">Eliminar</button>`;
}
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const correo = correoInput.value;
    localStorage.setItem('correo', correo);
    correoGuardadoDiv.textContent = `Correo guardado: ${correo};
    <button onclick="eliminarCorreo()">Eliminar</button>`;
    correoInput.value = '';
});
function eliminarCorreo() {
    localStorage.removeItem('correo');
    correoGuardadoDiv.textContent = '';
}