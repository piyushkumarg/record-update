import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");

  const addData = () => {
    setData([
      ...data,
      {
        // name: name,
        // email: email,

        // or
        name,
        email,
      },
    ]);
  };

  return (
    <div className="home">
      <div className="home-cont">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Email"
        />
        <button onClick={addData}>Add</button>
      </div>
    </div>
  );
};

export default Home;
