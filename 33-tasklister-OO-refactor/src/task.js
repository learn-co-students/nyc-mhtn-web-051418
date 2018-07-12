// Task helper functions
let tasks = []

const taskGenerator = () => {
  let id = 0
  return (description, priority, listId) => {
    if (!priority) {priority = 'low'}
    const taskOBj = { id: ++id, description: description, priority: priority, listId: listId }
    tasks.push(taskOBj)
    return taskOBj
  }
}

const Task = taskGenerator()

const createTask = (description, priority, listName) => Task(description, priority, lists.find(list => list.name === listName).id)

const handleNewTaskCreation = event => {
  const taskDescription = document.getElementById('new-task-description').value
  const taskPriority = document.getElementById('new-task-priority').value
  const newTaskParentListName = document.getElementById('parent-list').value
  createTask(taskDescription, taskPriority, newTaskParentListName)
  generateTaskListerHtml()
}

const handleDeleteTask = event => {
  tasks = tasks.filter(taskObj => taskObj.id !== parseInt(event.target.dataset.taskId))
  generateTaskListerHtml()
}