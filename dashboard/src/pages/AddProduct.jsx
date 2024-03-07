import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Card } from "antd";

const AddProduct = () => {
  let [variantvalue, setVariantvalue] = useState([]);
  const onFinish = (values) => {
    console.log("Success:", values);
    let arr = [...variantvalue];

    arr.push({
      name: values.variantname,
      value: values.variantvalue,
    });
    setVariantvalue(arr);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

//   let handleVariant = () => {
//     let arr = [...variantvalue];

//     arr.push({
//       name: values.variantname,
//       value: values.variantvalue,
//     });
//     setVariantvalue(arr);
//   };

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
          label="Variant Value"
          name="variantvalue"
          rules={[
            {
              required: true,
              message: "Please input your variant!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Button  type="primary">
          Add Variant
        </Button>

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
        {variantvalue.length > 0 && (
          <Card
            style={{
              width: 300,
            }}
          >
            {variantvalue.map((item) => (
              <>
                <div>{item.name}</div>
                <div>{item.value}</div>
              </>
              //   <Form.Item
              //     label="Variant Name"
              //     name="variantname"
              //     rules={[
              //       {
              //         required: true,
              //         message: "Please input your variant!",
              //       },
              //     ]}
              //   >
              //     <Input />
              //   </Form.Item>
            ))}
          </Card>
        )}
      </Form>
    </>
  );
};

export default AddProduct;
