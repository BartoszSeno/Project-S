import "./templates/mainone.css";

function Mainone() {
  return (
    <div className="mein_block">
      <div className="testblock"></div>
      <div className="movie">
        <div className="title_movie">
          <video
            width="1900"
            muted="muted"
            preload="none"
            loop="loop"
            data-resize="true"
            autoplay=""
            class="on"
            className="moviee"
          >
            <source
              src="maleficent.mp4"
              type="video/mp4"
              className="movieee"
            ></source>
          </video>
          <div className="title_boxx">
            <div className="ps">Project S</div>
            <div className="ju">Join us</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainone;
