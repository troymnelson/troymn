const express = require('express');
const cors = require("cors");
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
    origin: ["http://localhost:5173"]
}


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));