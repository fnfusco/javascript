const nome="F";
const sobrenome="N";
const idade = 30;
const peso = 70;
const altura = 169;
let imc = peso / (altura*altura)*10000;
let anoNascimento;
let anoAtual = date =new Date().getFullYear();
anoNascimento = anoAtual - idade;

console.log(anoAtual);

console.log("Nome: ${nome}"); //comentário com aspas simples ou duplas variavel dentro de texto é apenas texto
console.log(`Nome: ${nome}`); //comentário com crase é possível colocar variavel dentro de texto sendo variável
console.log("Sobrenome:",sobrenome);
console.log("Idade:",idade);
console.log("Altura:",altura);
console.log("IMC:", imc);
console.log("Ano de Nascimento:", anoNascimento);
