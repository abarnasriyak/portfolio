const mysql = require('mysql2/promise');
require('dotenv').config();

async function check() {
  console.log("Connecting to database using URL in .env...");
  try {
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    console.log("SUCCESS: Connected to database successfully!");
    
    const [rows] = await connection.query("SELECT 1 + 1 AS result");
    console.log("Query test (SELECT 1 + 1):", rows[0].result === 2 ? "PASSED" : "FAILED");
    
    const [tables] = await connection.query("SHOW TABLES");
    console.log("Tables in database:", tables.map(t => Object.values(t)[0]));
    
    await connection.end();
  } catch (err) {
    console.error("ERROR connecting to database:", err.message);
  }
}
check();
