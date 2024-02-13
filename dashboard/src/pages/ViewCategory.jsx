import axios from "axios";
import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";

const ViewCategory = () => {
  let [data, setData] = useState([]);
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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Edit {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    let arr = [];
    async function viewcategory() {
      let data = await axios.get(
        "http://localhost:8000/api/v1/product/allcategory"
      );

      data.data.map((item) => {
        arr.push({
          key: item._id,
          name: item.name,
          active: item.isActive ? "Approved" : "Pending",
        });
      });

      setData(arr);
    }
    viewcategory();
  });
  return (
    <>
      <h1>Categories</h1>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default ViewCategory;
