import { useCallback, useContext, useEffect, useState } from "react";
import FetchData from "../Utils/Fetch";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../Context/ProfileContext";

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
  const profile = useContext(ProfileContext);
  const [data, setData] = useState<Todo[]>();
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    const response: Page = await FetchData("https://dummyjson.com/todos");
    setData(response.todos);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const gotoEdit = (id: number) => {
    navigate("/edit/" + id);
  };

  return (
    <>
      <h1>Profile: {profile.name}</h1>
      <h1>Menu Page </h1>
      <h2>Count: {count}</h2>
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
              {item.todo} - {item.completed ? "Completed" : "Not Completed"}{" "}
              <button
                onClick={() => {
                  gotoEdit(item.id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                Detail
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Menu;
