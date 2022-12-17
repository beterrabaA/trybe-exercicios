const fs = require('fs').promises;

async function getSimpsonById(id) {
    try {
        const data = await fs.readFile('./simpsons.json','utf8')
        const saturado = JSON.parse(data)
        return saturado.find((e) => Number(e.id) === id)
    } catch (g) {
        console.error(`Erro ao ler o arquivo: ${g.message}`);
    }
}

getSimpsonById(3)