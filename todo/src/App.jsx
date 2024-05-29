import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    //if we add like this then all values inside todos will be removed and todo will be added
    //setTodos(todo)
    //we get the old array in prevTodo
    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo]);
  };

  const updateTodo = (id, todo) => {
    //matching the id in existing todo array and then updating
    setTodos((prevTodo) =>
      prevTodo.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((eachTodo) =>
        eachTodo.id === id
          ? { ...eachTodo, completed: !eachTodo.completed }
          : eachTodo
      )
    );
  };

  useEffect(() => {
    const todoObj = JSON.parse(localStorage.getItem("todos"));

    if (todoObj && todoObj.length > 0) {
      setTodos(todoObj);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */} <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((eachTodo) => (
              <div key={eachTodo.id} className="w-full">
                <TodoItem todo={eachTodo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
