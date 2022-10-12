import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const FooterIntro = () => {
  const [state] = useState({
    logo: "/images/footer-logo.jpg",
    intro: `This competition will bring the innovative minds spread all across the country under a single canopy, where they can showcase their talent, share the knowledge and inspire millions more to explore the possible dimensions of their respective field.
			`,
  });
  return (
    <div className="footer__intro">
      <div className="footer__intro__img animation">
        <LazyLoadImage src={state.logo} alt="footer logo" />
      </div>
      <p className="footer__intro__msg animation">{state.intro}</p>
    </div>
  );
};
export default FooterIntro;
