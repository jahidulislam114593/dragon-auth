import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 mb-2">
        <h2 className="text-xl mb-4 font-semibold ">Login with</h2>
        <button className="btn btn-outline w-full mb-2">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login with Github
        </button>
      </div>
      <div className="p-4 mb-2">
        <h2 className="text-xl mb-4 font-semibold ">Find Us On</h2>
        <a
          href=""
          className="p-4 text-lg flex items-center border rounded-t-lg"
        >
          <FaFacebook className="mr-2" />
          <span>Facebook</span>
        </a>
        <a href="" className="p-4 text-lg flex items-center border-x ">
          <FaTwitter className="mr-2" />
          <span>Twitter</span>
        </a>
        <a
          href=""
          className="p-4 text-lg flex items-center border rounded-b-lg"
        >
          <FaInstagram className="mr-2" />
          <span>Instragram</span>
        </a>
      </div>
      <div className="p-4 my-2 bg-[#F3F3F3]">
        <h2 className="text-xl mb-4 font-semibold ">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
