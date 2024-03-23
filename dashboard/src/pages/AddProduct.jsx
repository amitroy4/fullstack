import React, { useEffect, useState } from "react";
import { Button, Select, Form, Input, Card, Col, Row, Upload } from "antd";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddProduct = () => {
  let [checkSize, setCheckSize] = useState("");
  let [value, setValue] = useState("");
  let [valueStock, setValueStock] = useState("");
  let [storelist, setStorelist] = useState([]);
  let [image, setImage] = useState({});
  let [imagePrev, setImagePrev] = useState("");
  let [productType, setProductType] = useState("");
  let [description, setDescription] = useState("");
  const { TextArea } = Input;
  const onFinishMain = async (values) => {
    let data = await axios.post(
      "http://localhost:8000/api/v1/product/products",
      {
        name: values.name,
        description: description,
        // variant: variantvalue,
        avatar: image,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Success:", data);
  };
  const onFinish = (values) => {
    // console.log("Success:", values);
    let arr = [...variantvalue];
    if (values.variantname.toLowerCase() == "size") {
      setCheckSize("size");
    }
    arr.push({
      name: values.variantname,
      value: [],
    });

    if (arr.length <= 3) {
      setVariantvalue(arr);
    } else {
      console.log("Out of Array size");
    }
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

  let handleDelete = (index) => {
    console.log(index);

    let arr = [...variantvalue];
    arr.splice(index, 1);
    setVariantvalue(arr);
  };

  let handleValueDelete = (mainid, id) => {
    // console.log(mainid, id);
    let arr = [...variantvalue];
    // console.log(arr[mainid].value);
    arr[mainid].value.splice(id, 1);
    setVariantvalue(arr);
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
  let handleSelectChange = (e) => {
    setProductType(e);
    // console.log(e);
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
        onFinish={onFinishMain}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        enctype="multipart/form-data"
      >
        <Select
          defaultValue="nonvariant"
          style={{
            width: 120,
          }}
          options={[
            {
              value: "variant",
              label: "variant",
            },
            {
              value: "nonvariant",
              label: "Non variant",
            },
          ]}
          onChange={handleSelectChange}
        />

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
        <Input onChange={handleChange} type="file" />
        {imagePrev && <img src={imagePrev} width={100} height={100} />}
        {productType == "variant" ? (
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
        ) : (
          <Form.Item label="TextArea">
            <TextArea rows={4} />
          </Form.Item>
        )}
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
      {productType == "variant" && (
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
              maxWidth: 1000,
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
          </Form>
        </>
      )}
    </>
  );
};

export default AddProduct;
