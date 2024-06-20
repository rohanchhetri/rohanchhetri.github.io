import { useEffect, useState } from "react";
import Shared from "../components/shared";
const About = () => {
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

  return (
    <>
      <Shared />
      <div className={`${windowWidth >= 1300 && "left-[350px] absolute"}`}>
        About
      </div>
    </>
  );
};

export default About;
