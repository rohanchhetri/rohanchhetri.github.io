import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Icon = ({ icon, link, hoverColor }) => {
  return (
    <>
      <div className="flex justify-center items-center rounded-full bg-[#393939] w-10 h-10 ">
        <Link to={link} target="_blank">
          <FontAwesomeIcon
            className={`text-[white] text-[1.5em] w-7 h-7 rounded-full p-2 mt-0.5 hover:bg-white`}
            icon={icon}
            onMouseOver={(e) => (e.currentTarget.style.color = hoverColor)}
            onMouseOut={(e) => (e.currentTarget.style.color = "white")}
          />{" "}
        </Link>
      </div>
    </>
  );
};
Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
};

export default Icon;
