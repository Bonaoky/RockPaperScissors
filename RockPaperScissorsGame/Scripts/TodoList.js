const todoList = ['WAKE UP', 'Take wash'];

renderTodoList();


function renderTodoList() {

    let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {

      const todo = todoList[i];

      const todoHTML = `<p>${todo}</p>`;
      
      todoListHTML += todoHTML;
    
  }
    document.querySelector('.js-todolist').innerHTML = todoListHTML;
}


function TodoList() {

  const todoListElement = document.querySelector('.js-todo-list');
  
   const todoValue = todoListElement.value;

   todoList.push(todoValue);

   todoListElement.value = "";

   console.log(todoList);

   renderTodoList();
}

