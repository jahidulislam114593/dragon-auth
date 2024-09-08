import React from "react";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import LatestNews from "./LatestNews";
import HomeNewsCard from "./HomeNewsCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <Header />
      <LatestNews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav />
        </div>
        <div className="col-span-2 ">
          <h2 className="text-xl mb-4 font-semibold">Dragon News Home</h2>
          {news.map((aNew) => (
            <HomeNewsCard news={aNew} key={aNew._id}></HomeNewsCard>
          ))}
        </div>
        <div className="">
          <RightSideNav />{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
