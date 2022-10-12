import { useState, useContext } from "react";
import DetailsLeft from "./DetailsLeft";
import DetailsList from "./DetailsList";
import SharedContext from "../../context/SharedContext";
const Details = () => {
  const {
    sharedData: { servicesData }
  } = useContext(SharedContext);

  const [state] = useState({
    heading: "To get support throught the event Contact Us.",
    subHeading: "Vaidic Tiwari :- +91-8827344991 ",
    subHeading1: "Naman Sisodiya :- +91-8770200923",
    subHeading2: "Aditya Yadav :- +91- 7869090510"
  });
  return (
    <div className="services">
      <div className="services__contents">
        <div className="container">
          <div className="row ml-minus-15 mr-minus-15 services__contents__container">
            <div className="col-6 p-15">
              <DetailsLeft
                heading={state.heading}
                subHeading={state.subHeading}
                subHeading1={state.subHeading1}
                subHeading2={state.subHeading2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
