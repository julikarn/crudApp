import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { showUser,deleteUser,updateUser } from "../feature/userDetailSlice";
import {useNavigate, useParams  } from 'react-router-dom'

const Update = () => {
 
  const {id}=useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(id);
  const [updateData, setUpdateData] = useState();

  const { users,loading } = useSelector((state)=>state.app);

  const newData = (e) => {

    setUpdateData({ ...updateData, [e.target.name]: e.target.value });

  };

  useEffect(()=>{
    if(id){

      const singleuser = users.filter((ele)=> ele.id === id);
      setUpdateData(singleuser[0]);

    }
  },[]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };


  console.log(updateData);

 
  return (
    <div>
        <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
        <h2 className="heading">Edit the data</h2>
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
            value={updateData && updateData.name}
            onChange={newData}
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
            value={updateData && updateData.email}
            onChange={newData}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        {/* <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"

            value={updateData && updateData.password}
           
            id="exampleInputPassword1"
          />
        </div> */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={updateData && updateData.age}
            onChange={newData}
            id="exampleInputPassword1"
          />
        </div>
        <div>
          <input type="radio" id="male" name="gender" value="Male" checked={updateData && updateData.gender === "Male"} onChange={newData}/>
          <label htmlFor="male">Male</label>
          <br />
          <input type="radio" id="female" name="gender" value="female" checked={updateData && updateData.gender === "female"} onChange={newData}/>
          <label htmlFor="female">Female</label>
          <br />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      
    </div>
  )
}

export default Update
