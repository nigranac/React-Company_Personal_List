import React, { useState } from "react";
import "./style.css";
import { Modal, Button } from "react-bootstrap";
import { updateUser } from "../../state/action-creators/userActions";
import { useSelector, useDispatch } from "react-redux";

const Modals = ({ info, index, id }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const [nameModal, setNameModal] = useState(info.name);
  const [emailModal, setEmailModal] = useState(info.email);
  const [phoneModal, setPhoneModal] = useState(info.phone);
  const [webModal, setWebModal] = useState(info.website);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  async function updateUserEdit() {
    const payload = {
      name: nameModal,
      email: emailModal,
      phone: phoneModal,
      website: webModal,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      requestOptions
    );
    const data = await response.json();
    dispatch(
      updateUser({
        data: data,
      })
    );
    setShow(false);
  }

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
              name="name"
              onChange={(e) => {
                setNameModal(e.target.value);
              }}
              type="text"
              defaultValue={info.name}
            />
          </div>
          <div className="modal-body-div">
            <p className="modal-text">Email:</p>
            <input
              name="email"
              onChange={(e) => setEmailModal(e.target.value)}
              type="text"
              defaultValue={info.email}
            />
          </div>
          <div className="modal-body-div">
            <p className="modal-text">Phone:</p>
            <input
              name="phone"
              onChange={(e) => setPhoneModal(e.target.value)}
              type="text"
              defaultValue={info.phone}
            />
          </div>
          <div className="modal-body-div">
            <p className="modal-text">Website:</p>
            <input
              name="website"
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
          <Button variant="primary" onClick={updateUserEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { Modals };
