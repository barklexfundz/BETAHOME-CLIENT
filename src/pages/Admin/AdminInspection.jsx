import AdminLayout from "../../components/Admin components/AdminLayout";
import { inspections } from "../../mockData/inspectionHistory";
import "../../styles/Admin Styles/AdminInspection.css";
import home from "../../assets/images/home.png";
import Vector from "../../assets/images/Vector.png";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

const AdminInspection = () => {
  return (
    <div>
      <AdminLayout>
        <div className="topsec">
          <div className="d-flex gap-4 justify-content-start  justify-content-md-between align-items-center pe-2 inpectionHome my-2">
            <h4>Inspection History</h4>
            <div className="d-flex align-items-center gap-1">
              <GoHome />
              <Link>Home</Link> / <Link>Inspection History</Link>
            </div>
          </div>
          <h5>Scheduled Inspections</h5>
        </div>
        <hr />
        <div>
          <p className="dots fw-bold">
            <span>
              <img src={Vector} alt="" className="me-2" />
            </span>
            History
          </p>
        </div>

        <div className="table-responsive-md">
          <table className="table">
            <thead>
              <tr className="table-success">
                <th scope="col">#</th>
                <th scope="col">Customer</th>
                <th scope="col">Emails</th>
                <th scope="col">Location</th>
                <th scope="col">Date/Time</th>
              </tr>
            </thead>
            <tbody>
              {inspections.map((i, index) => {
                return (
                  <tr key={index}>
                    <th scope="row"> {index + 1} </th>
                    <td className="data1">
                      {" "}
                      <p className="fw-bold mb-0"> {i.name} </p>{" "}
                      <p className="my-0 fw-light ">{i.phoneNumber} </p>{" "}
                    </td>
                    <td className="fw-bold"> {i.email} </td>
                    <td className="fw-bold"> {i.location} </td>
                    <td>
                      {" "}
                      <p className="fw-bold mb-0">{i.date}</p>
                      <p className="my-0 fw-light ">{i.time}</p>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </AdminLayout>
    </div>
  );
};

export default AdminInspection;
