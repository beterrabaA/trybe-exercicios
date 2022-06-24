const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Qual a peça de xadrez?', name => {
    
    switch(name) {
      case 'bispo':
        console.log('Diagonais')
        break;
      case 'rainha':
        console.log('Todas as direções')
        break;
      case 'peao':
        console.log('Frente')
        break;
      case 'torre':
        console.log('Frente e laterais');
        break;
      case 'rei':
        console.log('Diagonal:Duas casas')
        break;
        case 'cavalo':
          console.log('Movimento especifico')
          break;
    }
    readline.close();
  });