// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import CBCRbcChart from "./components/CBCRbcChart";
import CBCWbcChart from "./components/CBCWbcChart";
import CBCHemoglobinChart from "./components/CBCHemoglobinChart";
import CBCPlateletsChart from "./components/CBCPlateletsChart";
import BloodTransfutionChart from "./components/BloodTransfutionChart";
import PlateletsTransfutionChart from "./components/PlateletsTransfutionChart";
import DataForm from "./components/DataForm";
import BloodTransfusedDataForm from "./components/BloodTransfusedDataForm";
import PlatelesTransfusedDataForm from "./components/PlateletesTransfusedDataForm";
const App = () => {
  const [hemoglobin, setHemoData] = useState([]);
  const [rbc, setRbcData] = useState([]);
  const [wbc, setWbcData] = useState([]);
  const [platelets, setPlateletsData] = useState([]);
  const [bloodTransfused, setBloodTransfusedData] = useState([]);
  const [plateletsTransfused, setPlateletsTransfusedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseHemo = await axios.get(
          `http://localhost:3001/api/getHemoglobinData`
        );
        setHemoData(responseHemo.data);
        const responseRbc = await axios.get(
          `http://localhost:3001/api/getRbcData`
        );
        setRbcData(responseRbc.data);

        const responseWbc = await axios.get(
          `http://localhost:3001/api/getWbcData`
        );
        setWbcData(responseWbc.data);

        const responsePlatelets = await axios.get(
          `http://localhost:3001/api/getPlateletsData`
        );
        setPlateletsData(responsePlatelets.data);

        const responseBloodTransfused = await axios.get(
          `http://localhost:3001/api/getBloodTransfusedData`
        );
        setBloodTransfusedData(responseBloodTransfused.data);

        const responsePlateletsTransfused = await axios.get(
          `http://localhost:3001/api/getPlateletsTransfusedData`
        );
        setPlateletsTransfusedData(responsePlateletsTransfused.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App" style={{ height: "400px" }}>
      <h1 style={{ textAlign: "center" }}>CBC Hemoglobin Data Visualization</h1>
      <CBCHemoglobinChart data={hemoglobin} />
      <CBCRbcChart data={rbc} />
      <CBCWbcChart data={wbc} />
      <CBCPlateletsChart data={platelets} />
      <BloodTransfutionChart data={bloodTransfused} />
      <PlateletsTransfutionChart data={plateletsTransfused} />
      <DataForm />
      <BloodTransfusedDataForm />
      <PlatelesTransfusedDataForm />
    </div>
  );
};

export default App;
