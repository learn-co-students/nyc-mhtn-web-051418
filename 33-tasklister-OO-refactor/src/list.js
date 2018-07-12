// List helper functions
let lists = []

const listGenerator = () => {
  let id = 0
  return name => {
    const listObj = { id: ++id, name: name }
    lists.push(listObj)
    return listObj
  }
}

const createList = name => List(name)

const List = listGenerator()

const handleNewListCreation = () => {
  createList(newListNameInput.value)
  newListNameInput.value = ''
  generateTaskListerHtml()
}

const handleDeleteList = event => {
  lists = lists.filter(listObj => listObj.id !== parseInt(event.target.dataset.listId))
  tasks = tasks.filter(taskObj => taskObj.listId !== parseInt(event.target.dataset.listId))
  generateTaskListerHtml()
}