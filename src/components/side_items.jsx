import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
const SideItem = ({ page, pageIcon, pageLink }) => {
  const location = useLocation();
  let isActive = false;
  isActive = location.pathname === pageLink;
  const activeColor = "text-[#36ABE2]";
  const inactiveColor = "text-white";
  const listItemStyle =
    "flex justify-start gap-5 items-center list-none text-[1rem] pl-6 py-3 hover:text-white";
  return (
    <>
      <Link to={pageLink}>
        <li className={listItemStyle}>
          <FontAwesomeIcon
            icon={pageIcon}
            className={`${isActive ? activeColor : inactiveColor}`}
          />
          {page}
        </li>
      </Link>
    </>
  );
};
SideItem.propTypes = {
  page: PropTypes.string.isRequired,
  pageIcon: PropTypes.object.isRequired,
  pageLink: PropTypes.string.isRequired,
};
export default SideItem;
