import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const AddFriend = () => {
  const history = useHistory();

  const [newFriend, setNewFriend] = useState({
    id: Math.random(),
    name: "",
    age: "",
    email: "",
  });

  const handleAddSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    axios
      .post("http://localhost:9000/api/friends", newFriend, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setNewFriend({ ...newFriend, name: "", age: "", email: "" });
        history.push("/FriendsList");
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (event) => {
    setNewFriend({ ...newFriend, [event.target.name]: event.target.value });
  };

  return (
    <div className={{ flexDirection: "column" }}>
      <form onSubmit={handleAddSubmit}>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="email"
          value={newFriend.email}
          onChange={handleOnChange}
        />
        <input
          type="number"
          name="age"
          value={newFriend.age}
          onChange={handleOnChange}
        />

        <button type="submit">Ekle</button>
      </form>
    </div>
  );
};

export default AddFriend;
