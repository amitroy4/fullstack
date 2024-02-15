import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Select, Space } from "antd";
import axios from "axios";

const AddSubCategory = () => {
  let [data, setData] = useState([]);
  let [dataId, setDataId] = useState("");
  const onFinish = async (values) => {
    console.log("Success:", values, dataId);
    let reponse = await axios.post(
      "http://localhost:8000/api/v1/product/subcategory",
      {
        name: values.subcategoryname,
        category: dataId,
      }
    );
    // console.log(reponse.data.success);
    // if (reponse.data.success == "Successfully Created") {
    //   values.categoryname = "";
    // }
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setDataId(value);
  };

  useEffect(() => {
    let arr = [];
    async function viewcategory() {
      let data = await axios.get(
        "http://localhost:8000/api/v1/product/allcategory"
      );

      data.data.map((item) => {
        if (item.isActive) {
          arr.push({
            value: item._id,
            label: item.name,
          });
        }
      });

      setData(arr);
    }
    viewcategory();
  }, []);
  return (
    <>
      <div>Add SubCategory</div>

      <Select
        defaultValue={"Select a Category"}
        style={{
          width: 220,
          marginTop: 20,
          marginBottom: 20,
        }}
        onChange={handleChange}
        options={data}
      />
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
        autoComplete="off"
      >
        <Form.Item
          label=""
          name="subcategoryname"
          rules={[
            {
              required: true,
              message: "Please input your category name!",
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
    </>
  );
};

export default AddSubCategory;
