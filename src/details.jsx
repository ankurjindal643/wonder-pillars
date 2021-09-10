import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import "./details.css";
let Details = () => {
  let history = useHistory();
  let location = useLocation();
  let border = [];
  if (location.state.data.borders[0] == undefined) {
    border.push("No-Borders");
  } else {
    border.push(location.state.data.borders);
  }
  return (
    <div className="details-main-div">
      <div className="detail-flag">
        <img src={location.state.data.flag}></img>
      </div>
      <div className="countryDetails">
        <h1 className="Details-countryName">{`Country Name : ${location.state.data.name}`}</h1>
        <p className="allPtag">{`Area : ${location.state.data.area}`}</p>
        <p className="allPtag">{`Currency :${location.state.data.currencies[0].name}`}</p>
        <p className="allPtag">{`Language : ${location.state.data.languages.map(
          (e) => e.name
        )}`}</p>
        <p className="allPtag">{`Region : ${location.state.data.region}`}</p>
        <p className="allPtag">{`Population : ${location.state.data.population}`}</p>
        <p className="allPtag">{`Border : ${border.map(
          (el) => el
        )}`}</p>
        <button
          onClick={() => {
            history.push("/country");
          }}
          className="back-btn"
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default Details;
