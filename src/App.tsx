import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Menu from "./page/Menu";
import AddTodo from "./page/AddTodo";
import { useState } from "react";
import { ProfileContext } from "./Context/ProfileContext";
import GlobalProfile from "./types/GlobalProfile";
import EditTodo from "./page/EditTodo";
import PrivateRoute from "./route/PrivateRoute";
import Profile from "./page/Profile";
import Login from "./page/Login";

function App() {
  const [profile, setProfile] = useState("anonymous");

  const changeName = (values: string) => {
    setProfile(values);
  };

  const thisContext: GlobalProfile = {
    name: profile,
    setName: changeName,
  };

  return (
    <ProfileContext.Provider value={thisContext}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/new_todo" element={<AddTodo />}></Route>
          <Route path="/edit/:id" element={<EditTodo />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProfileContext.Provider>
  );
}

export default App;
