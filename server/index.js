const express = require("express");
const cors = require("cors");

const app = (express())

app.use(express());
app.use(cors());

app.get("/", (req, res) =>{
    res.send("Welcome to our online shop");
});

app.listen(5001, console.log("Server is running on port 5001..."))