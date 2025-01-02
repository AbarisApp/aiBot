import Modal from "react-bootstrap/Modal";
import Product from "./product/Product";
import React from "react";
import { Tabs } from "antd";
import Account from "./account/Account";
import SerialNumber from "./serialNumber/SerialNumber";

function FastTrack({ show, setShow }) {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Prduct",
      children: <Product />,
    },
    {
      key: "2",
      label: "Account",
      children: <Account />,
    },
    {
      key: "3",
      label: "Serial Number",
      children: <SerialNumber/>
    },
  ];

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
        style={{ width: "90%", left: "5%" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Fast Track
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-2">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Modal.Body>
      </Modal>
    </>
  );
}
export default FastTrack;
