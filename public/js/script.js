document.addEventListener('DOMContentLoaded', () => {
    const taskInputForm = document.getElementById('task-input-form')

    async function fetchTasks(){
        const res = await fetch('/tasks')
        const tasks = await res.json()
        console.log(tasks)
    }

    fetchTasks()
})