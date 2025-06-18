import { Container, Row, Col } from "react-bootstrap";
import DecorLine from "../assets/decor-primary.svg";
import DeliveryIcon from "../assets/delivery-red.png";
import IcecreamIcon from "../assets/icecream-red.png";
import StoreIcon from "../assets/store-red.png";
import logo from "../assets/logo-primary.svg";

const Footer = () => {
  return (
    <footer style={{ fontFamily: "sans-serif", marginTop: "60px" }}>
      <Container fluid="lg">
        {/* Top Icons Row */}
        <Row className="align-items-center border-bottom pb-3 mb-4">
          <Col xs={12} md={4}>
            <h2
              style={{
                fontWeight: "500",
                fontFamily:
                  '"Kalnia", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
                fontSize: "28px",
              }}
            >
              Need Lebagol Now?
            </h2>
          </Col>

          <Col xs={12} md={8}>
            <div className="d-flex flex-column flex-md-row justify-content-around align-items-center text-center gap-3 gap-md-0">
              {/* Local Delivery */}
              <div>
                <img src={DeliveryIcon} alt="Local Delivery" style={{ width: "50px" }} />
                <p className="mt-2 fw-medium" style={{ fontSize: "12px" }}>LOCAL DELIVERY</p>
              </div>

              <img src={DecorLine} alt="divider" style={{ height: "60px" }} className="d-none d-md-block" />

              {/* Scoop Shops */}
              <div>
                <img src={IcecreamIcon} alt="Scoop Shops" style={{ width: "50px" }} />
                <p className="mt-2 fw-medium" style={{ fontSize: "12px" }}>SCOOP SHOPS</p>
              </div>

              <img src={DecorLine} alt="divider" style={{ height: "60px" }} className="d-none d-md-block" />

              {/* Grocery Locator */}
              <div>
                <img src={StoreIcon} alt="Grocery Locator" style={{ width: "50px" }} />
                <p className="mt-2 fw-medium" style={{ fontSize: "12px" }}>GROCERY LOCATOR</p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Main Footer Grid */}
        <Row className="text-start pb-5">
          {/* Logo & Contact */}
          <Col xs={12} sm={6} md={4} className="mb-4 mb-md-0">
            <img src={logo} alt="Logo" style={{ height: "50px", width: "160px", marginBottom: "25px" }} />
            <p style={{ fontSize: "14px" }}>
              5609 E Sprague Ave, Spokane
              <br />
              Valley, WA 99212, USA
            </p>
            <p style={{ fontWeight: "700", fontSize: "18px", marginTop: "30px", marginBottom: "0px" }}>
              + 1834 123 456 789
            </p>
            <p style={{ fontSize: "14px" }}>support1@example.com</p>
          </Col>

          {/* Info Links */}
          {[
            { title: "Information", items: ["Help Center", "Shipping", "Returns", "Policies", "Gift Cards"] },
            { title: "Useful Links", items: ["My Account", "Order Tracking", "All Products", "Ingredients", "Wholesale"] },
            { title: "About Us", items: ["Our story", "Contacts", "Affiliate Program", "Referral Program", "Careers"] },
            { title: "Categories", items: ["Gelato", "Kulfi", "Sherbet", "Sorbet", "Frozen Yogurt"] },
          ].map((section, idx) => (
            <Col xs={6} sm={3} md={2} key={idx} className="mb-3 mb-md-0">
              <h6 className="fw-bold" style={{ fontSize: "16px" }}>{section.title}</h6>
              {section.items.map((item, i) => (
                <p key={i} style={{ fontSize: "14px", marginTop: i === 0 ? "10px" : "0px" }}>{item}</p>
              ))}
            </Col>
          ))}
        </Row>

        {/* Bottom Bar */}
        <Row className="py-4 border-top" style={{ fontSize: "14px" }}>
          <Col xs={12} md={4} className="text-center text-md-start mb-2 mb-md-0">
            <p>© 2024 <strong>Lebagol</strong>. All Rights Reserved</p>
          </Col>

          <Col xs={12} md={4} className="text-center mb-2 mb-md-0">
            <img src="/src/assets/payment.png" alt="Payment Methods" style={{ maxHeight: "30px" }} />
          </Col>

          <Col xs={12} md={4} className="text-center text-md-end">
            <p className="d-inline me-2">Follow Us:</p>
            {[
              { icon: "facebook-new" },
              { icon: "twitter" },
              { icon: "instagram-new" },
              { icon: "pinterest" },
              { icon: "youtube-play" },
            ].map((s, i) => (
              <img
                key={i}
                src={`https://img.icons8.com/ios-filled/50/000000/${s.icon}.png`}
                width="18"
                alt={s.icon}
                style={{ marginLeft: i === 0 ? "0px" : "10px" }}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
