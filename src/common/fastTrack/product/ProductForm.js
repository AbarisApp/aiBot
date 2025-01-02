import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import { useState } from "react";

function ProductForm() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="py-3">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <div className="col-6 d-flex">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom03"
              className="mb-3 me-1"
            >
              {/* <Form.Label>Product </Form.Label> */}
              <Form.Select aria-label="Default select example">
                <option>Product</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a Product .
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom03"
              className="mb-3"
            >
              {/* <Form.Label>Location </Form.Label> */}
              <Form.Select aria-label="Default select example">
                <option>Location</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a Location .
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-6">
            <ul className="d-flex" style={{ justifyContent: "center" }}>
              <li className="mx-3">
                <div>
                  <b className="fs-6 fw-100">Op. Qty</b>
                </div>
                <div className="text-center">
                  <small className="text-success">51</small>
                </div>
              </li>

              <li className="mx-3">
                <div>
                  <b className="fs-6 fw-100">In. Qty</b>
                </div>
                <div className="text-center">
                  <small className="text-success">51</small>
                </div>
              </li>
              <li className="mx-3">
                <div>
                  <b className="fs-6 fw-100">Out. Qty</b>
                </div>
                <div className="text-center">
                  <small className="text-danger">51</small>
                </div>
              </li>
              <li className="mx-3">
                <div>
                  <b className="fs-6 fw-100">Stock</b>
                </div>
                <div className="text-center">
                  <small className="text-success">51</small>
                </div>
              </li>
            </ul>
          </div>
        </Row>

        <Button type="submit">Go</Button>
      </Form>
    </div>
  );
}

export default ProductForm;
