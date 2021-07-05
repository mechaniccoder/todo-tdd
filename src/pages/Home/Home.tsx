import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      <h1>Home Page</h1>
      <div>go to sign up</div>
      {/* <Link to="/signup">go to sign up</Link> */}
    </div>
  );
};

export default Home;
