const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const path = require("path");

const app = express()

app.use(cors({
    origin: '*',
}));

app.use(express.json());

app.use(express.static(path.join(__dirname, "views")));

app.use("/users",userRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'appointment.html'));
});

app.listen(3000,"0.0.0.0", () => console.log("running server 3000"));