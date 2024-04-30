import { useNavigate } from "react-router-dom";
import FetchData from "../Utils/Fetch";

const Profile = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const response = await FetchData(
      "https://library-crud-sample.vercel.app/api/user/logout",
      options
    );
    if (response) {
      localStorage.removeItem("token");
      alert("success logout!");
      navigate("/login");
    }
  };
  return (
    <>
      <h1>Profile Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;
