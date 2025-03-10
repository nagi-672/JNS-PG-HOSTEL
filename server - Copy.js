require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON requests

// Sample route
app.get("/", (req, res) => {
    res.send("Welcome to My Backend!");
});

// API endpoint that returns data
app.get("/api/data", (req, res) => {
    res.json({ message: "Hello from the backend!", data: [1, 2, 3, 4] });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(Server running on port ${PORT}));