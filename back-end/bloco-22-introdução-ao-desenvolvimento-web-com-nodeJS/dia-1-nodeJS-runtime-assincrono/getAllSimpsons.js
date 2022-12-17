const fs = require('fs').promises;

async function getAllSimpsons() {
    try {
        const data = await fs.readFile('./simpsons.json','utf8')
        const saturado = JSON.parse(data)
        saturado.map((e) => console.log(`${e.id} - ${e.name}`))
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.message}`);
    }
}

getAllSimpsons()

