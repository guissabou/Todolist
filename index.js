function ajouterTache() {
    const task = document.getElementById('task');
    if (task.value) {
        const taskList = document.getElementById('taskList');
        const taskListDone = document.getElementById('taskListDone');
        const newItem = document.createElement('li');
        newItem.innerHTML = task.value;
        $(newItem).on('swipeleft', function () {
           $(this).hide('slow', function () {
            $(this).remove();
               
         });
    });
        $(newItem).on('swipe', function () {
            const ReverseList = this.closest('ul');
            if (ReverseList=== taskList) {
                taskListDone.appendChild(this);
            } else {
                taskList.appendChild(this);
            }
            $(taskList).listview('refresh');
            $(taskListDone).listview('refresh');
        });

        taskList.appendChild(newItem);
        $(taskList).listview('refresh');
      
    }
}

function reinitialiser() {
    const task = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    const taskListDone = document.getElementById('taskListDone');
    taskList.innerHTML = '';
    taskListDone.innerHTML = '';
    task.value = '';
    task.focus();
}