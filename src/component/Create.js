import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {createUser} from '../feature/userDetailSlice'
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getUserData=(e)=>{

        setUsers({...users,[e.target.name] : e.target.value })
        
    }
    const handleSubmit =(e)=>{

        e.preventDefault()

        dispatch(createUser(users));
        navigate('/read');

    }
    
  return (
    <div>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <h2 className="heading">Fill the data</h2>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="name"
            aria-describedby="emailHelp"
            onChange={getUserData}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your name with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            onChange={getUserData}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={getUserData}
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            type="number"
            name="age"
            className="form-control"
            onChange={getUserData}
            id="exampleInputPassword1"
          />
        </div>
        <div>
          <input type="radio" id="male" name="gender" value="Male" onChange={getUserData}/>
          <label htmlFor="male">Male</label>
          <br />
          <input type="radio" id="female" name="gender" value="female" onChange={getUserData}/>
          <label htmlFor="female">Female</label>
          <br />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
