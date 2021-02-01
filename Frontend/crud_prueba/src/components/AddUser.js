import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";


export const AddUser = () => {

  let history = useHistory();
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

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`http://localhost/CRUD_PRUEBA/Backend/index.php/main/useradd`, JSON.stringify(user));
    history.push("/");
  };

  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Add A User</h2>
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
       
        <button className="btn btn-primary btn-block">Add  User</button>
              
      </form>
    </div>
  </div>
  )
}
