import React from "react";
import { Image } from "antd";
const DetailComponent = () => {
  return (
    <div className="detail-acti">
      <section id="activate">
        <h2 className="textt">HOẠT ĐỘNG</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-8 col-sm-8">
              <Image className="acti" width={350} height={250} src="1.jpg" />
            </div>
            <div className="col-md-4 col-xs-4 col-sm-4">
              <Image className="acti" width={350} height={250} src="2.jpg" />
            </div>
            <div className="col-md-4 col-xs-4 col-sm-4">
              <Image className="acti" width={350} height={250} src="3.jpg" />
            </div>
            <div className="col-md-4 col-xs-8 col-sm-8">
              <Image className="acti" width={350} height={250} src="10.jpg" />
            </div>
            <div className="col-md-4 col-xs-4 col-sm-4">
              <Image className="acti" width={350} height={250} src="5.jpg" />
            </div>
            <div className="col-md-4 col-xs-4 col-sm-4">
              <Image className="acti" width={350} height={250} src="12.jpg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default React.memo(DetailComponent);
