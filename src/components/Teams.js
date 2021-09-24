import React from "react";
import { Image } from "antd";
const teamComponent = () => {
  return (
    <div className="gachdau1">
      <div id="team">
        <h2 className="textt spac">TEAM</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-8 col-xs-8">
              <Image height={250} src="team/tien.jpg" />
              <h4 className="title_ti">Nguyên Tiến </h4>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-4">
              <Image height={250} src="team/a.jpg" />
              <h4 className="title_ti">Bảo Anh </h4>
            </div>
            <div className="col-md-3 col-sm-8 col-xs-8">
              <Image height={250} src="team/tri.jpg" />
              <h4 className="title_ti">Văn Trí</h4>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-4">
              <Image height={250} src="team/hieu.jpg" />
              <h4 className="title_ti">Duy Hiếu</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(teamComponent);
