const express = require('express');

// Constants
const PORT = 5000;

// App
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);