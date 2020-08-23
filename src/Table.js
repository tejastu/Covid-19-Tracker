import React from "react";
import "./Table.css";
import numeral from "numeral";
import { imageOverlay } from "leaflet";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map((country) => (
        <tr>
          <td className="flag">
            <img src={country.countryInfo.flag} />
          </td>
          <td>
            <b>{country.country}</b>
          </td>
          <td>
            <strong>{numeral(country.cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
