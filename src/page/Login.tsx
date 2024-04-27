import { useState } from "react";
import FetchData from "../Utils/Fetch";
import { useNavigate } from "react-router-dom";

interface Login {
  email: string;
  password: string;
}

interface ResponseLogin {
  token: string;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("trigger submit");
    const newLogin: Login = {
      email: email,
      password: password,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLogin),
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    const response = await FetchData(
      "https://library-crud-sample.vercel.app/api/user/login",
      options
    );
    if (response) {
      const data: ResponseLogin = response;
      localStorage.setItem("token", data.token);
      alert("success login!");
      navigate("/profile");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />

        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
