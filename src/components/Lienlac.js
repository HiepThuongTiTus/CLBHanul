import React from "react";
const lienLacComponent = () => {
  return (
    <div>
      <img className="lienlac" src="taek.jpg" alt="Hiep" />
      <div className="text-inner text-center">
        <h1> TAEKWONDO HANUL </h1>
        <p>HÃY LIÊN LẠC VỚI CLB ĐỂ THỰC HIỆN ĐAM MÊ NHÉ!</p>
      </div>
    </div>
  );
};
export default React.memo(lienLacComponent);
