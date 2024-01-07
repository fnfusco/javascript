const nome= "João"; //Constante não se altera
const n1 = 2;
const n2 = '6';
const n3 = 4;
const n4 = n1 * n2; // multiplicação é conversão automática de tipo de vatiável
const n5 = n1 + n2; // soma não é conversão automática, vai transoformar tudo em string
const n6 = n3 / n1;
const n7 = n2 / n1; // divisão é conversão automática de tipo de vatiável
const n8 = n3 + parseInt(n2);// para conversão em soma, usar parse...
const n9 = n3 - n2;// subtração é conversão automática de tipo de vatiável

console.log(typeof n3);
console.log(n4);
console.log(n5);
console.log(n6);
console.log(n7);
console.log(n8);
console.log(n9);