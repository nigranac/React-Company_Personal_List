import React, { useState } from "react";
import "./style.css";
import { Modal, Button } from "react-bootstrap";

const Modals = ({
  modalInfo,
  nameChange,
  emailChange,
  phoneChange,
  webChange,
}) => {
  const [show, setShow] = useState(false);
  const [nameModal, setNameModal] = useState(modalInfo.name);
  const [emailModal, setEmailModal] = useState(modalInfo.email);
  const [phoneModal, setPhoneModal] = useState(modalInfo.phone);
  const [webModal, setWebModal] = useState(modalInfo.website);

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
              onChange={(e) => setNameModal(e.target.value)}
              type="text"
              defaultValue={modalInfo.name}
            />
          </div>
          <div className="modal-body-div">
            <p className="modal-text">Email:</p>
            <input
              onChange={(e) => setEmailModal(e.target.value)}
              type="text"
              defaultValue={modalInfo.email}
            />
          </div>
          <div className="modal-body-div">
            <p className="modal-text">Phone:</p>
            <input
              onChange={(e) => setPhoneModal(e.target.value)}
              type="text"
              defaultValue={modalInfo.phone}
            />
          </div>
          <div className="modal-body-div">
            <p className="modal-text">Website:</p>
            <input
              onChange={(e) => setWebModal(e.target.value)}
              type="text"
              defaultValue={modalInfo.website}
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
              nameChange(nameModal);
              emailChange(emailModal);
              phoneChange(phoneModal);
              webChange(webModal);
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
