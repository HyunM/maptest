import React, { useState } from "react";
import "./App.css"; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import cali from "./usa-ca.svg";

export default function App() {
  const usstate = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const cacounties = [
    "Del Norte",
    "Siskiyou",
    "Imperial",
    "Riverside",
    "San Diego",
    "Orange",
    "Los Angeles",
    "Ventura",
    "Santa Barbara",
    "San Luis",
    "Kern",
    "San Bernardino",
    "Inyo",
    "Tulare",
    "Kings",
    "Madera",
    "Fresno",
    "Monterey",
    "San Benito",
    "Merced",
    "Santa Cruz",
    "San Mateo",
    "Alameda",
    "Santa Clara",
    "Stanislaus",
    "Mariposa",
    "Tuolumne",
    "Mono",
    "Alpine",
    "Calaveras",
    "Amador",
    "San Joaquin",
    "Contra Costa",
    "El Dorado",
    "Sacramento",
    "Solano",
    "San Francisco",
    "Marin",
    "Napa",
    "Sonoma",
    "Yolo",
    "Placer",
    "Nevada",
    "Sierra",
    "Yuba",
    "Sutter",
    "Colusa",
    "Lake",
    "Butte",
    "Glenn",
    "Plumas",
    "Tehama",
    "Mendocino",
    "Humboldt",
    "Trinity",
    "Shasta",
    "Lassen",
    "Modoc",
  ];

  /* mandatory */
  const mapHandler = event => {
    alert(event.target.dataset.name);
  };

  const [state1, setState1] = useState("AL");
  const [state2, setState2] = useState("AL");
  const [state3, setState3] = useState("AL");

  /* optional customization of filling per state and calling custom callbacks per state */
  const statesCustomConfig = value => {
    let stateColor = {
      [value.split(",")[0]]: {
        fill: "navy",
      },
      [value.split(",")[1]]: {
        fill: "red",
      },
      [value.split(",")[2]]: {
        fill: "green",
      },
    };
    return stateColor;
  };

  let i = 0;
  let temp1 = "temp";
  let temp2 = "temp";
  let temp3 = "temp";
  let handleMap = value1 => {
    if (
      document.getElementById("select2").value !== value1 &&
      document.getElementById("select3").value !== value1
    ) {
      // Get the object by id
      let map1 = document.getElementById("camap");
      // Get the SVG document inside the object element
      let svgDoc1 = map1.contentDocument;
      // Get the state
      let fill1 = svgDoc1.getElementById([value1]);
      // Change its colour
      fill1.setAttribute(
        "style",
        "font-size:12px;fill:#ff0000;fill-rule:nonzero;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;marker-start:none"
      );

      let svgDoc2 = map1.contentDocument;
      // Get the state
      let fill2 = svgDoc2.getElementById([temp1]);
      // Change its colour
      fill2.setAttribute(
        "style",
        "font-size:12px;fill:#d0d0d0;fill-rule:nonzero;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;marker-start:none"
      );

      temp1 = value1;
    } else {
      alert("already selected!");
      document.getElementById("select1").value = temp1;
    }
  };

  let handleMap2 = value2 => {
    if (
      document.getElementById("select1").value !== value2 &&
      document.getElementById("select3").value !== value2
    ) {
      // Get the object by id
      let map3 = document.getElementById("camap");
      // Get the SVG document inside the object element
      let svgDoc3 = map3.contentDocument;
      // Get the state
      let fill3 = svgDoc3.getElementById([value2]);
      // Change its colour
      fill3.setAttribute(
        "style",
        "font-size:12px;fill:#00ff00;fill-rule:nonzero;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;marker-start:none"
      );

      let svgDoc4 = map3.contentDocument;
      // Get the state
      let fill4 = svgDoc4.getElementById([temp2]);
      // Change its colour
      fill4.setAttribute(
        "style",
        "font-size:12px;fill:#d0d0d0;fill-rule:nonzero;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;marker-start:none"
      );

      temp2 = value2;
    } else {
      alert("already selected!");
      document.getElementById("select2").value = temp2;
    }
  };

  let handleMap3 = value3 => {
    if (
      document.getElementById("select1").value !== value3 &&
      document.getElementById("select2").value !== value3
    ) {
      // Get the object by id
      let map5 = document.getElementById("camap");
      // Get the SVG document inside the object element
      let svgDoc5 = map5.contentDocument;
      // Get the state
      let fill5 = svgDoc5.getElementById([value3]);
      // Change its colour
      fill5.setAttribute(
        "style",
        "font-size:12px;fill:#0000ff;fill-rule:nonzero;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;marker-start:none"
      );

      let svgDoc6 = map5.contentDocument;
      // Get the state
      let fill6 = svgDoc6.getElementById([temp3]);
      // Change its colour
      fill6.setAttribute(
        "style",
        "font-size:12px;fill:#d0d0d0;fill-rule:nonzero;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;marker-start:none"
      );

      temp3 = value3;
    } else {
      alert("already selected!");
      document.getElementById("select3").value = temp3;
    }
  };

  return (
    <div className="App">
      <h1>USA State Map</h1>
      {/* <USAMap customize={statesCustomConfig()} onClick={mapHandler} /> */}
      <USAMap
        customize={statesCustomConfig(state1 + "," + state2 + "," + state3)}
        onClick={mapHandler}
      />
      <div>
        <div>
          <select className="ml1p" onChange={e => setState1(e.target.value)}>
            {usstate.map(data => (
              <option value={data} key={++i}>
                {data}
              </option>
            ))}
          </select>

          <select className="ml1p" onChange={e => setState2(e.target.value)}>
            {usstate.map(data => (
              <option value={data} key={++i}>
                {data}
              </option>
            ))}
          </select>

          <select className="ml1p" onChange={e => setState3(e.target.value)}>
            {usstate.map(data => (
              <option value={data} key={++i}>
                {data}
              </option>
            ))}
          </select>
        </div>
      </div>
      <br />
      <hr />
      <br />
      {/* <img width="500px" src={cali} alt="California" /> */}
      <h1>California County Map</h1>

      <div>
        {/* <p className="label" id="country-name" x="10" y="390">
          abc
        </p> */}
      </div>
      <object
        height="100%"
        id="camap"
        type="image/svg+xml"
        data={cali}
        className="object mapsvg-tooltip"
      >
        California
      </object>
      <div>
        <select
          className="ml1p"
          id="select1"
          onChange={e => {
            handleMap(e.target.value);
          }}
        >
          {cacounties.map(data => (
            <option value={data} key={++i}>
              {data}
            </option>
          ))}
        </select>
        <select
          className="ml1p"
          id="select2"
          onChange={e => {
            handleMap2(e.target.value);
          }}
        >
          {cacounties.map(data => (
            <option value={data} key={++i}>
              {data}
            </option>
          ))}
        </select>
        <select
          className="ml1p"
          id="select3"
          onChange={e => {
            handleMap3(e.target.value);
          }}
        >
          {cacounties.map(data => (
            <option value={data} key={++i}>
              {data}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
