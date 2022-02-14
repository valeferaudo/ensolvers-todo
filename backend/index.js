const express = require ('express');

// Create server
const app = express();

// Start server
app.listen(app.get('Port'),()=>{
    console.log(`Server on port: ${app.get('Port') || 3000}`)
});