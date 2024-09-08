import React from "react";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-3xl">News Details</h2>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default News;
