const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve index.html as the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
