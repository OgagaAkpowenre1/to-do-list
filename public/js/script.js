document.addEventListener("DOMContentLoaded", () => {
  const taskInputForm = document.getElementById("task-input-form");
  const taskBody = document.getElementById("task-table-body");
  const taskDeadline = document.getElementById("task-deadline-input");
  const taskTitleInput = document.getElementById("task-title-input");

  async function fetchTasks() {
    const res = await fetch("/tasks");
    const tasks = await res.json();
    console.log(tasks);

    taskBody.innerHTML = "";
    tasks.forEach((task) => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${task.title}</td>
            <td>${task.deadline}</td>
            <td><input type="checkbox" ${task.checked ? "checked" : ""} ></td>
            <td><button onclick="deleteTask(${task.title})">Delete</button></td>
            `;
      taskBody.appendChild(row);
    });
  }

  function addTasks() {}

  taskInputForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const task = {
      title: taskTitleInput.value,
      deadline: taskDeadline.value,
      checked: false,
    };

    await fetch("/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    taskTitleInput.value = "";
    taskDeadline.value = "";
    fetchTasks();
  });

  fetchTasks();
});
