import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();

    const header = {"Access-Control-Allow-Origin": "*"};

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("clicked");
        // to send the data
        axios.post('https://64c29e51eb7fd5d6ebd02445.mockapi.io/crud-todo', {
                name: name, 
                email:email,
                header,
        }).then(() =>{
            history("/read");
        })
    };

  return (
    <div>
      <form>
        <h2>Create Operations</h2>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputPassword1" 
                onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                onChange={(e) => setEmail(e.target.value)} />
        </div>

        <button type="submit" className="btn px-4 btn-dark" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Create
