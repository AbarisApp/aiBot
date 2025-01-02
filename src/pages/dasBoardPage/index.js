import { Outlet, useParams } from "react-router-dom";
import Aside from "../../common/aside/Aside";
import Header from "../../common/header/Header";
import SideBarRight from "../../common/sideBarRight/SideBarRight";
import { useState } from "react";
import Preloadar from "../../common/loader/PreLoader";

function DasBoardPage() {
  const [showAsideBar, setShowAsideBar] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const params = useParams();

  const handleAsideBar = () => {
    setShowAsideBar(!showAsideBar);
  };

  // Simulating loading for 2 seconds
  setTimeout(() => {
    setPreloader(false);
  }, 2000);

  return (
    <>
      {!preloader ? (
        <div id="main-wrapper" className="show menu-toggle">
          <Header showAsideBar={handleAsideBar} toggle={toggle} setToggle={setToggle} />
          <div className="main-wrapper-details">
            <Aside showAsideBar={showAsideBar} />
            <div
              className={`content-body ${!showAsideBar ? "hide" : ""}`}
              style={{ minHeight: "" }}
            >
              <div className="">
                <Outlet />
              </div>
            </div>
            <div
              className={toggle ? "overlay2" : ""}
              onClick={() => setToggle(false)}
            ></div>
          </div>
        </div>
      ) : (
        <Preloadar />
      )}
      <div className="sidebar-right">
        {["end"].map((placement, idx) => (
          <SideBarRight key={idx} placement={placement} name={placement} />
        ))}
      </div>
    </>
  );
}

export default DasBoardPage;
