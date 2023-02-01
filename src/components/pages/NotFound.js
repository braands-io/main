import { createGlobalStyle } from "styled-components";
import Footer1 from "../components/footer1";

const GlobalStyles = createGlobalStyle`
  .navbar{
    background: #fff;
  }
  .navbar.sticky.white{
    background: #fff !important;
    border-bottom: none;
    .navbar-logo-white{
      display: none;
    }
    .navbar-logo-pink{
      display: block;
    }
  }
  .btn-main.inline.white{
    background: rgba(255, 234, 242, 1);
    color: black !important;
  }
`;

export default function NotFound() {
    return (
        <>
            <GlobalStyles />
            <section>
                <div className="text-center mt-5">
                    <img className="nothingfoundImage" src="/img/nothing-found/nothing-found.svg" alt="1234" width="40%" />

                </div>
                <div className="text-center mt-3">
                    <button className="btn-main ms-3" onClick={() => window.location.href = "/"}>Back to Home</button>
                </div>
            </section>
            <Footer1 />
        </>
    )
}