let nickname = prompt("Qual o nome do seu herói?");
let exp = parseInt(prompt("Qual nível de XP que seu herói possui? (1 a 10001)"));

let level;

switch (true) {
    case exp <= 1000:
        level = "Nível Ferro";
        break;
    case exp <= 2000:
        level = "Nível Bronze";
        break;
    case exp <= 6000:
        level = "Nível Prata";
        break;
    case exp <= 7000:
        level = "Nível Ouro";
        break;
    case exp <= 8000:
        level = "Nível Platina";
        break;
    case exp <= 9000:
        level = "Nível Ascendente";
        break;
    case exp <= 10000:
        level = "Nível Imortal";
        break;
    default:
        level = "Nível Radiant";
}

alert(`O Herói de nome: ${nickname} está no ${level}`);


/*
let nickname = prompt("Qual o nome do seu heroi?")
let exp = prompt("Qual nivel de xp que seu heroi possui?(1 a 10001)")

if(exp <= 1000){
    exp = "Nivel Ferro"
}else if(exp >= 1001 && exp <= 2000){
    exp = "Nivel Bronze"
}else if(exp >= 2001 && exp <= 6000){
    exp = "Nivel Prata"
}else if(exp >= 6001 && exp <= 7000){
    exp = "Nivel Ouro"
}else if(exp >= 7001 && exp <= 8000){
    exp = "Nivel Platina"
}else if(exp >= 8001 && exp <= 9000){
    exp = "Nivel Ascentente"
}else if(exp >= 9001 && exp <= 10000){
    exp = "Nivel Imortal"
}else{
    exp = "Nivel Radiant"
}

alert(`O Herói de nome: ${nickname} está no ${exp}`)
*/