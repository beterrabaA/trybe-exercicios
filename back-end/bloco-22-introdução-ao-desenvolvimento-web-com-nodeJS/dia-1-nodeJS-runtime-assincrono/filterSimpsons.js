const fs = require('fs').promises;

async function filterSimpsons() {
    try {
        const data = await fs.readFile('./simpsons.json','utf8')
        const saturado = JSON.parse(data)
        const newArray = saturado.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
        await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
    } catch (g) {
        console.error(`Erro ao ler o arquivo: ${g.message}`);
    }
}

filterSimpsons()