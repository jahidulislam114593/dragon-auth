import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-3 rounded-sm text-black font-semibold mb-2">
      <button className="btn btn-secondary">Latest</button>
      <Marquee pauseOnHover={true}>
        <Link to="/" className="mr-12">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as.........
        </Link>
        <Link to="/" className="mr-12">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to="/" className="mr-12">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to="/" className="mr-12">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
