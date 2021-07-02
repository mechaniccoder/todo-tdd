import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handler = () => {
    setTimeout(() => {
      setOpen(true);
    }, 100);
  };
  return (
    <div>
      <div>go to sign up</div>
      <button onClick={handler}>submit</button>
      {/* <Link to="/signup">go to sign up</Link> */}
      {open && <p>lorem</p>}
    </div>
  );
};

export default Home;
