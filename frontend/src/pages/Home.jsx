import React from "react";
import HomeTable from "../components/tables/HomeTable";

const Home = () => {
  return (
    <div>
      <h1 className="text-center font-sekune text-lg mt-6 font-bold text-[24px]">
        Welcome to <span className="text-red-700">Ahlatlı Group</span> Personal
        List App
      </h1>
      <HomeTable />
    </div>
  );
};

export default Home;
