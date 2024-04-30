import { useCallback, useContext, useEffect, useState } from "react";
import FetchData from "../Utils/Fetch";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../Context/ProfileContext";
import Category from "../types/Category";

const Menu = () => {
  const profile = useContext(ProfileContext);
  const [data, setData] = useState<Category[]>();
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const fetchData = useCallback(async () => {
    const response: Category[] = await FetchData(
      "https://library-crud-sample.vercel.app/api/category",
      options
    );
    setData(response);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const gotoEdit = (id: string) => {
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
              <b>Name:</b> {item.category_name} <br />
              <b>Description:</b> {item.category_description} <br />
              <b>Status:</b> {item.is_active ? "Active" : "Not Active"}
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
