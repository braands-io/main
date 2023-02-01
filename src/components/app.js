import React, { Suspense } from "react";
import { Router, Location, Redirect } from "@reach/router";
import ScrollToTopBtn from "./menu/ScrollToTop";
import Header from "./menu/header";
import Home4 from "./pages/home4";
import { createGlobalStyle } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from "./pages/aboutUs";

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location]);
  return children;
};

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id="routerhang">
        <div key={location.key}>
          <Router location={location}>{children}</Router>
        </div>
      </div>
    )}
  </Location>
);

const App = () => {
  return (
    <div className="wraper">
      <GlobalStyles />
      <ToastContainer
        autoClose={2000}
        position="bottom-right"
        hideProgressBar="false"
        closeOnClick="true"
        pauseOnHover="true"
        draggable="true"
      />

      <Header />
      <Suspense
        fallback={
          <>
            <div className="siteLoader page active"></div>
          </>
        }
      >
        <PosedRouter>
          <ScrollTop path="/">
            <Home4 exact path="/">
              <Redirect to="/home" />
            </Home4>
            <AboutUs path="/about-us" />

            {/* <SearchResult path="/result/:searchKey" />
            <Trade path="/trade" />

            <Auction path="/auction" />
            <AuctionTop path="/auction/:nftTitle" />
            <AuctionDetails path="/auctionDetail/:nftId" />

            <Colectiongrey path="/profile/:collectionId" />

            <ItemDetailReduxgrey path="/details" />
            <ItemDetailReduxgrey path="/details/:nftId" />

            <Purchase path="/purchase/:slug" />

            <Contact path="/contact" />

            <Dummy path="/dummy/:search" />
            <EnsResult path="/ensResult/:query" />
            <Privacy path="/privacy" />
            <TermsOfUse path="/terms-of-use" />
            <KYCPolicy path="/kyc-policy" />
            <AMLPolicy path="/aml-policy" />
            <AboutUs path="/about-us" />
            <Sponsors path = "refer/:address" />
            <SearchPage path = "/search" />
            <DomainBranding path="/domainbranding" />
            <TldsPage path= "/tlds" />
            <NftDetail path="/nft-detail/:tokenId" />
            <CarrerPage path= "/careers" />

            <DemoTest  path="mdemo"/>

            <NotFound path="/not-found" /> */}
          </ScrollTop>
        </PosedRouter>
      </Suspense>

      <ScrollToTopBtn />
    </div>
  );
};
export default App;
