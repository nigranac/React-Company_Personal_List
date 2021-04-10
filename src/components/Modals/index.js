import React, { useState } from "react";
import "./style.css";
import { Modal, Button } from "react-bootstrap";
import { updateUser } from "../../state/action-creators/userActions";
import { useSelector, useDispatch } from "react-redux";

const Modals = ({ minfo, index }) => {
  const dispatch = useDispatch();
  const userlist = useSelector((state) => state.users.userlist);
  const info = userlist[index];
  console.log("userList", userlist);

  console.log("index", index);
  const [show, setShow] = useState(false);

  const [nameModal, setNameModal] = useState(info.name);
  const [namesModal, setNamesModal] = useState(info.name);
  const [emailModal, setEmailModal] = useState(info.email);
  const [phoneModal, setPhoneModal] = useState(info.phone);
  const [webModal, setWebModal] = useState(info.website);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="card-link edit-icon">
        <i class="fas fa-edit"></i>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="modal-body-div" style={{}}>
            <p className="modal-text">Name:</p>
            <input
              onChange={(e) => {
                setNamesModal(e.target.value);
                setNameModal(e.target.value);
              }}
              type="text"
              defaultValue={info.name}
            />
          </div>
          <div className="modal-body-div">
            <p className="modal-text">Email:</p>
            <input
              onChange={(e) => setEmailModal(e.target.value)}
              type="text"
              defaultValue={info.email}
            />
          </div>
          <div className="modal-body-div">
            <p className="modal-text">Phone:</p>
            <input
              onChange={(e) => setPhoneModal(e.target.value)}
              type="text"
              defaultValue={info.phone}
            />
          </div>
          <div className="modal-body-div">
            <p className="modal-text">Website:</p>
            <input
              onChange={(e) => setWebModal(e.target.value)}
              type="text"
              defaultValue={info.website}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                updateUser({
                  id: minfo.id,
                  name: minfo.name && nameModal,
                  email: minfo.email && emailModal,
                  phone: minfo.phone && phoneModal,
                  website: minfo.website && webModal,
                })
              );
              setShow(false);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { Modals };
