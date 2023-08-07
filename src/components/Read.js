import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://64c29e51eb7fd5d6ebd02445.mockapi.io/crud-todo")
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id){
    axios.delete(`https://64c29e51eb7fd5d6ebd02445.mockapi.io/crud-todo/${id}`).then(() => {
      getData();
    })
  }

  const settoLocalStorage = (id, name, email) => {
      localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <h2>Read Operations</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Dalete</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
                <tbody>
                    <tr>
                    <th scope="row">{eachData.id}</th>
                    <td>{eachData.name}</td>
                    <td>{eachData.email}</td>
                    <td>
                    <Link to = '/update'>
                    <button className="btn btn-primary
                        px-4 rounded-pill" onClick={()=>settoLocalStorage(
                        eachData.id,
                        eachData.name,
                        eachData.email,
                        )}> Edit
                    </button>
                    </Link>
                    </td>
                    <td>
                        <button className="btn btn-danger 
                            px-3 rounded-pill" onClick={()=>handleDelete(eachData.id)}> Delete
                        </button>
                    </td>
                    </tr>
                </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
