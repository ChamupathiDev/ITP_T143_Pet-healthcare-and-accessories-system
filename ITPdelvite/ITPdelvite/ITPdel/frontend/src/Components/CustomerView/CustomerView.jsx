import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheck, faTruck, faClock, faBox, faBan } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons

const URL = 'http://localhost:5000/tracking';

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
};

function CustomerView() {
    const [tracking, setAllTracking] = useState([]);
    
    useEffect(() => {
        fetchHandler().then((data) => setAllTracking(data.tracking));
    }, []);

    // Define the background color class and icon based on the selected status
    const getStatusStyle = (status) => {
        switch (status) {
            case "notyet":
                return { color: "red", icon: faBan };
            case "packed":
                return { color: "blue", icon: faBox };
            case "dispatched":
                return { color: "blue", icon: faTruck };
            case "complete":
                return { color: "green", icon: faCheck };
            default:
                return { color: "gray", icon: faClock };
        }
    };

    return (
        <div>
            <Nav />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjust the max-width of the container */}
                <h1 className="text-3xl font-bold mb-4">Tracking Details Display Page</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tracking.map((track, index) => (
                        <TrackingCard key={index} track={track} getStatusStyle={getStatusStyle} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function TrackingCard({ track, getStatusStyle }) {
    const { _id, name, status1, date1, status2, date2, status3, date3 } = track;

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden"> {/* Use overflow-hidden to prevent content overflow */}
            <div className="p-4">
                <div className="font-bold text-gray-800">{name}</div>
                <div className="text-gray-500">Tracking ID: {_id}</div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
                <StatusBlock status={status1} date={date1} getStatusStyle={getStatusStyle} />
                <StatusBlock status={status2} date={date2} getStatusStyle={getStatusStyle} />
                <StatusBlock status={status3} date={date3} getStatusStyle={getStatusStyle} />
            </div>
        </div>
    );
}

function StatusBlock({ status, date, getStatusStyle }) {
    const { color, icon } = getStatusStyle(status);

    return (
        <div className={`flex flex-col items-center bg-${color}-100 p-4 rounded-md`}> {/* Use bg-{color}-100 to set background color */}
            <div className="text-sm font-semibold text-gray-600">{status}</div>
            <div className="text-gray-800">{date}</div>
            <button className={`mt-2 rounded-md px-4 py-2 text-white bg-${color}-500`}>
                <FontAwesomeIcon icon={icon} />
            </button>
        </div>
    );
}

export default CustomerView;
