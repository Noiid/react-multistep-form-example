import { useEffect, useState } from "react";
import FetchData from "../Utils/Fetch";
import { useNavigate, useParams } from "react-router-dom";
import Category from "../types/Category";

const EditTodo = () => {
  const idParams = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [is_active, setIsActive] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const optionsGet = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      try {
        const response: Category = await FetchData(
          `https://library-crud-sample.vercel.app/api/category/${idParams.id}`,
          optionsGet
        );
        setName(response.category_name);
        setDescription(response.category_description);
        setIsActive(response.is_active);
        setId(response.id);
      } catch (error: any) {
        alert(error.message);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("trigger submit");
    const newCategory: Category = {
      category_name: name,
      category_description: description,
      is_active: is_active,
      id: id,
    };

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newCategory),
    };

    const response = await FetchData(
      `https://library-crud-sample.vercel.app/api/category/update`,
      options
    );
    if (response) {
      alert("success edit todo!");
      navigate("/menu");
    }
  };

  return (
    <>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e: any) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e: any) => {
            setDescription(e.target.value);
          }}
          value={description}
        />

        <button>Save</button>
      </form>
    </>
  );
};

export default EditTodo;
