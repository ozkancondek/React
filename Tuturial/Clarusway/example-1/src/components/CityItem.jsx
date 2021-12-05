const CityItem = ({ city }) => {
  return (
    <>
      <p>{city.title}</p>
      <p>{city.desc}</p>
      <img src={city.image} alt={city.name}></img>
    </>
  );
};

export default CityItem;
