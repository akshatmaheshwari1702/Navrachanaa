import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import AboutImage from "../components/pages-parts/AboutImage";
import Themes from "../components/pages-parts/Themes";
const About = () => {
  const [state] = useState({
    heading: "About Navarachnaa 2022",
    pageHeading: "6th National Level Project Competition",
    message: `Navarachanaa 2022 is 6th National level Project Competition organised by Shri Vaishnav Vidyapeeth Vishwavidyalaya for students of University to showcase their ideas and implementations as a cherishing outcome in the contribution to the Nation's Dream of India under current government programs like Digital India, Make in India, Skill India, Smart City, Swachh Bharat Mission, National Health Mission, Start-up India etc.`
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="travel friends about page" />
      </Helmet>
      <PageContainer data={state}>
        <AboutImage />
        <Themes />
      </PageContainer>
    </>
  );
};
export default About;
