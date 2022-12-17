const fs = require('fs').promises;

async function createSimpsonsFamily() {
    try {
        const data = await fs.readFile('./simpsons.json','utf8')
        const saturado = JSON.parse(data)
        const familyIds = [1, 2, 3, 4];
        
        const simpsonsFamily = saturado
          .filter((simpson) => familyIds.includes(Number(simpson.id)));

          await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
    } catch (g) {
        console.error(`Erro ao ler o arquivo: ${g.message}`);
    }
}

createSimpsonsFamily()