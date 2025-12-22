"use client";

import { useUser } from "@/context/UserContext";

const Home = () => {
  const user = useUser();
  console.log("use user", user);
  return <div>Home</div>;
};

export default Home;
