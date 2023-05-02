import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showUser,deleteUser } from "../feature/userDetailSlice";
import CustomModal from "./CustomModal";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);
  const [id,setId] = useState();
  const [ showPopup, setShowPopup ] = useState(false);
  
  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h3>Loading</h3>;
  }
  return (
    <div>
     {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup}></CustomModal>} 
      this is read operation
      <div className="card" style={{ width: "18rem" }}>
        {users.length >0 &&
          users.map((user) => (
            <div key={user.id} className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {user.email}
              </h6>
              <p className="card-text">
               {user.age}
              </p>
              <p className="card-text">
               {user.gender}
              </p>
              <a href="#" className="card-link" onClick={() => [setId(user.id), setShowPopup(true)]}>
                View
              </a>
              <Link to={`/edit/${user.id}`}  className="card-link">
                Edit
              </Link>
              <Link href="#" className="card-link" onClick={() => dispatch(deleteUser(user.id))}>
                Delete
              </Link>
              <div>
                <Link to="/">Home</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Read;
