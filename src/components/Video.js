import React from "react";
const VideoComponent = () => {
  return (
    <div>
      <div className="container video-text">
        <div className="row">
          <div className="col-md-9 col-xs-9 col-sm-8">
            <iframe
              title="video"
              src="https://www.facebook.com/plugins/video.php?height=322&href=https%3A%2F%2Fwww.facebook.com%2F100006113465295%2Fvideos%2F2743616872518735%2F&show_text=false&width=560&t=0"
              width="350"
              height="300"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          <div className="col-md-3 col-xs-3 col-sm-4">
            <iframe
              title="video 1"
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100006113465295%2Fvideos%2F2743616055852150%2F&show_text=false&width=560&t=0"
              width="350"
              height="300"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(VideoComponent);
