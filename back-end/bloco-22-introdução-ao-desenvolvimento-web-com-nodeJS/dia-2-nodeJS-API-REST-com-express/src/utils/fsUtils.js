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

module.exports = {
    readMovies,
    getMovieById,
    addNewMovies,
};