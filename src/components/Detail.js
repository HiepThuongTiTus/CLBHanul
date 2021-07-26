import React from "react";
import { Image } from "antd";
const DetailComponent = () => {
  return (
    <div>
      <section id="activate">
        <h2 className="textt">HOẠT ĐỘNG</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Image width={350} height={350} src="1.jpg" />
            </div>
            <div className="col-md-4">
              <Image width={350} height={350} src="2.jpg" />
            </div>
            <div className="col-md-4">
              <Image width={350} height={350} src="3.jpg" />
            </div>
            <div className="col-md-4">
              <Image width={350} height={350} src="10.jpg" />
            </div>
            <div className="col-md-4">
              <Image width={350} height={350} src="5.jpg" />
            </div>
            <div className="col-md-4">
              <Image width={350} height={350} src="12.jpg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default React.memo(DetailComponent);
