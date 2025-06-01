import cron from 'node-cron';
import axios from 'axios';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

const SYMBOL = 'XAU/GBP';

cron.schedule('*/5 * * * *', async () => {
    try {
        const res = await axios.get(`https://api.twelvedata.com/price?symbol=${SYMBOL}&apikey=${process.env.TWELVE_DATA_API_KEY}`);
        const price = parseFloat(res.data.price);

        console.log(`[Polling] Price for ${SYMBOL}: ${price}`);

        if (price < 1450) {
            await db.execute('INSERT INTO signals (symbol, signal) VALUES (?, ?)', [SYMBOL, 'BUY']);
            console.log('Signal: BUY');
        } else if (price > 1600) {
            await db.execute('INSERT INTO signals (symbol, signal) VALUES (?, ?)', [SYMBOL, 'SELL']);
            console.log('Signal: SELL');
        } else {
            console.log('No action');
        }
    } catch (err) {
        console.error('Polling error:', err.message);
    }
});
