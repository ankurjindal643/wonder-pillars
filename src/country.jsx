import "./country.css";
import { useEffect, useState } from "react";
import Details from "./details";
import { useHistory } from "react-router-dom";
let Country = () => {
  let history = useHistory();
  let [countryDetails, setCountryDetails] = useState([]);
  let link;
  let today = new Date(),
    date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();

  let handleClick = (el) => {
    history.push({
      pathname: `/details/${el.name}`,
      state: { data: el },
    });
  };

  useEffect(async () => {
    let resFlag = await fetch("https://restcountries.eu/rest/v2/all");
    let response = await resFlag.json();
    setCountryDetails(response);
  }, []);

  return (
    <>
      {countryDetails.map((el, id) => {
        {
          link = `https://www.google.com/maps/?q=${el.name}`;
        }
        return (
          <div key={id} className="outer-div">
            <div className="flag">
              <img src={el.flag} alt="" />
            </div>
            <div className="details">
              <h1 className="countryName">{el.name}</h1>
              <p className="currency">{`Currency: ${el.currencies[0].name} (${el.currencies[0].symbol})`}</p>
              <p className="timeZone">
                {`Current date and Time: ${date} : 6:34:19 PM`}
              </p>
              <div className="link-btn">
                <a href={link}>
                  <button className="countryMap">Show Map</button>
                </a>
                <a className="details-btn">
                  <button
                    onClick={() => {
                      handleClick(el);
                    }}
                    className="countryMap"
                  >
                    Details
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Country;
