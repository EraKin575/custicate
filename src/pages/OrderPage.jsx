import { Button, Input, Modal, Form } from "antd";
import OrderTable from "../components/OrderTable";
import { useState } from "react";

const OrderPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalFormData, setModalFormData] = useState({
    id: '',
    customer_name: "",
    customer_email: "",
    quantity: "",
    product: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModalFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="flex justify-items-end flex-col">
      <Button
        className="bg-blue-500"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add Order
      </Button>
      <Modal
        title="Add New Order"
        open={isModalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={() => setModalOpen(false)}
      >
        <Form layout="vertical">
          <Form.Item label="Order ID">
            <Input
              onChange={handleChange}
              value={modalFormData.id}
              name="id"
              placeholder="Enter Order ID"
            />
          </Form.Item>
          <Form.Item label="Customer Name">
            <Input
              onChange={handleChange}
              value={modalFormData.customer_name}
              name="customer_name"
              placeholder="Enter Customer Name"
            />
          </Form.Item>
          <Form.Item label="Customer Email">
            <Input
              onChange={handleChange}
              value={modalFormData.customer_email}
              name="customer_email"
              placeholder="Enter Customer Email"
              type="email"
            />
          </Form.Item>
          <Form.Item label="Quantity">
            <Input
              onChange={handleChange}
              value={modalFormData.quantity}
              name="quantity"
              placeholder="Enter Quantity"
              type="number"
            />
          </Form.Item>
          <Form.Item label="Product">
            <Input
              onChange={handleChange}
              value={modalFormData.product}
              name="product"
              placeholder="Enter Product Name"
            />
          </Form.Item>
        </Form>
      </Modal>

      <OrderTable />
    </div>
  );
};

export default OrderPage;
