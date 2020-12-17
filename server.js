const express = require("express");
const db = require("./db/database");

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require("./routes/apiRoutes");

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use apiRoutes
app.use("/api", apiRoutes);

// default response for any other request(Not Found) catch all 
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log('server is running on http://localhost:' + PORT);
    });
});