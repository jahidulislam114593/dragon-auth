import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto py-6" src={logo} alt="" />
      <p className="py-2">Journalism Without Fear or Favour</p>
      <p className="mb-4 text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
