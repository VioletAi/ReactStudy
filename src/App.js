import "./styles.css";

export default function App() {
  const todos = [
    { id: 3, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 1, text: "Take shower", done: false }
  ];

  return (
    <div className="App">
      <h1>TodoList</h1>

      <TodoList what={todos} />
      <AddToDo />
    </div>
  );
}

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
  return (
    <form>
    <input placeholder="Add to do" />
    <button type="submit"> Submit </button>
    </form>
  )
}
