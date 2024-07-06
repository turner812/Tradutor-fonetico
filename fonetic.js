const { argv } = require('node:process');

const alfabeto_fonetico = {
    'A': 'Alfa', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo', 'F': 'Fox',
    'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliett', 'K': 'Kilo', 'L': 'Lima',
    'M': 'Mike', 'N': 'November', 'O': 'Oscar', 'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo',
    'S': 'Sierra', 'T': 'Tango', 'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'Xingu',
    'Y': 'Yankee', 'Z': 'Zulu', '0': 'Zero', '1': 'Um', '2': 'Dois', '3': 'Três', '4': 'Quatro',
    '5': 'Cinco', '6': 'Seis', '7': 'Sete', '8': 'Oito', '9': 'Nove'};

let entrada = [];
let saida = [];
let combined;

if (argv.length > 2) {
    // previne que o usuário passe tanto valores 'abc' como 'a' 'b' 'c'
    entrada = argv.slice(2);
    combined = entrada.join('');
    // console.log(entrada, entrada.length, entrada[0]);

    // para cada caracter dentro de combined
    for (let caracter of combined.toUpperCase()) {
        if (alfabeto_fonetico[caracter]) {
            // pega o carácter e retorna sua versão por extenso
            saida.push(alfabeto_fonetico[caracter]);
        } else {
            // caracteres especiais não possuem formato por extenso, um exemplo deles e a letra Ç
            saida.push(caracter);
        }
    }
    console.log(saida);
} else {
    console.log('Nenhum parâmetro foi informado, programa finalizado');
}