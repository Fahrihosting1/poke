// server.js atau file API utama
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Const untuk data respons
const apiInfo = {
    secretCode: "nazilacrash",
    description: "PREMIUM KEY",
    lastUpdated: "2025-04-20",
    author: "Nazila",
    status: "Active",
    license: "MIT",
    version: "1.0.0",
    password: "RIKZ",
    username: "RIKZC2"
};

// Endpoint untuk langsung membaca data
app.get("/api/info", (req, res) => {
    res.json(apiInfo);
});

// Menyalakan server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
