import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import profilePic from "../assets/IMG_20240514_171244.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
const Shared = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <div
        id="sidebar"
        className={`${isSidebarVisible ? "hidden" : "flex"} z-50 fixed`}
      >
        <Sidebar />
      </div>
      <div
        className=""
        // style={{
        //   backgroundImage: `url(${profilePic})`,
        // }}
      >
        {windowWidth <= 1300 && (
          <FontAwesomeIcon
            icon={isSidebarVisible ? faBars : faClose}
            className="float-right text-3xl text-black mt-2 mr-2 cursor-pointer"
            onClick={handleClick}
          />
        )}
      </div>
    </>
  );
};

export default Shared;
