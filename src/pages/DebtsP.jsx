import { Button, Col, FloatingLabel, Form, InputGroup, Modal, Row, Table } from "react-bootstrap";
import React, { Fragment, useState } from "react";


const DebtsP = () => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [selected, setSelected] = useState(null);
  
  const [debt, setDebt] = useState({
    id: "",
    price: null,
    category: "1",
    decription: "",
    date: "",
    time: ""
  });

  const [debts, setDebts] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showForm = () => {
    handleShow();
    setValidated(false);
    setDebt({
      price: null,
      category: "1",
      phone: "",
      note: "",
      date: "",
      time: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity()) {
      if (selected) {
        let newDebts = debts.map((el) => {
          if (el.id === selected) {
            return debt;
          } else {
            return el;
          }
        });
        setDebts(newDebts);
      } else {
        setDebts([...debts, { ...debt, id: debts.length + 1 }])
      };
      handleClose();
    }
  };

  const handleChange = (e) => {
    setDebt({ ...debt, [e.target.name]: e.target.value });
  };
  
  const edit = (id) => {
    let debt = debts.find((debt) => debt.id === id);
    setDebt(debt);
    setSelected(id);
    handleShow();
  };

   const deleteDebt = (id) => {
    const updatedDebts = debts.filter((debt) => debt.id !== id);
    setDebts(updatedDebts);
  };
  return (
    
    <Fragment>
      <Button onClick={showForm} className="btn btn-danger">+</Button>
      <br /><br /><a href="/transactions"  className="btn btn-primary">Transations</a>
      <Table style={{marginTop: "20px"}} striped bordered hover>
        <thead>
          <tr  style={{textAlign: "center"}}>
            <th>No</th>
            <th>Price</th>
            <th>Kategory</th>
            <th>Izoh</th>
            <th>Sana</th>
            <th>Vaqt</th>
            <th style={{textAlign: "right"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {debts.map((debt, index) => (
            <tr  style={{textAlign: "center", alignItems: "center"}}>
              <td>{index + 1}</td>
              <td>{debt.price}</td>
              <td>{debt.category}</td>
              <td>{debt.decription}</td>
              <td>{debt.sana}</td>
              <td>{debt.vaqt}</td>
              <td style={{display: "flex", alignItems: "center", gap: "5px", justifyContent: "end"}}>
                <button style={{display: "flex", alignItems: "center", gap: "5px"}} className="btn btn-primary" onClick={() => edit(debt.id)}><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg></div> <div>Edit</div></button>
                <button style={{display: "flex", alignItems: "center", gap: "5px"}} className="btn btn-danger"  onClick={() => deleteDebt(debt.id)}><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg></div> <div>Delete</div></button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Group>
            <Form.Label>Narx</Form.Label>
            <InputGroup hasValidation className="mb-3">
              <InputGroup.Text id="inputGroupPrepend">UZS</InputGroup.Text>
              <Form.Control
                required
                  value={debt.price}
                  name="price"
                  onChange={handleChange}
                  type="number"
                  placeholder="Price"
              />
              <InputGroup.Text id="inputGroupPrepend">.00</InputGroup.Text>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill !
                </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Kategory</Form.Label>
            <Form.Select aria-label="Default select example" onChange={handleChange} value={debt.category} name="category">
                  <option required>Ichimlik</option>
                  <option required>Transport</option>
                  <option required>Telefon</option>
                  <option required>Kitob</option>
            </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please fill !
                </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Izoh</Form.Label>
            <FloatingLabel hasValidation className="mb-3" controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                      required
                      onChange={handleChange} 
                      value={debt.decription} 
                      name="decription"
                    />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill !
                </Form.Control.Feedback>
            </FloatingLabel>
            
          </Form.Group>

          <Form.Group>
            <Row className="mb-3">
                  <Form.Group hasValidation as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Sana</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      placeholder="First name"
                      onChange={handleChange} 
                      value={debt.sana} 
                      name="sana"
                    />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please fill !
                  </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Vaqt</Form.Label>
                    <Form.Control
                      required
                      type="time"
                      placeholder="Last name"
                      onChange={handleChange} 
                      value={debt.vaqt} 
                      name="vaqt"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please fill !
                    </Form.Control.Feedback>
                  </Form.Group>
            </Row>
          </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              {selected ? "Save" : "Add"} debt
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Fragment>
    
  );
};

export default DebtsP;
