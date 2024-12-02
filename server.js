const express = require("express");
const app = express();

let tasks = [
  { title: "Finish express site", deadline: "today", checked: false },
  { title: "Finish express site", deadline: "today", checked: false },
];

const absolutePath = __dirname + "/public/index.html";
const assetsPath = __dirname + "/public/styles/styles.css";

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});
app.use("/public", express.static(__dirname + "/public"));
app.use(express.json())

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
    tasks.push(req.body)
    res.status(201).json({ success: true });
})

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
