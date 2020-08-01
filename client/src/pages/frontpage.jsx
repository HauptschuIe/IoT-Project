import React, { useEffect, useState } from "react";

import Header from '../components/header/header.component'
import Title from '../components/title/title.component'
import Plant from '../components/plant/plant.component'
import Measurements from '../components/measurements/measurements.component'
import SuccessMessage from '../components/warnings/success.component'
import ErrorMessage from '../components/warnings/error.component'

const Humidity = () => {
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

    if (values.map(value => (value.humidity / 10)) < 10) {
        return (
            <ErrorMessage />
        );
    }
    else {
        return (
            <SuccessMessage />
        );
    }
};

function Frontpage() {
    return (
        <div>
            <Header />
            <Title />
            <Plant />
            <Measurements />
            <Humidity />
        </div>

    );
}

export default Frontpage;