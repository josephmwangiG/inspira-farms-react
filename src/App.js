import "./App.css";
import { useState, useEffect } from "react";
import LineGraph from "./components/LineGraph";
import HumidityGraph from "./components/HumidityGraph";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("/data").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            INSPIRA FARMS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="mb-3 collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="mb-3 collapse navbar-mb-3 collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
            </ul>
            <span className="navbar-text">JOSEPH G.</span>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row mt-4">
          <div className="mb-3 col-md-4">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Current readings</h6>
                <div className="row">
                  <div className="mb-3 col-6">
                    <p className="card-text">Humidity</p>
                    <a href="#" className="btn btn-primary">
                      {data["latest_humidity"]} %
                    </a>
                  </div>
                  <div className="mb-3 col-6">
                    <p className="card-text">Room temp</p>
                    <a href="#" className="btn btn-primary">
                      {data["latest_room_temp"]} <sup>o</sup>C
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <h6 className="card-title">Analysis</h6>
                    </div>
                  <div className="mb-3 col-md-4">
                    <p className="card-text">
                    Highest Field Temp
                    </p>
                    <a href="#" className="btn btn-primary">
                      { data['highest_field_temp'] } <sup>o</sup>C
                    </a>
                  </div>
                  <div className="mb-3 col-md-4">
                    <p className="card-text">
                    Average Room Temp
                    </p>
                    <a href="#" className="btn btn-primary">
                      { parseFloat(data['avg_room_temperature']).toFixed(2) } <sup>o</sup>C
                    </a>
                  </div>
                  <div className="mb-3 col-md-4">
                    <p className="card-text">
                    Energy consumption
                    </p>
                    <a href="#" className="btn btn-primary">
                    { data['energy_consumption'] } KWh
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="mb-3 col-md-6">
            <div className="chart">
              <LineGraph data={data} />
            </div>
          </div>
          <div className="mb-3 col-md-6">
            <div className="chart">
              <HumidityGraph data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
