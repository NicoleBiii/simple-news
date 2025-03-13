import "./Footer.scss";
import discussionLogo from "../../assets/images/image.png"; // Adjust path as needed

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={discussionLogo} alt="Discussion Logo" className="footer__logo" />
        <div>
          <h1 className="footer__title">Send us your best discussion topics!</h1>
          <p className="footer__text">
            Have an interesting topic? Share it with us at{" "}
            <a href="mailto:yourstory@bbc.co.uk" className="footer__email">
              yourstory@bbc.co.uk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
