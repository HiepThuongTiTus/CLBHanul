import React from "react";
import { Image } from "antd";
const teamComponent = () => {
  return (
    <div className="gachdau1">
      <div id="team" className="text-center">
        <h2 className="text1">TEAM</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-8 col-xs-8">
              <Image width={250} height={250} src="team/tien.jpg" />
              <h4>Nguyên Tiến </h4>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-4">
              <Image width={250} height={250} src="team/a.jpg" />
              <h4>Bảo Anh </h4>
            </div>
            <div className="col-md-3 col-sm-8 col-xs-8">
              <Image width={250} height={250} src="team/tri.jpg" />
              <h4>Văn Trí</h4>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-4">
              <Image width={250} height={250} src="team/hieu.jpg" />
              <h4>Duy Hiếu</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(teamComponent);
