import CityItem from "./CityItem";

const Cities = ({ cities }) => {
  return (
    <div>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </div>
  );
};

export default Cities;
