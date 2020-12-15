const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// default response for any other request(Not Found) catch all 
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log('server is running on http://localhost:' + PORT);
});