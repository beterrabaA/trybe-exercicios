const fs = require('fs').promises;

async function addNelsonToFamily(nelson) {
    try {
        const data = await fs.readFile('./simpsons.json','utf8')
        const saturado = JSON.parse(data)
        const novosSimpsons = [...saturado,nelson]
        await fs.writeFile('./simpsons.json', JSON.stringify(novosSimpsons));
    } catch (g) {
        console.error(`Erro ao ler o arquivo: ${g.message}`);
    }
}

addNelsonToFamily({id:'8',name:'Nelson Muntz'})