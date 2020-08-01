import React, { useEffect, useState } from "react";


import date from '../../assets/date.png';
import water from '../../assets/water.png';
import Wateramount from '../../assets/Wateramount.png';

import './measurements.styles.scss';

const Measurements = () => {

  const [values, setValues] = useState([]);

  const getValues = async () => {
    try {
      const response = await fetch("http://localhost:5000/humidity/");
      const jsonData = await response.json();

      setValues(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getValues();
  }, []);

  console.log(values);

  return (
    <div className='grid'>
      <table className="table">
        <tbody>
          <tr>
            <td><img src={water} alt="water" /></td>
            <td>{values.map(value => (value.humidity / 10))} %<br /> Feuchtigkeit</td>
          </tr>
          <tr>
            <td><img src={date} alt="date" /></td>
            <td>20.07.2020, 13:50 <br /> Letzte Gießung</td>
          </tr>
          <tr>
            <td><img src={Wateramount} alt="wateramount" /></td>
            <td>0,2l / Woche <br /> Wasserbedarf</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Measurements;