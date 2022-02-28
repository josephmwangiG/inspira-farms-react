import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function LineGraph(props) {  
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    datasets: [
      {
        label: "Room temperature",
        data: props.data['roomTemperature'],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Field temperature",
        data: props.data["fieldTemperature"],
        backgroundColor: "rgba(248, 196, 113,0.2)",
        borderColor: "rgba(248, 196, 113,1)",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}

export default LineGraph;
