const fs = require('fs').promises;

const PATH_NAME = './src/movies.json';

async function readMovies() {
    try {
        const data = await fs.readFile(PATH_NAME, 'utf-8');
        const movies = JSON.parse(data);

        return movies;
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.message}`);
    }
}

async function getMovieById(id) {
    try {
        const data = await fs.readFile(PATH_NAME, 'utf-8');
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
        await fs.writeFile(PATH_NAME, JSON.stringify([...oldsMovies, newMovieWithId]));
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
        await fs.writeFile(PATH_NAME, JSON.stringify(retorno));
        return updatedMovieData;
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.message}`);
    }
}

async function deleteMovieById(id) {
    const data = await readMovies();
    const filteredMovieData = data.filter((e) => e.id !== Number(id));
    try {
        await fs.writeFile(PATH_NAME, JSON.stringify(filteredMovieData));
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.message}`);
    }
}

async function queryMovies(query) {
    const data = await readMovies();
    if (query) {
        const queriedMovies = data.filter((e) => (e.movie).includes(query));
        return queriedMovies;
    }
}

module.exports = {
    readMovies,
    getMovieById,
    addNewMovies,
    updateMovieData,
    deleteMovieById,
    queryMovies,
};