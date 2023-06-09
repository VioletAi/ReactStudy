import React from "react";
import "./styles.css";

export default function App() {
  //The initial value called useState with (our array of todos) and this becomes our state variable
  //A special function that allows us to update what is stored in the state variable
  const [todos, setToDos] = React.useState([
    { id: 3, text: "Wash dishes", done: true },
    { id: 2, text: "Do laundry", done: false },
    { id: 1, text: "Take shower", done: false },
  ]);

  return (
    //attribute we used are camel case
    <div className="App">
      <h1>TodoList</h1>

      <TodoList what={todos} addToDo={setToDos} />
      <AddToDo addToDo={setToDos} />
    </div>
  );
}

//Every component must begin with a capital letter.
function TodoList({ what, addToDo }) {
  function handleToggleTodo(todo) {
    //map() method creates a new array populated with the results of calling a provided function on every element in the calling array
    const updatedTodos = what.map((t) =>
      //three equals check whether two value are equal in both types and values
      t.id === todo.id
        ? {
            //use spread syntax to include all entries in the array
            ...t,
            done: !t.done,
          }
        : t
    );
    addToDo(updatedTodos);
  }

  return (
    <ul>
      {what.map((todo) => (
        <li
          onDoubleClick={() => handleToggleTodo(todo)}
          style={{
            textDecoration: todo.done ? "line-through" : "",
          }}
          key={todo.id}
        >
          {todo.text}
          <RemoveToDo removeItem={todo} />
        </li>
      ))}
    </ul>
  );
}

function RemoveToDo() {
  //span is a generic inline container for phrasing content
  return (
    <span
      role="button"
      style={{
        color: "red",
        fontWeight: "bold",
        marginLeft: 10,
      }}
    >
      x
    </span>
  );
}

function AddToDo({ addToDo }) {
  //create a ref with useRef, hence to clear it later
  const inputRef = React.useRef();

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

    addToDo((prevState) => {
      return prevState.concat(todo);
    });

    inputRef.current.value = "";
  }
  return (
    <form onSubmit={handleAddToDo}>
      <input ref={inputRef} name="addTodo" placeholder="Add to do" />
      <button type="submit"> Submit </button>
    </form>
  );
}
