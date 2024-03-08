import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Card } from "antd";

const AddProduct = () => {
  let [variantvalue, setVariantvalue] = useState([]);
  let [value, setValue] = useState("");
  let [valueStock, setValueStock] = useState("");
  const onFinish = (values) => {
    console.log("Success:", values);
    let arr = [...variantvalue];

    arr.push({
      name: values.variantname,
      value: [],
    });
    setVariantvalue(arr);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  let handleVariantValue = (index) => {
    variantvalue[index].value.push({
      name: value,
      stock: valueStock,
    });
    let arr = [...variantvalue];
    setVariantvalue(arr);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input Product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your description!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Variant Name"
          name="variantname"
          rules={[
            {
              required: true,
              message: "Please input your variant!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Add Variant
          </Button>
        </Form.Item>
        {variantvalue.length > 0 && (
          <>
            {variantvalue.map((item, index) => (
              <Card
                style={{
                  width: 300,
                }}
              >
                <>
                  <div key={index}>
                    <b>{item.name}</b>
                  </div>
                  <input
                    placeholder="Value name"
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <input
                    placeholder="Stock"
                    onChange={(e) => setValueStock(e.target.value)}
                  />
                  <Button onClick={() => handleVariantValue(index)}>Add</Button>
                  {item.value.map((i) => (
                    <>
                      <p>{i.name}</p>
                      <p>{i.stock}</p>
                    </>
                  ))}
                </>
              </Card>
            ))}
          </>
        )}
      </Form>
    </>
  );
};

export default AddProduct;
