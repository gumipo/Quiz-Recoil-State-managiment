import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Link to="/quiz">go Quiz</Link>
    </div>
  );
};

export default Home;
