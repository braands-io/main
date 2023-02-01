import React, { useEffect, useState } from "react";
import {
  BreakpointProvider,
  setDefaultBreakpoints,
} from "react-socks";
import { Link } from "@reach/router";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { createGlobalStyle } from "styled-components";
import { SiBinance } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { TbWallet } from "react-icons/tb";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";

setDefaultBreakpoints([{ xs: 0 }, { l: 1199 }, { xl: 1200 }]);

const GlobalStyles = createGlobalStyle`
.top-search-bar{
  display: flex;
  margin: 0px auto;
  width: auto;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 5px 0px !important;
  overflow: hidden;
  border-radius: 40px;

  .top-search-bar-left{
    position: relative;
    transition: all 1s;
    &.active{
      input{
        margin-left: 0px;
      }
    }
    input{
      border: 0px;
      margin-left: -290px;
      width: 350px;
      @media(min-width:1200px){
        margin-left: -437px;
        width: 500px;
      }
      transition: all 1s;
      &:focus{
        box-shadow: none !important;
      }
    }
    .text-input-btn-left{
      transition: all 1s;
      position: absolute;
      top: -2px;
      right: 0px;
      background: transparent;
    }
  }
  .top-search-bar-right{
    display: flex;
    align-items: center;
  }
}

  .network-select-box-container{
    position: absolute;
    right: 20px;
    color: black;
    background: #F20D6B;
    width: 68px;
    border-radius: 10px;
    li{
      list-style: none;
      padding: 0px;
      margin: 0px;
      padding: 3px 6px;
      color: white;
      font-weight: 500;
    }
  }
  .network-select-box{
    margin-left: 0.5rem;
    padding: 2px 13px 2px 12px;
    background: #F20D6B;
    border-radius: 120px;
    color: #fff;
  }
  @keyframes widthAni {
    from {width: 0%;}
    to {width: 100%;}
  }
  .breakpoint__l-down {
    .menu{
    height: 100vh;
    transition: all 0.2s;
    animation: widthAni 0.4s;
    }
  }
  .mb--2{
    margin-bottom: -2px;
  }
  .mt--2{
    margin-top: -2px;
  }
  @keyframes marginRight {
    from { margin-right: -200px; }
    to {margin-right: 0%; }
  }
  .toggle-network-container{
    margin-right: -133px;
    transition: all 1s;
    &.active{
      // display: block !important;
      // animation: marginRight 1s;
      margin-right: 0px;
    }
  }
`;

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? "active" : "non-active",
      };
    }}
  />
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Header = function ({ className }) {
  const [networkToggle, setNetworkToggle] = React.useState("97");

  const [openPopup, setOpenPopup] = useState(false);

  const [showmenu, btn_icon] = useState(false);
  const matches = useMediaQuery("(min-width:568px)");
  const [showSwitch, setShowSwitch] = React.useState(false);

  useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");
      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  const [toggleNetwork, setToggleNetwork] = useState(true);

  const handleSwitchTab = () => {
    setShowSwitch((prev) => !prev);
  };
  return (
    <>
      <GlobalStyles />

      <header
        className={`navbar white ${className}`}
        id="myHeader"
        style={{ background: "white" }}
      >
        <div className="container">
          <div className="row w-100-nav">
            <div className="logo px-0">
              <div className="navbar-title navbar-logo-pink navbar-item">
                <NavLink to="/">
                  <img
                    width="180"
                    height="41"
                    src="/img/braands_pink_logo.png"
                    className="img-logo img-fluid d-block"
                    alt="#"
                  />
                  <img
                    width="484"
                    height="110"
                    src="/img/braands_pink_logo.png"
                    className="img-logo img-fluid d-3"
                    alt="#"
                  />
                  <img
                    width="484"
                    height="110"
                    src="/img/braands_pink_logo.png"
                    className="img-logo img-fluid d-4"
                    alt="#"
                  />
                  <img
                    width="484"
                    height="110"
                    src="/img/braands_pink_logo.png"
                    className="img-logo img-fluid d-none"
                    alt="#"
                  />
                </NavLink>
              </div>
              <div className="navbar-title navbar-logo-white navbar-item">
                <NavLink to="/">
                  <img
                    width="180"
                    height="41"
                    src="/img/braands_logo.png"
                    className="img-logo img-fluid d-block"
                    alt="#"
                  />
                  <img
                    width="484"
                    height="110"
                    src="/img/braands_logo.png"
                    className="img-logo img-fluid d-3"
                    alt="#"
                  />
                  <img
                    width="484"
                    height="110"
                    src="/img/braands_logo.png"
                    className="img-logo img-fluid d-4"
                    alt="#"
                  />
                  <img
                    width="484"
                    height="110"
                    src="/img/braands_logo.png"
                    className="img-logo img-fluid d-none"
                    alt="#"
                  />
                </NavLink>
              </div>
            </div>
            <BreakpointProvider>
              <div className="d-flex mx-auto w-auto align-items-center top-search-bar-wrapper">
                <div className="top-search-bar">
                  <div className={`top-search-bar-left ${toggleNetwork && "active"}`}>
                    <input
                      type="text"
                      className="form-control mb-0 px-3 text-input"
                      placeholder="Search"
                    />
                    <button
                      className="d-flex border-0 text-input-btn-left"
                      id="btn-submit-1"
                      onClick={() => {
                        setToggleNetwork(prev => !prev);
                      }}
                    >
                      <img
                        src="/img/app-icon.png"
                        className="border-end pe-2"
                        height="40px"
                        width="50px"
                        alt="search"
                      />
                    </button>
                  </div>
                  <div className="top-search-bar-right">
                    <Tooltip
                      title="Change Network"
                      placement="top-start"
                      componentsProps={{
                        tooltip: {
                          sx: {
                            bgcolor: "#f20d6b",
                          },
                        },
                      }}
                    >
                      <div
                        className="network-select-box cursor-pointer d-flex align-items-center h-100 "
                        onClick={() => {
                          setToggleNetwork(prev => !prev);
                        }}
                      >
                        <SiBinance />
                      </div>
                    </Tooltip>

                    <div className={`toggle-network-container d-flex px-2 ${!toggleNetwork && "active"}`}>
                      <input
                        type="radio"
                        label="radio-checkinput"
                        className="form-check-input"
                        name="network"
                        style={{ accentColor: "red" }}
                      />
                      <span className="toggle-network-text text-black">
                        &nbsp;BSC
                      </span>
                      &nbsp;&nbsp;
                      <input
                        type="radio"
                        className="form-check-input"
                        name="network"
                      />
                      <span className="toggle-network-text text-black">
                        &nbsp;MATIC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </BreakpointProvider>

            <div className="breakpoint__xl-only ">
              <div className="menu">
                <div className="navbar-item">
                  <a href="/auction">
                    Auction
                    <span className="lines"></span>
                  </a>
                </div>
                <div className="navbar-item">
                  <a href="/trade">
                    Trade
                    <span className="lines"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mainside">
              <div
                className="connect-wallet"
                onClick={() => setOpenPopup(true)}
              >
                <TbWallet />{" "}
                <span className="connect-wallet-txt">Connect Wallet</span>
              </div>
            </div>
          </div>

          {openPopup && (
            <div className="checkout">
              <div className="maincheckout">
                <button
                  className="btn-close"
                  onClick={() => setOpenPopup(false)}
                >
                  x
                </button>
                <div className="heading mt-3 text-center">
                  <h2 className="mb-0">Connect Wallet</h2>
                  <p className="mb-4 text-black">Unique and Yours Forever</p>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb30 px-5">
                    <span
                      className="box-url text-center cursor-pointer"
                    >
                      <span
                        className="box-url-label"
                        style={{ top: "5px", right: "5px", fontSize: "12px" }}
                      >
                        Most Popular
                      </span>
                      <img
                        src="./img/wallet/1.png"
                        alt=""
                        style={{ width: "70px", height: "70px" }}
                        className="mb20 mt-2"
                      />
                    </span>
                    <h4 className="text-center mt-2 mb-0">Metamask</h4>
                  </div>
                  <div
                    className="col-lg-6 mb30 px-5"
                    style={{ borderLeft: "1px solid rgba(0, 0, 0, .2)" }}
                  >
                    <span
                      className="box-url text-center cursor-pointer"
                    >
                      <img
                        src="./img/wallet/4.png"
                        style={{ width: "70px", height: "70px" }}
                        alt=""
                        className="mb20 mt-2"
                      />
                    </span>
                    <h4 className="text-center mt-2 mb-0">WalletConnect</h4>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
export default Header;
