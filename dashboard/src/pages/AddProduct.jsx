import React, { useEffect, useState } from "react";
import { Button, Select, Form, Input, Card, Col, Row, Upload } from "antd";
import axios from "axios";

const AddProduct = () => {
  let [variantvalue, setVariantvalue] = useState([]);
  let [checkSize, setCheckSize] = useState("");
  let [value, setValue] = useState("");
  let [valueStock, setValueStock] = useState("");
  let [storelist, setStorelist] = useState([]);
  let [image, setImage] = useState({});
  let [imagePrev, setImagePrev] = useState("");
  const onFinishMain = async (values) => {
    let data = await axios.post(
      "http://localhost:8000/api/v1/product/products",
      {
        name: values.name,
        description: values.description,
        variant: variantvalue,
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
        <Input onChange={handleChange} type="file" />
        {imagePrev && <img src={imagePrev} width={100} height={100} />}

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
        <Row>
          {variantvalue.length > 0 && (
            <>
              {variantvalue.map((item, index) => (
                <Col span={8}>
                  <Card
                    style={{
                      width: 300,
                    }}
                  >
                    <Button onClick={() => handleDelete(index)}>Delete</Button>
                    <>
                      <div key={index}>
                        <b>{item.name}</b>
                      </div>
                      <input
                        placeholder="Value name"
                        onChange={(e) => setValue(e.target.value)}
                      />
                      {item.name == "size" && variantvalue.length == 1 ? (
                        <input
                          placeholder="Stock"
                          onChange={(e) => setValueStock(e.target.value)}
                        />
                      ) : (
                        item.name == "color" &&
                        variantvalue.length != 1 && (
                          <input
                            placeholder="Stock"
                            onChange={(e) => setValueStock(e.target.value)}
                          />
                        )
                      )}

                      <Button onClick={() => handleVariantValue(index)}>
                        Add
                      </Button>
                      {item.value.map((i, id) => (
                        <>
                          <p>{i.name}</p>
                          <p>{i.stock}</p>
                          <Button
                            danger
                            onClick={() => handleValueDelete(index, id)}
                          >
                            Delete
                          </Button>
                        </>
                      ))}
                    </>
                  </Card>
                </Col>
              ))}
            </>
          )}
        </Row>
      </Form>
    </>
  );
};

export default AddProduct;
