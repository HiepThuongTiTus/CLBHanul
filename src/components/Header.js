import React from "react";
import { helpers } from "../helpers/common";
const HeaderComponent = () => {
  const logoutMovies = () => {
    helpers.removeToken("Token_Login");
  };

  return (
    <div>
      <section className="nav-title">
        <div className="item t0">
          <i className="fa fa-map-marker" aria-hidden="true"></i> 08 Nguyễn
          Chánh - Đà Nẵng
        </div>
        <div className="item t1">
          <i className="fa fa-phone t"></i> 0961547617
        </div>
      </section>
      <section>
        <img className="titleanh" src="nen.jpg" alt="Hiep" />
        <div className="topnav" id="myTopnav">
          <a href="/home" className="tile">
            TAEKWONDO HANUL
          </a>
          <a href="/home">TRANG CHỦ</a>
          <a href="#activate">HOẠT ĐỘNG</a>
          <a href="#team">TEAM</a>
          <a href="#about">GIỚI THIỆU</a>
          {helpers.getTokenLocalStorage() == null && (
            <a href="/login"> ĐĂNG NHẬP</a>
          )}

          {helpers.getTokenLocalStorage() !== null && (
            <a href="/" onClick={() => logoutMovies()}>
              ĐĂNG XUẤT
            </a>
          )}
          <a href="https://forms.office.com/r/9ZYxp4jSaS">ĐĂNG KÝ</a>
          <a href="/" className="icon">
            <i className="fa fa-bars"></i>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h3 className="titlechu">TAEKWONDO HANUL</h3>
            </div>
            <div className="col-lg-3 d-flex align-items-center justify-content-center">
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
        <div className="polaroid rotate_left">
          <img src="1.jpg" alt="Pulpit rock" width="100" height="120" />
        </div>

        <div className="polaroid rotate_left">
          <img src="2.jpg" alt="Monterosso al Mare" width="100" height="120" />
        </div>
        <p className="rotate_center"> Welcome to Taekwondo</p>
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-xs-6 col-sm-6">
              <img
                src="2.jpg"
                alt="Monterosso al Mare"
                width="100"
                height="120"
              />
            </div>
            <div className="col-md-3 col-xs-6 col-sm-6">
              <img
                src="2.jpg"
                alt="Monterosso al Mare"
                width="100"
                height="120"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default React.memo(HeaderComponent);
