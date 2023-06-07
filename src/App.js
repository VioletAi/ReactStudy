import React from "react";
import "./styles.css";

export default function App() {
  //The initial value called useState with (our array of todos) and this becomes our state variable
  //A special function that allows us to update what is stored in the state variable
  const [todos, setToDos] = React.useState([
    { id: 3, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 1, text: "Take shower", done: false },
  ]);

  return (
    //attribute we used are camel case
    <div className="App">
      <h1>TodoList</h1>

      <TodoList what={todos} />
      <AddToDo addToDo={setToDos} />
    </div>
  );
}

//Every component must begin with a capital letter.
function TodoList({ what }) {
  return (
    <ul>
      {what.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

function AddToDo({ addToDo }) {
  //will be called after the form is submitted
  function handleAddToDo(event) {
    //event contains all event data passed in through form
    //calling prevent Default to prevent page from refreshing
    event.preventDefault();

    //The const declaration creates block-scoped constant
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: 4,
      text,
      done: false,
    };

    addToDo([]);
  }
  return (
    <form onSubmit={handleAddToDo}>
      <input name="addTodo" placeholder="Add to do" />
      <button type="submit"> Submit </button>
    </form>
  );
}
