import Icon from "./icon";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import profilePic from "../assets/IMG_20240514_171244.jpg";
const Profile = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full ">
        <div className="p-2 my-3 bg-[lightgrey] rounded-full">
          <div className="bg-[lightgrey] rounded-full w-24 h-24 overflow-hidden ">
            <img src={profilePic} alt=".src\assets\IMG_20240514_171244.jpg" />
          </div>
        </div>
        <p className="text-2xl my-2">Rohan Chhetri</p>
        <div className="flex flex-row justify-center gap-4 w-full my-3">
          <Icon
            icon={faFacebook}
            link="https://www.facebook.com/me.rohanchhetri"
            hoverColor={"#1877F2"}
          />{" "}
          <Icon icon={faLinkedin} link="/" hoverColor={"0E76A8"} />
          <Icon icon={faGithub} link="/" hoverColor={"#000"} />
          <Icon icon={faInstagram} link="/" hoverColor={`#CD2779`} />
          <Icon icon={faXTwitter} link="/" hoverColor={"#000"} />
        </div>
      </div>
    </>
  );
};

export default Profile;
