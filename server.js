const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.static(__dirname)); // serve all files in current folder

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
