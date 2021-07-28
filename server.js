/* External Modules */
const express = require("express");

/* Internal Modules */

/* Instanced Modules */
const app = express();

/* Configuration */
const PORT = 4000;

/* Middleware */

/* Routes */
app.get("/", (req, res) => {
  res.send("Screeeeee");
});

app.get("/theking", (req, res) => {
  res.send("Adondon");
});

app.get("/ships", (req, res) => {
  res.send("hello :)");
});

/* Server Bind */
app.listen(PORT, () => {
  console.log(`PEWW PEW live at port ${PORT}`);
});
