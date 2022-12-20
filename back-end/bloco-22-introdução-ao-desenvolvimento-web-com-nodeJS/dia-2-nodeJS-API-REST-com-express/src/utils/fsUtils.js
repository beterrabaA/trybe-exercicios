const fs = require('fs').promises;

async function readMovies() {
    try {
        const data = await fs.readFile('./src/movies.json', 'utf-8');
        const movies = JSON.parse(data);

        return movies;
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.message}`);
    }
}

async function getMovieById(id) {
    try {
        const data = await fs.readFile('./src/movies.json', 'utf-8');
        const movies = JSON.parse(data);

        return movies.find((e) => e.id === id);
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.message}`);
    }
}
async function addNewMovies(movie) {
    try {
        const oldsMovies = await readMovies();
        const newMovieWithId = { id: oldsMovies.length + 1, ...movie };
        await fs.writeFile('./src/movies.json', JSON.stringify([...oldsMovies, newMovieWithId]));
        return newMovieWithId;
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.message}`);
    }
}

async function updateMovieData(id, updatedMovie) {
    const oldsMovies = await readMovies();
    const updatedMovieData = { id, ...updatedMovie };
    const retorno = oldsMovies.reduce((a, c) => {
        if (c.id === updatedMovieData.id) return [...a, updatedMovieData];
        return [...a, c];
    }, []);

    try {
        await fs.writeFile('./src/movies.json', JSON.stringify(retorno));
        return updatedMovieData;
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.message}`);
    }
}

module.exports = {
    readMovies,
    getMovieById,
    addNewMovies,
    updateMovieData,
};