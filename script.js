const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];


const Primos = num => {
  for(let i = 2; i < num; i++) {
    if(num % i == 0){
      return false}
  } 
  return true;
}

ejercicio1.forEach(num => {
  if(Primos(num)){
    console.log(`El ${num} es primo`);
  }
});

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

ejercicio2.forEach((guess) => {
  if(guess.edad >=18 && guess.esFamiliar){
    console.log(`Bienvenido ${guess.nombre}, puedes pasar c: `)
  }
});

/*Serie de Fibonacci
 let x=1, n=0, r=0, p=0;

 while(p <= 50){
   p= p+1;
   r= x+n;
   x=n;
   n=r;
   console.log(r);
 }
 */

 function fibo(numero){
   let array=[1, 1];
   for(let i = 2; i < numero; i++){
     array[i] = array[i-1] + array[i-2];
   }
   return array;
 }
 console.log(fibo(50));