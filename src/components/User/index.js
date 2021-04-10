import React, { useState } from "react";
import { Modals } from "../Modals";
import { useDispatch } from "react-redux";
import "./style.css";
import { deleteUser } from "../../state/action-creators/userActions";

const User = ({ info, userIndex }) => {
  const dispatch = useDispatch();

  const [liked, setLiked] = useState(false);

  return (
    <div className="col-smd-6 col-md-6 my-4 ">
      <div className="card">
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/${info.id}.svg?options[mood][]=happy`}
          alt="resim"
          style={{ width: "200px", alignSelf: "center" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{info.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <i class="fa fa-envelope" aria-hidden="true"></i> {info.email}
          </li>
          <li className="list-group-item">
            <i class="fa fa-phone" aria-hidden="true"></i> {info.phone}
          </li>
          <li className="list-group-item">
            <i class="fa fa-globe" aria-hidden="true"></i> {info.website}
          </li>
        </ul>
        <div className="d-flex justify-content-center card-body text-center">
          <button
            onClick={() => {
              setLiked(!liked);
            }}
            className="card-link  likeIcon"
          >
            <i
              style={{ fontSize: "30px" }}
              className={liked ? "fas fa-heart" : "far fa-heart"}
              aria-hidden="true"
            ></i>
          </button>

          <Modals id={info.id} info={info} index={userIndex} />
          <button
            onClick={() => {
              dispatch(deleteUser({ id: info.id }));
            }}
            className="card-link trash-button"
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export { User };
