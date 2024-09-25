const todoList = [
  {
    name:  'WAKE UP', 
    dueDate: '2024-10-23'
  },
  {
    name: 'Take wash',
    dueDate: '2024-12-12'
  }];

renderTodoList();


function renderTodoList() {

    let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {

      const todoObject = todoList[i];
      //const name = todoObject.name;
      //const dueDate = todoObject.dueDate;

      const {name, dueDate} = todoObject; //Destructuring

      const todoHTML = `
      
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button onclick="todoList.splice(${i}, 1); 
      renderTodoList(); class="detete-todo-button"
      ">Delete</button>`;
      
      todoListHTML += todoHTML;
    
  }
    document.querySelector('.js-todolist').innerHTML = todoListHTML;
}


function TodoList() {

  const todoListElement = document.querySelector('.js-todo-list');
  
   const name = todoListElement.value;

   const dateInputElement = document.querySelector('.js-due-date-input');

   const dueDate = dateInputElement.value;


   todoList.push({name, dueDate
    //name: name,
    //dueDate: dueDate
   });

   todoListElement.value = "";

   renderTodoList();
}

