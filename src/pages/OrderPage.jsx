import  { useState } from 'react';
import { Button, Input, Modal, Form, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import OrderTable from '../components/OrderTable';
import data from '../assets/DummyData.json';

const OrderPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [randomId, setRandomId] = useState("");
  const [modalFormData, setModalFormData] = useState({
    id: '',
    customer_name: "",
    customer_email: "",
    quantity: "",
    product: ""
  });
  const [isValidEmail, setValidEmail] = useState(false);

  const generateRandomHexadecimalId = () => {
    const hexChars = '0123456789abcdef';
    return hexChars[Math.floor(Math.random() * 16)];
  }

  const handleOk = () => {
    setModalOpen(false);
    setRandomId(generateRandomHexadecimalId());
    data.push({
      id: randomId,
      customer_name: modalFormData.customer_name,
      customer_email: modalFormData.customer_email,
      quantity: modalFormData.quantity,
      product: modalFormData.product
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModalFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEmailValidation = (e) => {
    const { name, value } = e.target;
    const emailRegex = /\S+@\S+\.\S+/;

    if (emailRegex.test(value)) {
        setValidEmail(true);
    }
    setModalFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
  }


  return (
    <div className="flex flex-col">
      <div className="mb-5 flex justify-end">
        <Button
          className="bg-blue-400 font-semibold text-white shadow-md"
          size="large"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Create New Order
        </Button>
      </div>
      <Modal
        title="Add New Order"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setModalOpen(false)}
      >
        <Form layout="vertical">
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
              onChange={handleEmailValidation}
              value={modalFormData.customer_email}
              name="customer_email"
              placeholder="Enter Customer Email"
              type="email"
              className={isValidEmail ? "" : "border-red-500"}
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
            <Select
                onChange={(value) => {
                    setModalFormData(prevState => ({
                    ...prevState,
                    product: value
                    }));
                }}
                value={modalFormData.product}
                name="product"
                placeholder="Select Product"
                suffixIcon={<DownOutlined />}
            >
                <Select.Option value="Product 1">Product 1</Select.Option>
                <Select.Option value="Product 2">Product 2</Select.Option>
                <Select.Option value="Product 3">Product 3</Select.Option>

            </Select>
           
          </Form.Item>
        </Form>
      </Modal>

      <OrderTable data={data} />
    </div>
  );
};

export default OrderPage;
