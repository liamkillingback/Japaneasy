import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/LoaderSpinner";


const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  const get_users = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/auth/userRankings"
      );
      let sorted_users = response.data.users;
      sorted_users.sort((a, b) => b.points - a.points)
      setUsers(sorted_users);
      setLoading(false)
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    get_users();
  }, []);
  return (
    <div className="w-full h-full items-center justify-center flex absolute top-0 left-0">
      <div className="w-[90%] sm:h-[85%] h-[78%] sm:mt-24 rounded-xl mb-10 mt-24 items-center justify-center bg-[rgba(13,18,29,0.96)]">
        <div className="branches w-full h-full flex items-center flex-col p-10">
          <h1 className="text-[2.5rem] text-[#FF851B]">Leaderboard</h1>
          <div className={`m-10 border w-full h-full flex flex-col ${loading ? "items-center justify-center" : "items-left"}`}>
            {loading ? <Loader></Loader> : users?.map((user, index) => (
              <div className="w-full border-b text-[1.5rem] flex flex-row justify-evenly" key={index}>
                <p>{user.username}</p>
                <p>Score: {user.points}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
