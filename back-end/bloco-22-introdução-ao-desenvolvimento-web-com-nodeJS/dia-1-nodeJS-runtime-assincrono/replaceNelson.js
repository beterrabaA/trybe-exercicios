const fs = require('fs').promises;

async function replaceNelson(nelson) {
    try {
        const data = await fs.readFile('./simpsonsFamily.json','utf8')
        const saturado = JSON.parse(data)
        const simpsonsWithoutNelson = saturado.filter((e) => Number(e.id) !== 8)
        const novosSimpsons = [...simpsonsWithoutNelson,{ id: '15', name: 'Maggie Simpson' }]
        await fs.writeFile('./simpsonsFamily.json', JSON.stringify(novosSimpsons));
    } catch (g) {
        console.error(`Erro ao ler o arquivo: ${g.message}`);
    }
}

replaceNelson()