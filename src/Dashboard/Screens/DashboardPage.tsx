import { useEffect} from 'react';
import { Chart } from "chart.js/auto";
import '../dashboard.css';


const DashboardPage = () => {
  useEffect(() => {
    const canvas = document.getElementById("myChart") as HTMLCanvasElement | null;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const chartInstance = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: "My Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
              },
              title: {
                display: true,
                text: "Sample Chart",
              },
            },
          },
        });

        // Limpiar el gráfico cuando el componente se desmonta
        return () => {
          chartInstance.destroy();
        };
      }
    }
  }, []);

  return (
    <div className="container-fluid">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
                  <svg className="bi">
                    <use xlinkHref="#calendar3" />
                  </svg>
                  This week
                </button>
              </div>
            </div>

            <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>

            <h2>Section title</h2>
            <div className="table-responsive small">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example rows */}
                  {Array.from({ length: 10 }, (_, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>Sample Data</td>
                      <td>More Data</td>
                      <td>Placeholder</td>
                      <td>Text</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
  );
};

export default DashboardPage;
