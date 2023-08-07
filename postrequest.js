import mysql2 from 'mysql2';
import express from 'express';

const connection = mysql2.createConnection({
    host: "localhost",
    database: "db1",
    user: "root",
    password: "Kanasona!23"
});

const app = express();

const PORT = 5000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`SERVER : http://localhost:${PORT}`);
    connection.connect((err) => {
        if (err) throw err;
        console.log("Database Connected");
    });
});

app.get("/all", (req, res) => {
    const sql_query = `SELECT * FROM Employee`;
    connection.query(sql_query, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

app.post("/add", (req, res) => {
    const { EmpId, Empname, EmpAge, EmpDept } = req.body;

    const sql_query = `INSERT INTO Employee (EmpId, Empname, EmpAge, EmpDept) VALUES (?, ?, ?, ?)`;
    const values = [EmpId, Empname, EmpAge, EmpDept];

    connection.query(sql_query, values, (error, result) => {
        if (error) throw error;
        console.log("Record added successfully!");
        res.status(201).json({ message: "Record added successfully!" });
    });
});
