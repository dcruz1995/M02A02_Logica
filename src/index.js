//atv 02
//Fernando Cruz
var idade = 27;
var humano = true;
var mesAniversario = "maio";
if (idade > 18) {
  console.log("maior de idade");
} else {
  console.log("menor de idade");
}
if ((idade > 18) & (humano === true)) {
  console.log("ser Apto");
} else {
  console.log("ser não apto");
}
if (mesAniversario === "desembro" || mesAniversario === "janeiro") {
  console.log("nascido em desembro ou janeiro");
} else {
  console.log("não nascido em desembro ou janeiro");
}

//extra
var nome = "Fernando";
var sobrenome = "Cruz";

if (nome.substr(0, 1) === "R") {
  console.log("o seu nome incia com letra R");
} else {
  console.log("o seu nome não incia com letra R");
}
if (sobrenome.length > 6 || sobrenome.substr(0, 1) === "e") {
  console.log("Seu sobrenome possui 6 letras e / ou começa com letra e");
} else {
  console.log(
    "Seu sobrenome possui menos de 6 letras e / ou começa não com letra e"
  );
}