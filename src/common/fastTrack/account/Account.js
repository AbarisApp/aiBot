import React from "react";
import { Tabs } from "antd";
import AccountTabForm from "./AccountTabForm";
import LedgerTab from "./ledgerTab/LedgerTab";
import AccountSummaryTab from "./accountSummaryTab/AccountSummaryTab";

function Account() {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Ledger",
      children: <LedgerTab />,
    },
    {
      key: "2",
      label: "Summary",
      children: <AccountSummaryTab/>
    },
  ];
  return (
    <>
      <AccountTabForm />
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
}

export default Account;
