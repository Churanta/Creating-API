import mysql2 from 'mysql2'
import express from 'express'

const connection = mysql2.createConnection({
    host: "localhost",
    database: "db1",
    user: "root",
    password: "Kanasona!23"
}
);

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`SERVER : http//localhost:$(PORT)`);
    connection.connect((err) => {
        if (err) throw err;
        console.log("Database Connected");

    })
})

app.use("/all", (req, res) => {
    const sql_query = `SELECT * FROM employee`
    connection.query(sql_query, (error, result) => {
    if (error) throw error;
    res.send(result)
})

})