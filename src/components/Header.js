import React from "react";
import { helpers } from "../helpers/common";
export const HeaderComponent = (props) => {
  const logoutMovies = () => {
    helpers.removeToken("Token_Login");
  };

  return (
    <div>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              TAEKWONDO <strong> HANUL</strong>
            </a>{" "}
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/home" className="page-scroll">
                  TRANG CHỦ
                </a>
              </li>
              <li>
                <a href="#activate" className="page-scroll">
                  HOẠT ĐỘNG
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  TEAM
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  GIỚI THIỆU
                </a>
              </li>
              <li>
                {helpers.getTokenLocalStorage() == null && (
                  <a href="/login" className="page-scroll">
                    {" "}
                    ĐĂNG NHẬP
                  </a>
                )}
              </li>
              <li>
                  {helpers.getTokenLocalStorage() !== null && (
                    <a
                      href="/"
                      className="page-scroll"
                      onClick={() => logoutMovies()}
                    >
                      ĐĂNG XUẤT
                    </a>
                  )}
              </li>
              <li>
                <a
                  href="https://forms.office.com/r/9ZYxp4jSaS"
                  className="page-scroll"
                >
                  ĐĂNG KÝ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                <a
                    href="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Fhanuldanangclub%2Fvideos%2F766767617306932%2F&show_text=false&width=560&t=0"
                    className="venobox play-btn"
                    data-vbtype="video"
                    data-autoplay="true"
                  >
                    {""}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default React.memo(HeaderComponent);
