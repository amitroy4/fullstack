import axios from "axios";
import React, { useEffect, useState } from "react";
import { Space, Table, Modal, Form, Input, Button } from "antd";
import { useSelector } from "react-redux";

const ViewSubCategory = () => {
  let [data, setData] = useState([]);
  let [loadData, setloadData] = useState(false);
  let [loading, setloading] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState("");
  const userdata = useSelector((state) => state.activeUser.value);
  const showModal = (id) => {
    console.log(id);
    setEditId(id);
    setIsModalOpen(true);
  };
  console.log(editId);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  let handleDelete = async (id) => {
    setloading(id);
    console.log("Delete id ", id);

    let data = await axios.post(
      "http://localhost:8000/api/v1/product/deletesubcategory",
      {
        id: id,
      }
    );
    setloadData(!loadData);
    console.log(data);
    setloading(false);
  };

  const onFinishModal = async (values) => {
    console.log("SuccessModal:", values, editId);
    let reponse = await axios.post(
      "http://localhost:8000/api/v1/product/editsubcategory",
      {
        name: values.categoryname,
        id: editId,
      }
    );
    setloadData(!loadData);
    setIsModalOpen(false);
    console.log(reponse.data.success);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {userdata.role == "Merchant" && (
            <Button onClick={() => showModal(record.key)}>Edit</Button>
          )}
          <Button onClick={() => handleDelete(record.key)}>
            {" "}
            {(loading == record.key ? true : false) ? "Loading..." : "Delete"}
          </Button>
          {userdata.role == "Admin" && <Button>Approve</Button>}
        </Space>
      ),
    },
  ];

  useEffect(() => {
    let arr = [];
    async function viewcategory() {
      let data = await axios.get(
        "http://localhost:8000/api/v1/product/allsubcategory"
      );

      // console.log("hello",data.data[0].category.name);

      data.data.map((item) => {
        arr.push({
          key: item._id,
          name: item.name,
          category: item.category.name,
          active: item.isActive ? "Approved" : "Pending",
        });
      });

      setData(arr);
      console.log("list", arr);
    }
    viewcategory();
  }, [loadData]);

  return (
    <>
      <h1>SubCategories({data.length})</h1>
      <Modal
        title="Edit Sub-Category"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
          onFinish={onFinishModal}
          autoComplete="off"
        >
          <Form.Item
            label="Sub Category Name"
            name="categoryname"
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
      </Modal>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default ViewSubCategory;
