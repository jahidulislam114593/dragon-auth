import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import { MdOutlineDateRange } from "react-icons/md";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";

const LeftSideNav = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <div>
      <div className="space-y-6">
        <h2 className="text-xl mb-4 font-semibold">All Category</h2>
        {categorys.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className="block ml-4 text-xl font-semibold"
            key={category.id}
            category={category}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      <div className="mt-8">
        <div className="card card-compact bg-base-100">
          <figure className="rounded-lg">
            <img src={img1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex items-center">
              <span className="mr-4 text-lg font-medium">Sports</span>
              <p className="flex items-center text-xs">
                <MdOutlineDateRange className="mr-2" />
                {moment().format("MMMM D, YYYY")}
              </p>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100">
          <figure className="rounded-lg">
            <img src={img2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex items-center">
              <span className="mr-4 text-lg font-medium">Sports</span>
              <p className="flex items-center text-xs">
                <MdOutlineDateRange className="mr-2" />
                {moment().format("MMMM D, YYYY")}
              </p>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100">
          <figure className="rounded-lg">
            <img src={img3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex items-center">
              <span className="mr-4 text-lg font-medium">Sports</span>
              <p className="flex items-center text-xs">
                <MdOutlineDateRange className="mr-2" />
                {moment().format("MMMM D, YYYY")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
