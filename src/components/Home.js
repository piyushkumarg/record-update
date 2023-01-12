import React, { useState } from "react";
import "./home.css";

const Home = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    setForm({ form });
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div className="home">
      <div className="home-cont">
        <input
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          type="text"
          placeholder="Name"
        />

        <input
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          type="text"
          placeholder="Email"
        />
        <button onClick={addData}>Add</button>
      </div>

      <div className="detail_cont">
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Delete</h4>
      </div>

      {Array.isArray(data)
        ? data.map((element, index) => {
            return (
              <div className="detail_cont">
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <button onClick={() => removeItem(index)}>Delete</button>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Home;
