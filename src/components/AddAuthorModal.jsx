import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddAuthorModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);

  const onChangeSetFile = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async (avatar) => {
    const fileData = new FormData();
    fileData.append("avatar", avatar);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/authors/upload`,
        {
          method: "POST",
          body: fileData,
        }
      );

      return await response.json();
    } catch (error) {
      console.log(error, "Errore in upload file");
    }
  };

  const onSubmit = async (e) => {
    //si aggiunge il file a formData se esiste
    if (file) {
      try {
        const uploadAvatar = await uploadFile(file);
        const finalBody = {
          ...formData,
          cover: uploadAvatar.img, //il nome è cover perché abbiamo usato questo nel modello
        };

        const response = await fetch(
          `${process.env.REACT_APP_SERVER_BASE_URL}/authors/create`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(finalBody),
          }
        );

        return response.json();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.error("Seleziona almeno un file");
    }
    // return await client.post("/posts/create", finalBody);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Iscriviti
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>STRIVEBLOG - A BACKEND STORY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form encType="multipart/form-data">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mario"
                autoFocus
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    firstName: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Rossi"
                autoFocus
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    lastName: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Data di nascita</Form.Label>
              <Form.Control
                type="text"
                placeholder="01/01/2001"
                autoFocus
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    birthDay: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Avatar</Form.Label>
              <Form.Control type="file" autoFocus onChange={onChangeSetFile} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  });
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              onSubmit();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddAuthorModal;
