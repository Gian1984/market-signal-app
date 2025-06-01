import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import cors from 'cors';
import './polling.js'; // ⬅️ import and execute polling

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());

// Connection to DB
const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

console.log('✅ Connected to MySQL database');

// API
app.get('/api/signals', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM signals ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        console.error('❌ Error fetching signals:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(port, () => {
    console.log(`🚀 Backend API listening on http://localhost:${port}`);
});

