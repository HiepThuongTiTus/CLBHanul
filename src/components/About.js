import React from "react";
const AboutComponent = () => {
  return (
    <div className="gachdau">
      <div className="container" id="about">
        <div className="row">
          <div className="col-md-9">
            <h2 className="text1">GIỚI THIỆU</h2>
            <div className="card tt">
              <img src="5.jpg" alt="Card_image_cap" height="250px;" />
              <p className="tt1">
                Taekwondo là một trong những bộ môn võ thuật yêu thích của người
                Việt.
              </p>
            </div>
            <div className="card tt">
              <img src="5.jpg" alt="Card_image_cap" height="250px;" />
              <p className="tt1">
                Taekwondo là một trong những bộ môn võ thuật yêu thích của người
                Việt.
              </p>
            </div>
            <div className="card tt">
              <img src="5.jpg" alt="Card_image_cap" height="250px;" />
              <p className="tt1">
                Taekwondo là một trong những bộ môn võ thuật yêu thích của người
                Việt.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <h3 className="news text1">TIN TỨC</h3>
            <span className="neww">
              <img className="new1" src="trang.jpg" alt="Card_image_cap" /> Cuộc
              thi đai trắng
              <br />
            </span>
            <span className="neww">
              <img className="new1" src="vang.jpg" alt="Card_image_cap" /> Cuộc
              thi đai vàng
              <br />
            </span>
            <span className="neww">
              <img className="new1" src="xanh.jpg" alt="Card_image_cap" /> Cuộc
              thi đai xanh
              <br />
            </span>
            <span className="neww">
              <img className="new1" src="đỏ.jpg" alt="Card_image_cap" /> Cuộc
              thi đai đỏ
              <br />
            </span>
            <span className="neww">
              <img className="new1" src="den.jpg" alt="Card_image_cap" /> Cuộc
              thi đai đen
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(AboutComponent);
