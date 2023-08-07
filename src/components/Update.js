import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const Navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();        
            axios.put(`https://64c29e51eb7fd5d6ebd02445.mockapi.io/crud-todo/${id}`,
                {
                    name: name, 
                        email:email
                }).then(() => {
                Navigate("/read");
            })      
        }

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[])

    return (
        <>
            <form>
            <h2>Update Operations</h2>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Name</label>
                <input type="text" value={name} className="form-control" id="exampleInputPassword1" 
                    onChange={(e) => setName(e.target.value)}  />
            </div>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                   onChange={(e) => setEmail(e.target.value)} />
                
            </div>

            <button type="submit" className="btn px-4 btn-dark" onClick={handleUpdate}>Update</button>
            </form>
        </>
    )
}

export default Update
