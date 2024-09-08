import { FiBookmark } from "react-icons/fi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

import { Link } from "react-router-dom";

const HomeNewsCard = ({ news }) => {
  const { _id, title, details, author, image_url, rating, total_view } = news;
  return (
    <div className="mb-6 border rounded-lg">
      <div className=" bg-[#F3F3F3] p-2 rounded-t-md flex justify-between">
        <div className="flex items-center space-x-4">
          <img src={author.img} className="w-10 rounded-full" alt="" />
          <div>
            <p className="text-lg font-semibold text-[#403F3F]">
              {author.name}
            </p>
            <p className="text-sm text-gray-500">{author.published_date}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-3xl mr-2">
          <FiBookmark />
          <AiOutlineShareAlt />
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl">{title}</h2>
        <img src={image_url} className="py-4" alt="" />
        {details.length > 150 ? (
          <p className="border-b pb-4">
            <>
              {details.slice(0, 150)}...
              <br />
              <Link to={`/news/${_id}`} className="text-[#FF8C47]">
                Read More
              </Link>
            </>
          </p>
        ) : (
          <p>{details}</p>
        )}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <FaStar className="text-[#FF8C47]" />
            <FaStar className="text-[#FF8C47]" />
            <FaStar className="text-[#FF8C47]" />
            <FaStar className="text-[#FF8C47]" />
            <FaStar className="text-[#FF8C47]" />
            <p className="text-sm font-semibold pl-2">{rating.number}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaRegEye />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsCard;
