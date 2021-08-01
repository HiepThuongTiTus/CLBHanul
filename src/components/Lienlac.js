import React from "react";
const lienLacComponent = () => {
  return (
    <div>
      <img className="lienlac" src="taek.jpg" alt="Hiep" />
      <div className="text-inner text-center">
        <h1 className="lienlac-chu"> TAEKWONDO HANUL </h1>
        <p className="lienlac-p">HÃY LIÊN LẠC VỚI CLB ĐỂ THỰC HIỆN ĐAM MÊ NHÉ!</p>
      </div>
      <img className="lienlac1" src="laco.png" alt="Hiep" />
      <img className="lienlac1" src="laco.png" alt="Hiep" />
    </div>
  );
};
export default React.memo(lienLacComponent);
