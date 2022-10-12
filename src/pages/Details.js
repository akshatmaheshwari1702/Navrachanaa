import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DestinationsContext from "../context/DestinationsContext";
import { DETAILS } from "../context/types/DestinationTypes";
import Header from "../components/Header";
import DestinationInfo from "../components/DestinationInfo";
import Footer from "../components/footer/Footer";
const Details = () => {
  const { destinationsData, dispatch } = useContext(DestinationsContext);
  const { details, filteredCities } = destinationsData;
  const { id } = useParams();
  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <>
      <Helmet>
        <title>{details.name}</title>
      </Helmet>
      <Header heading={details.name} image={details.bigImage}></Header>
      <DestinationInfo details={details} />
      <Footer />
    </>
  );
};
export default Details;
