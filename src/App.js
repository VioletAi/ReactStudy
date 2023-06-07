import "./styles.css";

export default function App() {
  const todos = [
    { id: 3, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 1, text: "Take shower", done: false }
  ];

  return (
    //attribute we used are camel case
    <div className="App">
      <h1>TodoList</h1>

      <TodoList what={todos} />
      <AddToDo />
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

function AddToDo(){
  
  //will be called after the form is submitted
  function handleAddToDo(){
    
  }
  return (
    <form onSubmit={handleAddToDo}>
    <input placeholder="Add to do" />
    <button type="submit"> Submit </button>
    </form>
  )
}
