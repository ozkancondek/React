import React, { useEffect, useState } from "react";

export const Api = () => {
  const [countries, setCountries] = useState([]);
  const [err, setErr] = useState(false);

  const getData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setErr(true);
        }
      })
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));

    return countries;
  };
  useEffect(() => {
    getData();
  }, []);

  if (!err) {
    return (
      <div>
        <h1>Countries</h1>
        {countries.map((country, index) => {
          const { name, capital, flags } = country;
          return (
            <div key={index}>
              <p>{name.common}</p>;
              <img src={flags.png} alt="a" />
              <h4>{capital}</h4>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h1>There is no data</h1>
      </div>
    );
  }
};
