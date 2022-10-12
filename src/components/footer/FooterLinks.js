import { useState, useContext } from "react";
import DestinationsContext from "../../context/DestinationsContext";
import ShowFooterLinks from "./ShowFooterLinks";
const FooterLinks = () => {
  const {
    destinationsData: { destinations }
  } = useContext(DestinationsContext);
  const [state] = useState({
    pages: [
      { id: 1, name: "home", route: "/" },
      { id: 2, name: "about", route: "/about" },
      { id: 3, name: "contact", route: "/contact" }
    ],
    partners: [
      { id: 1, name: "IEEE", route: "" },
      { id: 2, name: "IBM", route: "" },
      { id: 3, name: "Universal Informatics", route: "" },
      { id: 4, name: "MY GOV", route: "" }
    ],
    headings: {
      pages: "pages",
      partners: "partners",
      destinations: "Themes"
    }
  });
  const { headings, pages, partners } = state;
  return (
    <div className="row">
      <div className="col-4 p-15">
        <h3 className="footer__heading">{headings.pages}</h3>
        <ShowFooterLinks links={pages} />
      </div>
      <div className="col-4 p-15">
        <h3 className="footer__heading">{headings.partners}</h3>
        <ShowFooterLinks links={partners} external={true} />
      </div>
      <div className="col-4 p-15">
        <h3 className="footer__heading">{headings.destinations}</h3>
        <ShowFooterLinks links={destinations} />
      </div>
      <div style={{ width: "100%" }}>
        <img src={"./images/ibm.jpg"} width="200" />
        <img src={"./images/universal.png"} style={{ margin: "5%" }} />
        <img src={"./images/ieee.jpeg"} style={{ margin: "5%" }} width="200" />
        <a href="https://www.mygov.in/">
          <img src={"./images/gov.jpg"} style={{ margin: "5%" }} width="200" />
        </a>
      </div>
    </div>
  );
};
export default FooterLinks;
