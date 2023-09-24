import React, { useState } from "react";
export default function Form() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handleSubmit = (e) => {
    console.log("submitted");
    let info = {
      name,
      email,
      password,
    };
    console.log(info);
    e.preventDefault();
  };

  const handleChange = (e) => {
    // const info = e.target.name;
    // if (info === "name") {
    //   setUser({ name: e.target.value, email, password });
    // }
    // if (info === "email") {
    //   setUser({ name, email: e.target.value, password });
    // }
    // if (info === "password") {
    //   setUser({ name, email, password: e.target.value });
    // }

    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="forDiv">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            value={name}
          />
        </div>

        <div className="forDiv">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            value={email}
          />
        </div>

        <div className="forDiv">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
            value={password}
          />
        </div>

        <button className="forDiv" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
