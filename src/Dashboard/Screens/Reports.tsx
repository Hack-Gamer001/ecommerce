
const Reports = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Reports</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Generate Report</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
        </div>
      </div>

      <h2>Report Overview</h2>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Report Name</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example rows */}
            {Array.from({ length: 10 }, (_, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>Report {index + 1}</td>
                <td>{new Date().toLocaleDateString()}</td>
                <td>Completed</td>
                <td>
                  <button className="btn btn-sm btn-outline-secondary">View</button>
                  <button className="btn btn-sm btn-outline-danger ms-1">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
