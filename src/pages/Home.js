import {
  useState,
  useEffect
  // useContext
} from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
// import ModelContext from "../context/ModelContext";
import Svvv from "../components/pages-parts/Svvv";
import Destinations from "../components/Destinations";
import Services from "../components/services/Services";
// import Reviews from "../components/reviews/Reviews";
import GalleryComponent from "../components/gallery/GalleryComponent";
import Footer from "../components/footer/Footer";
import SVVVImage from "../components/pages-parts/SvvvImage";
import SvvvImage from "../components/pages-parts/SvvvImage";
import Download from "../components/pages-parts/Download";
import Details from "../components/Details/Details";
const Home = () => {
  // const { dispatch } = useContext(ModelContext);
  const [state] = useState({
    heading: "WHY NAVRACHNAA",
    paragraph: `The doers are the major thinkers.
    The people that really create the
     things that `,
    subparagraph: `change this industry
    are both the thinkers and doers 
    in the same person.`
  });

  const [svvv] = useState({
    pageHeading: "About Shri Vaishnav Vidyapeeth Vishwavidyalaya",

    message: `Shri Vaishnav Vidyapeeth Vishwavidyalaya is a private university established under Madhya Pradesh Niji Vishwavidyalaya ( Sthapana Avam Sanchalan) Adhiniyam in 2015 at Indore MP(India). The University has been established with a vision to be leader in shaping better future for mankind through quality education, training and research. It shall pursue the mission to make a difference in sustaining the growth of global societies by developing socially responsible citizens. Value based education being at the helm, the University shall promote endurance, excellence, fairness, honesty and transparency as its core values. Some of the objectives of the University are as under:

    To provide teaching and training in higher education and make provision for research as well as advancement and dissemination of knowledge.
    To ensure world class quality in its offerings and create higher levels of intellectual abilities.
    To create centres of excellence for research and development for sharing knowledge and its applications.
    Shri Vaishnav Vidyapeeth Vishwavidyalaya at Indore is a multi-disciplinary university focusing on the needs of various segments of the society.`
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Navarachnaa</title>
        <meta name="description" content="A Step towards innovation" />
      </Helmet>
      <Header
        heading={state.heading}
        paragraph={state.paragraph}
        subparagraph={state.subparagraph}
      >
        <div className="justify-centre flex">
        <a  href="https://forms.gle/XVT8CjMoyTa628Sp7">
          <button className="btn-default">Register</button>
        </a>
        </div>
      </Header>
      <Svvv data={svvv}>
        <SvvvImage />
      </Svvv>
      <Destinations />
      <Services />

      {/* <Reviews /> */}
      <GalleryComponent />
      <Download />
      <Details />
      <Footer />
    </>
  );
};
export default Home;
