import { createReadStream } from "fs";

// importar um módulo para ler o que o usuário digitou
const readline = require('readline');

// cria a interface para usar a entrada e saída do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// faz a pergunta para o usuáio (input, entrada)
rl.question('Bem vindo ao sistema de elevador, digite uma tecla para chamar o elevador: ', (answer) => {

    // exibe o que o usuário digitou (output, saída)
    console.log(`Vc digitou: ${answer}`);

    // fecha a aplicação
    rl.close();
});
