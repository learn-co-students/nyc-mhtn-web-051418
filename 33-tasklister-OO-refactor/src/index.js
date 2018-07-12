document.addEventListener('DOMContentLoaded', (event) => {
  // event delegation logic
  document.body.addEventListener('click', function(event) {
    if (event.target.dataset.action === 'create-new-task') {
      event.preventDefault()
      handleNewTaskCreation()
    }
    if (event.target.dataset.action === 'delete-task') {
      handleDeleteTask(event)
    }
    if (event.target.dataset.action === 'create-new-list') {
      event.preventDefault()
      handleNewListCreation()
    }
    if (event.target.dataset.action === 'delete-list') {
      handleDeleteList(event)
    }
  })
});
