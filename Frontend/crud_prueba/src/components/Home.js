import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
 
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost/CRUD_PRUEBA/Backend/index.php/main/users");
    setUser(result.data);

  };

 
  return (
      <div className="container">
        <div>
        <h2 class="text-center">Crud Prueba</h2>
        <Link className="btn btn-outline-primary" to="/users/add">Add User</Link>
          <table className="table border shadow">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Documento</th>
                <th>Genero</th>
                <th>Edad</th>
                <th>Telefono</th>
                <th>Eps</th>
                <th>Rol</th>
                <th>Actions</th>
              
              </tr>
            </thead>
            <tbody>
            {users.map((user) => (

               
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.nombre}</td>
                <td>{user.documento}</td>
                <td>{user.genero}</td>
                <td>{user.edad < 4 && <span class="badge badge-success">{user.edad}</span>} {user.edad > 50 && <span class="badge badge-danger">{user.edad}</span>}{user.edad > 3 && user.edad < 50 && <span class="badge badge-primary">{user.edad}</span>} </td>
                <td>{user.telefono}</td>
                <td>{user.eps}</td>
                <td>{user.rol}</td>
                <td>
                 
                  <Link
                    class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}

            </tbody>
          </table>
        </div>
      </div>

  )
}
