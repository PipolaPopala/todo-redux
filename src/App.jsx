import "./App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlices";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="App">
      <InputField text={text} setText={setText} addTask={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
