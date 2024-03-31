import React, { useEffect, useState } from "react";
import { Button, Select, Form, Input, Card, Col, Row, Upload } from "antd";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddVarient = () => {
  let [value, setValue] = useState("");
  let [image, setImage] = useState({});
  let [imagePrev, setImagePrev] = useState("");
  let [productId, setProductId] = useState("");
  let [proList, setProList] = useState([]);

  const { TextArea } = Input;
  const onFinish = async (values) => {
    // console.log("Success:", values.name);
    console.log("Success:", productId);
    let data = await axios.post(
      "http://localhost:8000/api/v1/product/varient",
      {
        name: values.name,
        vavatar: image,
        productId: productId,
        regularprice: values.regularprice,
        salesprice: values.salesprice,
        quantity: values.quantity,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("data", values.name);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    async function getData() {
      let arr = [];
      let data = await axios.get(
        "http://localhost:8000/api/v1/product/allproducts"
      );
      data.data.map((item) => {
        arr.push({
          label: item.name,
          value: item._id,
        });
      });
      setProList(arr);
      console.log(arr);
    }
    getData();
  }, []);

  let handleChange = (e) => {
    setImage(e.target.files[0]);
    setImagePrev(URL.createObjectURL(e.target.files[0]));
    console.log("image", image);
  };
  let handleSelectChange = (e) => {
    setProductId(e);
    console.log(e);
  };

  let handleAddVarient = () => {
    let arr = [...variantvalue];
    arr.push();
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
        enctype="multipart/form-data"
      >
        <Select
          defaultValue=""
          style={{
            width: 120,
          }}
          options={proList}
          onChange={handleSelectChange}
        />
        <Form.Item
          label="Varient Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input Varient name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Regular Price"
          name="regularprice"
          rules={[
            {
              required: true,
              message: "Please input Regular Price!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Sales Price"
          name="salesprice"
          rules={[
            {
              required: true,
              message: "Please input Sales Price!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[
            {
              required: true,
              message: "Please input Quantity!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Input onChange={handleChange} type="file" />
        {imagePrev && <img src={imagePrev} width={100} height={100} />}
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
    </>
  );
};

export default AddVarient;
