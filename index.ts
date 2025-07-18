import axios from "axios";

const url: string = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  // here we have created a new type
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  console.log(res.data);
  const todo: Todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(todo);
});

const logTodo = (todo: Todo) => {
  console.log(`
    The Todo with ID: ${todo.id}
    Has a title of: ${todo.title}
    Is it finished? ${todo.completed}  
  `);
};
