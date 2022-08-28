import "./Templates/footer.css";

function Footer() {
  return (
    <div className="footer_box">
      <div className="media">
        <div className="media_move">
          <div className="dc"></div>
          <div className="tw"></div>
          <div className="f"></div>
          <div className="ig"></div>
          <div className="yt"></div>
          <div className="ttv"></div>
        </div>
      </div>
      <div className="author_photo">
        <div>
          <div className="ph_author">photo borrowed from</div>
          <ul className="ph_aut">
            <a
              href="https://www.artstation.com/maxschiller"
              target="_blank"
              rel="noreferrer"
            >
              <li>Max Schiller</li>
            </a>
            <a
              href="https://www.artstation.com/chrisd "
              target="_blank"
              rel="noreferrer"
            >
              <li>Christian Dimitrov</li>
            </a>
            <a
              href="https://www.artstation.com/yangqi917"
              target="_blank"
              rel="noreferrer"
            >
              <li>yang qi917</li>
            </a>
            <a
              href="https://www.artstation.com/anissasenoussi"
              target="_blank"
              rel="noreferrer"
            >
              <li>Anissa Senoussi</li>
            </a>
            <a
              href="https://www.artstation.com/blakerottinger"
              target="_blank"
              rel="noreferrer"
            >
              <li>Blake Rottinger</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="pgi_box">
        <a href="https://pegi.info" target="blank">
          <div className="pgi1"></div>
          <div className="pgi2"></div>
          <div className="pgi3"></div>
          <div className="pgi4"></div>
        </a>
      </div>
    </div>
  );
}
export default Footer;

//https://www.artstation.com/maxschiller - zdjecia od
//https://www.artstation.com/chrisd      - tez
//https://www.artstation.com/yangqi917   - tez
