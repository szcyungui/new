import React, { Component } from "react";
import { Card, Button, Table } from "antd";

import { getArticles } from "../../requests";

// const dataSource = [
//   {
//     key: "1",
//     name: "宋志超",
//     age: 21,
//     address: "凤凰居一号楼",
//     actions: "增加"
//   },
//   {
//     key: "2",
//     name: "落云归",
//     age: 18,
//     address: "邯郸市市南区",
//     actions: "删除"
//   }
// ];

// const columns = [
//   {
//     title: "姓名",
//     dataIndex: "name",
//     key: "name"
//   },
//   {
//     title: "年龄",
//     dataIndex: "age",
//     key: "age"
//   },
//   {
//     title: "住址",
//     dataIndex: "address",
//     key: "address"
//   },
//   {
//     title: "操作",
//     dataIndex: "actions",
//     key: "actions",
//     render: (text, record, index) => {
//       console.log({ text, record, index });
//       return <Button>编辑</Button>;
//     }
//   }
// ];

const displayTitle = {
  id: "id",
  title: "题目",
  author: "作者",
  createAt: "创建时间",
  amount: "阅读量"
};

export default class Ariticlelist extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [
        {
          key: "1",
          name: "宋志超",
          age: 21,
          address: "凤凰居一号楼",
          actions: "增加"
        },
        {
          key: "2",
          name: "落云归",
          age: 18,
          address: "邯郸市市南区",
          actions: "删除"
        }
      ],
      columns: [
        {
          title: "姓名",
          dataIndex: "name",
          key: "name"
        },
        {
          title: "年龄",
          dataIndex: "age",
          key: "age"
        },
        {
          title: "住址",
          dataIndex: "address",
          key: "address"
        },
        {
          title: "操作",
          dataIndex: "actions",
          key: "actions",
          render: (text, record, index) => {
            console.log({ text, record, index });
            return <Button>编辑</Button>;
          }
        }
      ],
      total: 0
    };
  }

  getData = () => {
    getArticles().then(resp => {
      console.log(resp.list);
      const columnKeys = Object.keys(resp.list[0]);
      console.log(columnKeys);
      const columns = columnKeys.map(item => {
        return {
          title: displayTitle[item],
          dataIndex: item,
          key: item
        };
      });
      const data = resp.list.map(item => {
        return {
          title: displayTitle[item],
          dataIndex: item,
          key: item
        };
      });
      this.setState({
        total: resp.total,
        columns: columns,
        dataSource: resp.list
      });
    });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <Card
        title="文章列表"
        bordered={false}
        extra={<Button>导出excel</Button>}
      >
        {/* <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p> */}
        <Table
          rowKey={record => record.id}
          columns={this.state.columns}
          dataSource={this.state.dataSource}
          // loading={true}
          pagination={{
            total: this.state.total,
            //单页的时候隐藏分页属性组件
            hideOnSinglePage: true
          }}
        />
      </Card>
    );
  }
}
