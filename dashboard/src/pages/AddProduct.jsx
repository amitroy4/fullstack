import React, { useEffect, useState } from "react";
import { Button, Select, Form, Input, Card, Col, Row, Upload } from "antd";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddProduct = () => {
  let [storelist, setStorelist] = useState([]);
  let [image, setImage] = useState({});
  let [imagePrev, setImagePrev] = useState("");
  let [description, setDescription] = useState("");
  const { TextArea } = Input;
  const onFinishMain = async (values) => {
    let data = await axios.post(
      "http://localhost:8000/api/v1/product/products",
      {
        name: values.name,
        description: description,
        avatar: image,
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
    console.log("Success:", data);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    async function getData() {
      let data = await axios.get(
        "http://localhost:8000/api/v1/product/allstore/65e8d039afaebe4f2cf5b2c4"
      );
      setStorelist(data.data);
    }
    getData();
  }, []);

  let handleChange = (e) => {
    setImage(e.target.files[0]);
    setImagePrev(URL.createObjectURL(e.target.files[0]));
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
        onFinish={onFinishMain}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        enctype="multipart/form-data"
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
        <CKEditor
          editor={ClassicEditor}
          // data="<p>Hello from CKEditor&nbsp;5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log(data);
            setDescription(data);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        <Form.Item
          label="Store/Brand"
          name="store"
          rules={[
            {
              required: true,
              message: "Please Select Store/Brand!",
            },
          ]}
        >
          <Select>
            {storelist.map((item) => (
              <Select.Option value={item._id}>{item.storename}</Select.Option>
            ))}
          </Select>
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
    </>
  );
};

export default AddProduct;
