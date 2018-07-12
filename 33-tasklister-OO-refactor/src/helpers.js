// HTML generation helpers
const listDiv = document.getElementById("app-content");
const newListNameInput = document.getElementById('new-list-title')
const newListForm = document.getElementById('create-list-form')

const generateOptionsHTML = () => lists.map(listObj => `<option value="${listObj.name}" selected="">${listObj.name}</option >`).join('')

const generateTaskHTML = (taskObj, listName) => (`
            <li>
            Task: ${taskObj.description}
              <button data-action='delete-task' data-task-id='${taskObj.id}' data-list-title="${listName}" data-task-name="${taskObj.description}" class="delete-task">
                X
              </button>
            <br>
              Priority: ${taskObj.priority}
            </li>
          `)

const generateListTasks = listObj => tasks.filter(task => task.listId === listObj.id).map(taskObj => generateTaskHTML(taskObj, listObj.name)).join('')

const generateListHTML = listObj => (
    `
      <div>
        <h2>${listObj.name}
          <button data-action="delete-list" data-list-id="${listObj.id}" data-title="${listObj.name}" class="delete-list">
            X
          </button>
        </h2>
        <ul>
          ${generateListTasks(listObj)}
        </ul>
      </div>
    `
)
const generateNewTaskHtml = () => (
    `
    <form id="create-task-form">
      <label for="parent-list">Select List:</label>
      <select id="parent-list">
      ${generateOptionsHTML()}
      </select>

        <label for="new-task-description">Task description:</label>
        <input required="" type="text" id="new-task-description" placeholder="description">

        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
        <input data-action='create-new-task' data-one-two-three='one' type="submit" value="Create New Task">
      </form>
      `
)

const generateListsHTML = () => `<div id="lists">${lists.map(listObj => generateListHTML(listObj)).join('')}</div>`

const generateTaskListerHtml = () => listDiv.innerHTML = `${lists.length ? generateNewTaskHtml() : ''} ${generateListsHTML()}`