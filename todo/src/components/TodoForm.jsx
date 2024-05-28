import { useTodo } from "../context";

function TodoForm() {
  //for a single todo which is to be added
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    //since in the functionality there is spread used, we will not
    //pass string here like addTodo(todo), we pass an object
    addTodo({ todo: todo, completed: false });

    //since the todo has been added, make it empty again(cleanup)
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
