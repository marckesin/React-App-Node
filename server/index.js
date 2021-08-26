const express = require('express');
const logger = require('morgan');
const path = require('path');

const port = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api', (req, res) => {
    res.json({ message: "React App e NodeJS." });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});