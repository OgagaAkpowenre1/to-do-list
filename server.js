const express = require("express");
const app = express();

let tasks = [
  { title: "Finish express to-do list", deadline: "A long time ago", checked: true },
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
    console.log(tasks)
    res.status(201).json({ success: true });
})

app.delete('/tasks/:title', (req, res) => {
    const task = decodeURIComponent(req.params.title)
    console.log(task)
    tasks = tasks.filter(t => t.title !== task)
    console.log(tasks)
    res.status(200).json({success: true})
})

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
