import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CarNavi from './CarNavi'

const ViewCar = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.get("http://localhost:3002/view-booking")
            .then((response) => {
                changeData(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <CarNavi />

            <div className="container mt-4">

                <h2 className="text-center mb-4">
                    View EV Charging Bookings
                </h2>

                <table className="table table-bordered table-striped table-hover">

                    <thead className="table-dark">
                        <tr>
                            <th>Booking ID</th>
                            <th>Owner Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Vehicle Reg. No.</th>
                            <th>Vehicle Brand</th>
                            <th>Vehicle Model</th>
                            <th>Battery Capacity</th>
                            <th>Connector Type</th>
                            <th>Charging Date</th>
                            <th>Time Slot</th>
                            <th>Estimated Units</th>
                            <th>Charging Bay</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((value, index) => (
                            <tr key={index}>
                                <td>{value.booking_id}</td>
                                <td>{value.owner_name}</td>
                                <td>{value.email}</td>
                                <td>{value.phone}</td>
                                <td>{value.vehicle_registration_number}</td>
                                <td>{value.vehicle_brand}</td>
                                <td>{value.vehicle_model}</td>
                                <td>{value.battery_capacity}</td>
                                <td>{value.connector_type}</td>
                                <td>{value.charging_date}</td>
                                <td>{value.time_slot}</td>
                                <td>{value.estimated_units}</td>
                                <td>{value.charging_bay_number}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default ViewCar