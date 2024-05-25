import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     //for optimisation and to avoid lags we'll use Loader and useLoaderData()
  //     fetch("https://api.github.com/users/vrushaliTambat")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div
      className="text-center m-4 bg-gray-600 text-white p-4 
    text-3xl"
    >
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Github dp" width={300} />
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/vrushaliTambat");
  return response.json();
};
