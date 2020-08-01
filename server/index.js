'use strict';

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//


//get all humidity
app.get("/humidity/", async (req, res) => {
    try {
        
        const humidity = await pool.query("SELECT humidity FROM values ORDER BY id DESC LIMIT 1");
        res.json(humidity.rows);
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

