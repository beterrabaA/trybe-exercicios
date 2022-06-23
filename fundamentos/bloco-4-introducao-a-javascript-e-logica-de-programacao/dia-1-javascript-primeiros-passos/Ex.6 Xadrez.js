const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Qual a peça de xadrez?', name => {
    if(name === 'bispo') {
        console.log('Boa escolha')
    } else {
        console.log('Escolheu errado!')
    }
    readline.close();
  });