const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://test:test@cluster0.8r6fu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Ensure this line is present

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Routes
const indexRouter = require('./routes/index');
const uploadRouter = require('./routes/upload');
app.use('/', indexRouter);
app.use('/upload', uploadRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

