import { Footer } from "../Components/Footer";
import Sidebar from "./Sidebar";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

const Admin_addcar = () => {
  let navigate = useNavigate();

  let a = null;
  let decoded = null;
  try {
    let token = localStorage.getItem("Usertoken");
    decoded = jwt_decode(token);
    // valid token format
  } catch (error) {
    return "Forbidden";
  }

  try {
    if (decoded.user.role == "1") {
      return (
        <>
          <div classname="container">
            <div className="row align-items-start">
              <div className="col">
                <Sidebar />
              </div>
              <div className="col">
                <br />
                <br />
                <form>
                  <div className="form-group">
                    <label>name</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>model</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>price</label>
                    <input type="text" className="form-control" />
                  </div>

                  <br />
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block"
                  >
                    add car
                  </button>
                </form>
              </div>
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
        </>
      );
    } else {
      return "invalid access!";
    }
  } catch (err) {
    console.log(err);
  }
};
export default Admin_addcar;
