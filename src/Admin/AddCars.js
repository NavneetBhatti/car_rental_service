import { Footer } from "../Components/Footer";
import Sidebar from './Sidebar';

const Admin_addcar = () => {

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
                            <button type="submit" className="btn btn-dark btn-lg btn-block">add car</button>

                        </form>
                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>




        </>
    );
}
export default Admin_addcar