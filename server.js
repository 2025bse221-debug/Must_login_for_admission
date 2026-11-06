const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const applicationRoutes = require("./routes/applicationRoutes");
app.use(applicationRoutes);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});