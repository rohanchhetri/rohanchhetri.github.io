import {
  faBriefcase,
  faEnvelope,
  faHouseChimney,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Profile from "./profile";
import SideItem from "./side_items";
const Sidebar = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col w-[320px] bg-[#040B14] text-[#a49e9e] min-h-dvh pb-28">
        <Profile />
        <SideItem page="Home" pageIcon={faHouseChimney} pageLink="/" />
        <SideItem page="About" pageIcon={faUser} pageLink="/about" />
        <SideItem
          page="Portfolio"
          pageIcon={faBriefcase}
          pageLink="/portfolio"
        />
        <SideItem page="Contact" pageIcon={faEnvelope} pageLink="/contact" />

        <button className="bg-[#36ABE2] text-white w-fit py-2 px-10 rounded-md m-5">
          Hire Me
        </button>
      </div>
    </>
  );
};

export default Sidebar;
