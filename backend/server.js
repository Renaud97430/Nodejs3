const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;
connectDB();

const app = express();

// app.get("/post", (req, res) => {
//     res.json({ message: "Voici les messages"});
// });
//connection a la DB

// Middleware qui permet dz traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port));