// src/app.js
const express = require('express');
const { readMovies,
    getMovieById,
    addNewMovies, updateMovieData, deleteMovieById } = require('./utils/fsUtils');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.get('/movies', async (req, res) => {
    const movies = await readMovies();

    return res.status(200).json({ movies });
});

app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const movies = await getMovieById(Number(id));

    return res.status(200).json(movies);
});

app.post('/movies', async (req, res) => {
    const newMovie = req.body;
    const movies = await addNewMovies(newMovie);
    return res.status(201).json({ movies });
});

app.put('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const newUpMovie = req.body;
    const newUpData = await updateMovieData(Number(id), newUpMovie);
    return res.status(200).json(newUpData);
});

app.delete('/movies/:id', async (req, res) => {
    const { id } = req.params;
    await deleteMovieById(id);
    res.status(204).end();
});

module.exports = app;