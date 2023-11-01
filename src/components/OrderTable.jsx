import { Table } from "antd";
import React, { useState } from "react";
import data from '../assets/DummyData.json';

const OrderTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onRowSelected = selectedRowKeys => {
    setSelectedRowKeys(selectedRowKeys);
    console.log(selectedRowKeys);
  }

  const columns = [
    {
      title: "Order ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Customer Name",
      dataIndex: "customer_name",
      key: "customerName",
    },
    {
      title: "Customer Email",
      dataIndex: "customer_email",
      key: "customerEmail",
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    }
  ]

  const rowSelection = {
    selectedRowKeys,
    onChange: onRowSelected,
  };

  return (
    <div>
      <Table
        rowSelection={rowSelection}
        onRow={(record) => {
          return {
            onClick: () => {
              onRowSelected([record.id]);
            }
          }
        }}
        dataSource={data} columns={columns} />
    </div>
  );
}

export default OrderTable;