const express = require("express");
const port = 5000;
const app = express();

// app.get("/post", (req, res) => {
//     res.json({ message: "Voici les messages"});
// });

// Middleware qui permet dz traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port));