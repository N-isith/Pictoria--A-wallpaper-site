const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Load environment variables
const PORT = process.env.PICTORIA_PORT || 8000;
const MONGODB_URL = process.env.PICTORIA_MONGODB_URL;

if (!PORT || !MONGODB_URL) {
    console.error("Error: Missing environment variables PICTORIA_PORT or PICTORIA_MONGODB_URL.");
    process.exit(1);
}

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

// Connect to MongoDB
mongoose
    .connect(MONGODB_URL)
    .then(() => {
        console.log("MongoDB connection successful!");
    })
    .catch((err) => {
        console.error("MongoDB connection unsuccessful:", err.message);
    });

// Routes
const imagerRoutes = require("./routes/imagerRoute.js");
app.use("/imager", imagerRoutes);

const helpRoutes = require("./routes/helpRoutes.js");
app.use("/help", helpRoutes);

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: "Something went wrong!", error: err.message });
});
