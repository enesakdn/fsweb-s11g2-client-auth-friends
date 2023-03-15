import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const FriendsList = () => {
  const token = localStorage.getItem("token");

  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {friends.map((friend) => (
        <div key={friend.id}>
          <p>{friend.name}</p>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
