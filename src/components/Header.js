import React from "react";
import { helpers } from "../helpers/common";
const HeaderComponent = () => {
  const logoutMovies = () => {
    helpers.removeToken("Token_Login");
  };

  return (
    <div>
      <section>
        <div className="topnav" id="myTopnav">
          <a href="/home" className="tile">
            TAEKWONDO <strong> HANUL</strong>
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
     
        </div>
        <img className="titleanh" src="taekwondo-han-quoc.jpg" alt="Hiep" />
             <div>
              <a
                href="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Fhanuldanangclub%2Fvideos%2F766767617306932%2F&show_text=false&width=560&t=0"
                className="venobox play-btn"
                data-vbtype="video"
                data-autoplay="true"
              >
                {""}
              </a>
            </div>
      </section>
    </div>
  );
};
export default React.memo(HeaderComponent);
