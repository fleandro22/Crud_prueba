import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link,  useHistory, useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

export const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    document: "",
    gender: "",
    date_birth: "",
    phone: "",
    eps_id: "1",
    rol_id: "1"
  });

  const {name, document, gender,date_birth, phone ,eps_id ,rol_id } = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost/CRUD_PRUEBA/Backend/index.php/main/useridEdit/?id=${id}&name=${name}&phone=${phone}&gender=${gender}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost/CRUD_PRUEBA/Backend/index.php/main/userid/?id=${id}`);   
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={e => onInputChange(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Your Document"
            name="document"
            value={document}
            onChange={e => onInputChange(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Your Gender"
            name="gender"
            value={gender}
            onChange={e => onInputChange(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Your Date of birth"
            name="date_birth"
            value={date_birth}
            onChange={e => onInputChange(e)}
          />
        </div>
      
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Your Phone Number"
            name="phone"
            value={phone}
            onChange={e => onInputChange(e)}
          />
        </div>
         
          <button className="btn btn-success btn-block">Update User</button>
          <Link class="btn btn-outline-primary btn-block" to="/">Cancel</Link>
          
        </form>
      </div>
    </div>
  )
}
