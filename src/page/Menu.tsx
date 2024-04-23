import { useEffect, useState } from "react";
import FetchData from "../Utils/Fetch";
import { useNavigate } from "react-router-dom";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface Page {
  todos: Todo[];
}

const Menu = () => {
  const [data, setData] = useState<Todo[]>();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response: Page = await FetchData("https://dummyjson.com/todos");
      setData(response.todos);
      // alert(JSON.stringify(data, null, 10));
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Menu Page </h1>
      <button
        onClick={() => {
          navigate("/new_todo");
        }}
      >
        Add Todo
      </button>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              {item.todo} - {item.completed ? "Completed" : "Not Completed"}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Menu;
