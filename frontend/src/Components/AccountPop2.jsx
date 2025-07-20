import { useEffect, useState } from "react";
import "../Css/accountPop.css";
import avatar from "../img/avatar.png";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useSelector } from "react-redux";
function AccountPop() {
  const backendURL = "http://localhost:3000"
  // const backendURL = "http://localhost:3000";
  const [profile, setProfile] = useState("");
  const [theme, setTheme] = useState(() => {
    const Dark = localStorage.getItem("Dark");
    return Dark ? JSON.parse(Dark) : false;
  });
  const [ChannelID, setChannelID] = useState();
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  useEffect(() => {
    localStorage.setItem("Dark", JSON.stringify(theme));
  }, [theme]);

  const User = useSelector((state) => state.user.user);
  const { user } = User;

  useEffect(() => {
    const getUserData = async () => {
      try {
        if (user?.email) {
          const response = await fetch(
            `${backendURL}/getuserimage/${user?.email}`
          );
          const { channelIMG } = await response.json();
          setProfile(channelIMG);
        }
      } catch (error) {
        console.log("Error fetching user data:", error.message);
      }
    };

    getUserData();
  }, [user?.email]);

  useEffect(() => {
    const getChannelID = async () => {
      try {
        if (user?.email) {
          const response = await fetch(
            `${backendURL}/getchannelid/${user?.email}`
          );
          const { channelID } = await response.json();
          setChannelID(channelID);
        }
      } catch (error) {
        console.log("Error fetching user data:", error.message);
      }
    };

    getChannelID();
  }, [user?.email]);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${backendURL}/logout`, {
        credentials: "include",
      });
      const { success, message } = await response.json();
      if (success) {
        alert(message);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className={theme ? "account-pop2" : "account-pop2 light-mode"}
        style={
          isBtnClicked === false ? { display: "block" } : { display: "none" }
        }
      >
        <div className="user-section">
          <div className="left-part">
            <img
              src={profile ? profile : avatar}
              alt="channelIMG"
              className="channelIMG"
            />
          </div>
          <div className="right-part">
            <p>{user?.name}</p>
            <Tooltip
              TransitionComponent={Zoom}
              title={user?.email}
              placement="bottom"
            >
              <p>
                {user?.email.slice(0, 12)}
                {user?.email.length > 12 ? "..." : ""}
              </p>
            </Tooltip>
          </div>
        </div>
        <hr className={theme ? "seperate" : "seperate seperate-light"} />
        <div className="about-channel-section">
          <div
            className={
              theme ? "yourchannel c-sec" : "yourchannel c-sec preview-lightt"
            }
            onClick={() => {
              window.location.href = `/channel/${ChannelID}`;
            }}
          >
            <AccountBoxOutlinedIcon
              fontSize="medium"
              style={{ color: theme ? "#909090" : "black" }}
            />
            <p>Your channel</p>
          </div>
          <div
            className={
              theme ? "yourstudio c-sec" : "yourstudio c-sec preview-lightt"
            }
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <YouTubeIcon
              fontSize="medium"
              style={{ color: theme ? "#909090" : "black" }}
            />
            <p>YouTube</p>
          </div>
       
        </div>
        <hr className={theme ? "seperate" : "seperate seperate-light"} />
        <div className="extra1-section">
          <div
            className={
              theme ? "language c-sec" : "language c-sec preview-lightt"
            }
          >
            <TranslateOutlinedIcon
              fontSize="medium"
              style={{ color: theme ? "#909090" : "black" }}
            />
            <p>Language: English</p>
          </div>
          <div
            className={theme ? "exitout c-sec" : "exitout c-sec preview-lightt"}
            onClick={handleLogout}
          >
            <LogoutOutlinedIcon
              fontSize="medium"
              style={{ color: theme ? "#909090" : "black" }}
            />
            <p>Sign Out</p>
          </div>
        </div>
      </div>
      <div
        className={theme ? "account-pop2" : "account-pop2 light-mode"}
        style={
          isBtnClicked === true
            ? { display: "block", paddingTop: "12px" }
            : { display: "none", paddingTop: "20px" }
        }
      >
      
        <hr
          className={theme ? "seperate" : "seperate seperate-light"}
          style={
            isBtnClicked === true ? { marginTop: "6px" } : { marginTop: "15px" }
          }
        />
        <div className="theme-section">
          <p className="caution">Settings applied to this browser only</p>
          <div className="theme-list">
            <div
              className={theme ? "dark-theme" : "dark-theme preview-lightt"}
              onClick={() => {
                setTheme(true);
                window.location.reload();
              }}
            >
              <DoneOutlinedIcon
                className="dark-arrow"
                fontSize="medium"
                style={{ opacity: theme ? "1" : "0" }}
              />
              <p>Dark theme</p>
            </div>
            <div
              className={theme ? "light-theme" : "light-theme preview-lightt"}
              onClick={() => {
                setTheme(false);
                window.location.reload();
              }}
            >
              <DoneOutlinedIcon
                className="light-arrow"
                fontSize="medium"
                style={{ opacity: !theme ? "1" : "0" }}
              />
              <p>Light theme</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountPop;
