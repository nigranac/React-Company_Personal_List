import React, { useState } from "react";
import { Modals } from "../Modals";
import "./style.css";
const User = ({ info, removeUser }) => {
  const [liked, setLiked] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [web, setWeb] = useState("");

  function nameChange(t) {
    setName(t);
  }
  function emailChange(t) {
    setEmail(t);
  }
  function phoneChange(t) {
    setPhone(t);
  }
  function webChange(t) {
    setWeb(t);
  }

  return (
    <div className="col-smd-6 col-md-6 my-4 ">
      <div className="card">
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/${info.name}.svg?options[mood][]=happy`}
          alt="resim"
          style={{ width: "200px", alignSelf: "center" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{name ? name : info.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
            {email ? email : info.email}
          </li>
          <li className="list-group-item">
            <i class="fa fa-phone" aria-hidden="true"></i>{" "}
            {phone ? phone : info.phone}
          </li>
          <li className="list-group-item">
            <i class="fa fa-globe" aria-hidden="true"></i>{" "}
            {web ? web : info.website}
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
          <Modals
            modalInfo={info}
            nameChange={(t) => nameChange(t)}
            emailChange={(t) => emailChange(t)}
            phoneChange={(t) => phoneChange(t)}
            webChange={(t) => webChange(t)}
          />

          <button
            onClick={() => {
              removeUser(info.name);
              setName("");
              setEmail("");
              setPhone("");
              setWeb("");
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
