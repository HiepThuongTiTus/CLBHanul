import React from "react";
import { Row, Col } from "antd";
import { helpers } from "../helpers/common";
const HanulComponent = () => {
  let user = helpers.decryptToken();
  return (
    <Row>
      <div className="container container-title">
        <div className="row">
          <div className="col-md-3">
            <ul>
              <li>
                <a href="#1">Đăng kí huấn luyện đai trắng</a>
              </li>
              <li>
                <a href="#2">Đăng kí cuộc thi đai vàng</a>
              </li>
              <li>
                <a href="#3">Đăng kí đai xanh lá cây</a>
              </li>
              <li>
                <a href="#4">Đăng kí đai xanh trời</a>
              </li>
              <li>
                <a href="#5">Đăng kí đai đỏ</a>
              </li>
              <li>
                <a href="#6">Đăng kí cuộc thi đai đen(cấp 1)</a>
              </li>
              <li>
                <a href="#1">Đăng kí cuộc thi đai đen(cấp 2)</a>
              </li>
              <li>
                <a href="#1">Đăng kí khóa luyện tập tại CLB</a>
              </li>
              <li>
                <a href="#1">Đăng kí khóa luyện tập tại CLB</a>
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            <div id="1">
              <Col span={12} offset={6}>
                <h2 style={{ textAlign: "center" }}>
                  Welcome: {user.fullname}{" "}
                </h2>
              </Col>
              <form action="/home">
                <input
                  type="submit"
                  className="btn btn-secondary"
                  value="Quay về"
                />
              </form>
              <img className="title-hanul" src="daitrangg.jpg" alt="Hiep" />
              <p className="title-hanul1">
                Đầu tiên, trong <strong>cấp bậc đai Taekwondo </strong>đó chính
                là đai trắng. Thể hiện cho một khởi đầu mới. Màu trắng chính là
                biểu tượng của sự trong sáng, tinh khôi. Mỗi võ sinh như một hạt
                mầm mới, chưa biết một chút gì hết. Ở đây những hạt mầm này sẽ
                bắt đầu con đường học đạo của mình, và tìm hiểu những kiến thức
                liên quan đến môn võ Taekwondo này.
              </p>

              <div id="2">
                <img className="title-hanul" src="dai-vang.jpg" alt="Hiep" />
                <p className="title-hanul1">
                  Tiếp theo, trong Taekwondo đai đó là đai vàng. Đây là như là
                  ánh sáng mặt trời, nó sẽ tỏa ra một ánh sáng vô cùng rực rỡ và
                  sẽ giúp cho những hạt mầm bắt đầu nảy nở để bắt đầu một sự
                  sống mới. Đai vàng trong Taekwondo, đối với các môn sinh đó là
                  sự bắt đầu về những kiến thức căn bản nhất trong Taekwondo. Nó
                  được ví giống như hạt mầm nhận được ánh sáng, mà ánh sáng đó
                  chính là từ những người dạy võ.
                </p>
              </div>
              <div id="3">
                <h2>Đai xanh lá cây</h2>
                <img className="title-hanul" src="lacay.jpg" alt="Hiep" />

                <p className="title-hanul1">
                  Đai xanh Taekwondo, đây là đai biểu tượng cho sự phát triển,
                  nảy nở của hạt mầm. Từ khí chỉ là hạt mầm bé tí chưa phát
                  triển, mà sau này khi đã được ánh sáng mặt trời chiếu vào. Hạt
                  mầm đã phát triển và có những mầm chồi đầu tiên, nó vẫn đang
                  vươn ra ánh sáng để trở thành cây xanh tốt. Ở đây, các võ sinh
                  đai xanh là cây sẽ phải trau dồi các kiến thức và phải luyện
                  tập, rèn luyện để phát triển bản thân. Trau dồi các kỹ thuật
                  về mặt chiến đấu và tâm lý trong khi luyện tập.
                </p>
              </div>
              <div id="4">
                <h2>Đai xanh da trời</h2>
                <img className="title-hanul" src="datroi.jpg" alt="Hiep" />

                <p className="title-hanul1">
                  Các đai trong Taekwondo, không thể không nhắc đến đai xanh da
                  trời. Đây muốn nói đến đó là sự trưởng thành của cây. Nó đang
                  ngày càng vươn cao hơn, để khẳng định vị trí của mình giữa rất
                  nhiều cái cây khác. Đối với những võ sinh sau đang đeo đai
                  xanh da trời, đang được bổ sung những kiến thức chi tiết hơn
                  về võ thuật. Những bài tập nâng cao để có thể rèn luyện bản
                  thân, ý trí của mình để có thể vượt qua những khó khăn và
                  hướng tới thành công.
                </p>
              </div>
              <div id="5">
                <img className="title-hanul" src="dai-do.jpg" alt="Hiep" />
                <h2>Đai xanh da đỏ</h2>
                <p className="title-hanul1">
                  Các cấp đai Taekwondo kế tiếp, đó chính là đai đỏ. Đối với
                  những người mang đai đỏ họ giống như một cái cây đã trưởng
                  thành. Đã có những tán lá rộng, vươn cao và đang tiếp tục phát
                  triển về phía có mặt trời. Trong Taekwondo đai đây được xem là
                  đai cao cấp nhất trong các cấp đai cơ bản. Với những võ sinh
                  đạt đến trình độ này, họ đã phải nắm rất vững những kiến thức
                  cơ bản và nâng cao một cách thuần thục. Với kỹ thuật và những
                  bài tập ở cấp đai này yêu cầu người võ sinh và có một thể chất
                  và tâm lý vững vàng.
                </p>
              </div>
              <div id="6">
                <img className="title-hanul" src="dai-denn.jpg" alt="Hiep" />
                <h2>Đai xanh da đen</h2>
                <p className="title-hanul1">
                  Đai được đánh giá là cao nhất trong các đai trong Taekwondo,
                  đó chính là đai đen. Màu đen là màu biểu tượng cho sự tri thức
                  của võ thuật. Với những võ sinh đã lên được đai đen thì họ là
                  người đã nắm bắt được những kiến thức căn bản. Và vẫn đang
                  trên con đường để tìm kiếm những kiến thức mới. Con đường của
                  những đỉnh cao võ thuật, được gọi là nghệ thuật. Võ sinh đạt
                  đến trình độ đai đen sẽ có thể làm thầy, huấn luyện viên để
                  dạy võ cho những người mới luyện tập. Bắt đầu công việc ươm
                  hạt giống đầu tiên cho môn võ Taekwondo.Các cấp đai Taekwondo
                  kế tiếp, đó chính là đai đỏ. Đối với những người mang đai đỏ
                  họ giống như một cái cây đã trưởng thành. Đã có những tán lá
                  rộng, vươn cao và đang tiếp tục phát triển về phía có mặt
                  trời. Trong Taekwondo đai đây được xem là đai cao cấp nhất
                  trong các cấp đai cơ bản. Với những võ sinh đạt đến trình độ
                  này, họ đã phải nắm rất vững những kiến thức cơ bản và nâng
                  cao một cách thuần thục. Với kỹ thuật và những bài tập ở cấp
                  đai này yêu cầu người võ sinh và có một thể chất và tâm lý
                  vững vàng.
                </p>
              </div>
              <div className="video-hanul">
                <iframe
                  title="video"
                  src="https://www.facebook.com/plugins/video.php?height=322&href=https%3A%2F%2Fwww.facebook.com%2F100006113465295%2Fvideos%2F2743616872518735%2F&show_text=false&width=560&t=0"
                  width="500"
                  height="300"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen="true"
                />
              </div>
              <p className="title-hanul1">
                <center>
                  <strong> Cảm ơn bạn đã đọc!</strong>
                </center>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
};
export default React.memo(HanulComponent);
