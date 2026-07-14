import axios from 'axios';
import React, { useState } from 'react';
import CarNavi from './CarNavi';


const Addcar = () => {

  const [input, setInput] = useState({
    booking_id: "",
    owner_name: "",
    email: "",
    phone: "",
    vehicle_registration_number: "",
    vehicle_brand: "",
    vehicle_model: "",
    battery_capacity: "",
    connector_type: "",
    charging_date: "",
    time_slot: "",
    estimated_units: "",
    charging_bay_number: ""
  });

  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const readValues = () => {
    console.log(input);

    axios
      .post("", input)
      .then((response) => {
        console.log(response.data);
        alert("Booking Added Successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Booking Failed");
      });
  };

  return (
    <div>
      <CarNavi/>

      <div className="container mt-4">
        <div className="card shadow p-4">

          <h2 className="text-center mb-4">EV Charging Booking</h2>

          <div className="row g-3">

            <div className="col-md-6">
              <label>Booking ID</label>
              <input
                type="text"
                className="form-control"
                name="booking_id"
                value={input.booking_id}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Owner Name</label>
              <input
                type="text"
                className="form-control"
                name="owner_name"
                value={input.owner_name}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={input.email}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={input.phone}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Vehicle Registration Number</label>
              <input
                type="text"
                className="form-control"
                name="vehicle_registration_number"
                value={input.vehicle_registration_number}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Vehicle Brand</label>
              <input
                type="text"
                className="form-control"
                name="vehicle_brand"
                value={input.vehicle_brand}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Vehicle Model</label>
              <input
                type="text"
                className="form-control"
                name="vehicle_model"
                value={input.vehicle_model}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Battery Capacity (kWh)</label>
              <input
                type="text"
                className="form-control"
                name="battery_capacity"
                value={input.battery_capacity}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Connector Type</label>
              <select
                className="form-control"
                name="connector_type"
                value={input.connector_type}
                onChange={inputHandler}
              >
                <option value="">--SELECT--</option>
                <option value="CCS2">CCS2</option>
                <option value="Type 2">Type 2</option>
                <option value="CHAdeMO">CHAdeMO</option>
                <option value="GB/T">GB/T</option>
              </select>
            </div>

            <div className="col-md-6">
              <label>Charging Date</label>
              <input
                type="text"
                className="form-control"
                name="charging_date"
                value={input.charging_date}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Time Slot</label>
              <input
                type="text"
                className="form-control"
                name="time_slot"
                placeholder="09:00 AM - 10:00 AM"
                value={input.time_slot}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Estimated Units (kWh)</label>
              <input
                type="text"
                className="form-control"
                name="estimated_units"
                value={input.estimated_units}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Charging Bay Number</label>
              <input
                type="text"
                className="form-control"
                name="charging_bay_number"
                value={input.charging_bay_number}
                onChange={inputHandler}
              />
            </div>

            <div className="col-12 text-center mt-3">
              <button
                className="btn btn-primary"
                onClick={readValues}
              >
                Book Charging Slot
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Addcar;