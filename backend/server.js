const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json()); // Use express's built-in body-parser
app.use(cors());

const mysql = require("mysql2/promise"); // Use promise-based MySQL2

// Database connection
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "bit_company",
});

// Login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Username and password are required");
    }

    const query = "SELECT * FROM employee WHERE username = ? AND password = ?";

    try {
        const [results] = await db.query(query, [username, password]);

        if (results.length === 0) {
            return res.status(401).send("Invalid credentials");
        }

        res.json({ message: "Login successful", user: results[0] });
    } catch (err) {
        console.error("Error logging in:", err.message);
        res.status(500).send("Error logging in");
    }
});

// Get all data from a table
app.get("/:table", async (req, res) => {
    const { table } = req.params;

    try {
        const [results] = await db.query("SELECT * FROM ??", [table]);
        res.json(results);
    } catch (err) {
        console.error("Error fetching data:", err.message);
        res.status(500).send("Error fetching data");
    }
});

// Add data to a table
app.post("/:table", async (req, res) => {
    const { table } = req.params;
    const data = req.body;

    try {
        const [results] = await db.query("INSERT INTO ?? SET ?", [table, data]);
        res.json({ message: "Data added successfully", id: results.insertId });
    } catch (err) {
        console.error("Error inserting data:", err.message);
        res.status(500).send("Error inserting data");
    }
});

// Update data in a table
app.put("/:table/:id", async (req, res) => {
    const { table, id } = req.params;
    const updates = req.body;

    const validTables = ["Employee", "Department", "Project"];
    if (!validTables.includes(table)) {
        return res.status(400).send("Invalid table name");
    }

    if (Object.keys(updates).length === 0) {
        return res.status(400).send("No fields provided for update");
    }

    const fields = Object.keys(updates).map((key) => `${key} = ?`).join(", ");
    const values = Object.values(updates);

    try {
        const query = `UPDATE ?? SET ${fields} WHERE EmpID = ?`;
        await db.query(query, [table, ...values, id]);
        res.json({ message: "Data updated successfully" });
    } catch (err) {
        console.error("Error updating data:", err.message);
        res.status(500).send("Error updating data");
    }
});

// Delete data from a table
app.delete("/:table/:id", async (req, res) => {
    const { table, id } = req.params;

    const validTables = ["Employee", "Department", "Project"];
    if (!validTables.includes(table)) {
        return res.status(400).send("Invalid table name");
    }

    try {
        const query = "DELETE FROM ?? WHERE EmpID = ?";
        await db.query(query, [table, id]);
        res.json({ message: "Data deleted successfully" });
    } catch (err) {
        console.error("Error deleting data:", err.message);
        res.status(500).send("Error deleting data");
    }
});

// Search data in a table
app.get("/:table/search", async (req, res) => {
    const { table } = req.params;
    const { column, value } = req.query;

    if (!table || !column || !value) {
        return res.status(400).send("Missing table, column, or value parameter");
    }

    const query = "SELECT * FROM ?? WHERE ?? LIKE ?";
    const formattedValue = `%${value}%`;

    try {
        const [rows] = await db.query(query, [table, column, formattedValue]);
        res.json(rows);
    } catch (err) {
        console.error("Error executing search query:", err.message);
        res.status(500).send("Error searching data");
    }
});

// Start server
app.listen(5001, () => console.log("Server running on http://localhost:5001"));