import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [radioData, setRadioData] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const { users, loading, searchData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className="user-list">
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2 className="pt-3 pb-3">All Users List</h2>

      <div>
        {users &&
          users
            .map((ele) => (
              <div key={ele.id} className="card w-50 mx-auto my-2">
                <div className="card-body">
                  <h5 className="card-title">Name-{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Email-{ele.email}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Age-{ele.age}</h6>
                  <button
                    className="btn btn-primary mr-3"
                    onClick={() => [setId(ele.id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <Link to={`/edit/${ele.id}`} className="m-3 btn btn-warning card-link">
                    Edit
                  </Link>
                  <Link
                    onClick={() => dispatch(deleteUser(ele.id))}
                    className="btn btn-danger card-link"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Read;
