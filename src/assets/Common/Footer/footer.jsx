import footerLogo from "../../assets/Images/footerLogo.png";
import "../../globalStyles/globalStyle.css";

const Charta_Footer = () => (
  <footer style={{ backgroundColor: "#253551" }} className="text-white py-5">
    <div className="container">
      <div className="row px-3">
        {/* footer Logo  */}
        <div className="col-sm-12 col-md-12 col-lg-6 pe-0 mb-4">
          <img src={footerLogo} alt="Charta Logo" />
          <p className="fw-medium mt-4" style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", maxWidth: 400 }}>
            Your intelligent solution-creation platform combining AI with human expertise.
          </p>
        </div>

        {/* Footer Links */}
        <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-wrap ps-0">
          {[
            ["Links", ["Home Remodeling", "Healthcare Navigation", "Elder Care", "Business Launch", "Legal Navigator", "Personalized Education"]],
            ["Links", ["About Us", "Careers", "Press", "Blog", "Contact"]],
          ].map(([title, links], i) => (
            <div className="col-6 ps-4 ps-sm-3" key={i}>
              <ul className="list-unstyled">
                <li className="fw-bold" style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>{title}</li>
                {links.map((link, idx) => (
                  <li key={idx} className="fs-6 fw-semi-bold mt-2" style={link === "Home Remodeling" ? { color: "#B88917" } : {}}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-top mt-4 pt-3 ps-4 ps-sm-0">
        <p className="mb-0" style={{color: "rgba(255,255,255,0.4)", }}>© 2025 Charta.me. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Charta_Footer;
