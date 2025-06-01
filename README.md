# 📈 Market Signal App

A simple full-stack trading signal app built with:

- ✅ Vue 3 + Vite for the frontend  
- ✅ Node.js + Express for the backend  
- ✅ MySQL as the database  
- ✅ Docker + Docker Compose for backend/database orchestration

---

## 📁 Project Structure

```
market-signal-app/
├── backend/                 # Express server
│   ├── index.js
│   └── package.json
├── frontend/                # Vue 3 app (Vite)
│   └── (Vue components and setup)
├── db/
│   └── init.sql             # MySQL schema
├── docker-compose.yml       # Docker orchestration
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/market-signal-app.git
cd market-signal-app
```

---

## 🐳 Start Backend and MySQL with Docker

```bash
docker compose up --build
```

- MySQL container starts with:
  - Database: `appdb`
  - User: `user`
  - Password: `password`
- Backend is served on `http://localhost:3000`
- Backend connects to MySQL and exposes `/api/signals`

---

## 💻 Start the Frontend (Vue 3 + Vite)

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Vue frontend runs on: [http://localhost:5173](http://localhost:5173)

---

## 🔌 API Endpoint

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/api/signals`   | Fetch all trading signals |

---

## 🛠 Database Schema (db/init.sql)

```sql
CREATE DATABASE IF NOT EXISTS appdb;

USE appdb;

CREATE TABLE IF NOT EXISTS signals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    symbol VARCHAR(10),
    signal VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🌐 Environment Variables

Set via `docker-compose.yml` for backend:

```env
DB_HOST=mysql
DB_USER=user
DB_PASSWORD=password
DB_NAME=appdb
```

---

## ✅ Test the App

1. Run Docker and wait for all containers to start
2. Open MySQL CLI:
   ```bash
   docker exec -it mysql mysql -u user -p
   # Enter password: password
   USE appdb;
   INSERT INTO signals (symbol, signal) VALUES ('XAU/GBP', 'BUY');
   ```
3. Open [http://localhost:5173](http://localhost:5173) — you should see the signal in the frontend

---

## ⚠️ Common Issues

- If backend fails with `ECONNREFUSED`, MySQL is likely not ready yet. Wait or restart with:
  ```bash
  docker compose restart backend
  ```
- Ensure ports 5173 (frontend) and 3000 (backend) are free

---

## 🛣️ Next Steps

- Add POST support to submit new signals
- Add user authentication
- Filter/search signals by symbol or date
- Deploy to production (e.g. Vercel + Railway)

---

## 👨‍💻 Author

Built by **Gianluca**  
Student @ ISFCE Bruxelles, 2024–2025

---

## 📄 License

MIT
