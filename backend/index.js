import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import cors from 'cors'; // ⬅️ importa cors

dotenv.config();

const app = express();
const port = 3000;

app.use(cors()); // ⬅️ abilita tutte le origini (oppure specifica solo localhost:5173)

const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

app.get('/api/signals', async (req, res) => {
    const [rows] = await db.execute('SELECT * FROM signals');
    res.json(rows);
});

app.listen(port, () => {
    console.log(`Backend API listening on http://localhost:${port}`);
});
