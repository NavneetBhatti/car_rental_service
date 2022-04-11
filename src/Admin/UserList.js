import { Footer } from "../Components/Footer";
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Admin_userlist = () => {
    const [users, setUsers] = useState([]);

    const sendGetRequest = async () => {
        try {
            const response = await axios.get(
                'http://localhost:5000/api/user/'
            );
            setUsers(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        sendGetRequest();
    }, []);

    return (
        <>
            <div classname="container">
                <div className="row">
                    <div className="col-3 ">
                        <Sidebar />
                    </div>
                    <div className="col-8">
                        <br />
                        <br />

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <User user={user} key={user.id} />
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>




        </>
    );
}




const User = ({ user }) => {
    const deletefn = async (e) => {
       
        const id = e.target.getAttribute("data-userid");
        console.log(id);
        try {
            const response = await axios.delete(
              'http://localhost:9999/api/user/'+id
            );

            console.log(response);
    
          } catch (err) {
            console.log(err);
          }
      };

    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>{user.phone}</td>
            <td>
                <button onClick={(e) => deletefn(e)} data-userid={user.id} type="button" className="btn  m-1 btn-sm btn-danger">delete</button>
                <button  data-userid={user.id} type="button" className="btn m-1 btn-sm btn-primary">edit</button>
            </td>
        </tr>
    );
};

export default Admin_userlist