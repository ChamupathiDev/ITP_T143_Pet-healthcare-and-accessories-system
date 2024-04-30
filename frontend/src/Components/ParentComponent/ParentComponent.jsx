import React, { useState, useEffect } from "react";
import axios from "axios";
import DelProgressChart from "..DelProgressChart/DelProgressChart";

function ParentComponent() {
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    // Fetch tracking data from API
    axios.get("http://localhost:5000/tracking").then((response) => {
      setStatusData(response.data);
    });
  }, []);

  // Calculate sums of status1, status2, and status3
  const sumStatus1 = statusData.reduce((acc, curr) => acc + curr.status1, 0);
  const sumStatus2 = statusData.reduce((acc, curr) => acc + curr.status2, 0);
  const sumStatus3 = statusData.reduce((acc, curr) => acc + curr.status3, 0);

  return (
    <div>
      <DelProgressChart
        sumStatus1={sumStatus1}
        sumStatus2={sumStatus2}
        sumStatus3={sumStatus3}
      />
    </div>
  );
}

export default ParentComponent;
