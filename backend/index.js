const express = require ('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// Database
const { dbConnection } = require ('./database/config');

// Create server
const app = express();

// Settings
app.set('PORT',process.env.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/tasks',require('./routes/task.routes'));
app.use('/api/folders',require('./routes/folder.routes'));

// Start server
app.listen(app.get('PORT'),()=>{
    console.log(`Server on port: ${app.get('PORT') || 4000}`)
});