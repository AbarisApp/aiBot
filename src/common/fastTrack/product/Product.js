import React from "react";
import { Tabs } from "antd";
import ProductForm from "./ProductForm";
import ProductHistory from "./productHistory/ProductHistory";
import ProductSummary from "./productSummary/ProductSummary";

function Product() {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "History",
      children: <ProductHistory />,
    },
    {
      key: "2",
      label: "Summary",
      children: <ProductSummary/>,
    },
  ];
  return (
    <>
      <ProductForm />
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
}

export default Product;
