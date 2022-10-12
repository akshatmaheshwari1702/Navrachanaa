const DetailsLeft = ({ heading, subHeading, subHeading1, subHeading2 }) => {
  return (
    <div className="">
      <h1 className="services__left__heading animation">{heading}</h1>
      <p className="services__left__paragraph animation">{subHeading}</p>
      <p className="services__left__paragraph animation">{subHeading1}</p>
      <p className="services__left__paragraph animation">{subHeading2}</p>
    </div>
  );
};
export default DetailsLeft;
