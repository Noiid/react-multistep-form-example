import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Menu from "./page/Menu";
import AddTodo from "./page/AddTodo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/new_todo" element={<AddTodo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
