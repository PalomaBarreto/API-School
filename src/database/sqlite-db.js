//cria e conecta o banco
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const pathFile = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(pathFile);

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = db;