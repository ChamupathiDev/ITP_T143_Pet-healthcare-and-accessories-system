import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Chart from "react-apexcharts";
import axios from "axios";

function ProductDashboard() {
  
  const [cbarChartData, setCbarChartData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8070/products/getAll"
        );
        const products = response.data.products;

        // Group products by category and sum their quantities
        const categories = {};
        products.forEach((product) => {
          if (categories[product.category]) {
            // Add quantity to existing category
            categories[product.category] += product.quantity;
          } else {
            // Create new category with quantity
            categories[product.category] = product.quantity;
          }
        });

        

        // Prepare data for bar chart
        const cbarChartOptions = {
          colors: ["#E91E63"],
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: Object.keys(categories),
          },
        };
        const cbarChartSeries = [
          {
            name: "Quantity",
            data: Object.values(categories),
          },
        ];
        setCbarChartData({
          options: cbarChartOptions,
          series: cbarChartSeries,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <section>
        <Nav />
      </section>

      <section className="pl-64 pt-20 overflow-x-auto">
        <div className="grid grid-cols-10">
          <div className="col-span-2 bg-customBlue h-full p-4 w-50 fixed top-12 left-0">
            <Sidebar />
          </div>

          <div className="col-span-9 bg-white-500 h-screen md:col-span-10">
            <div className="font-bold text-2xl pl-2">Dashboard</div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8 mt-28">
              
              <div className="mt-4">
                {cbarChartData && (
                  <div className="overflow-hidden">
                    <Chart
                      options={cbarChartData.options}
                      series={cbarChartData.series}
                      type="bar"
                      width="450"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default ProductDashboard;
