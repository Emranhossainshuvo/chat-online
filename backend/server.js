const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Server is ready")
})


app.listen(5000, () => console.log(`The server is running on port ${PORT}`))