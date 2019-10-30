import React, { Component } from "react";
import { Card, Button, Table, Tag, Result } from "antd";

import { getArticles } from "../../requests";
import moment from "moment";
import XLSX from "xlsx";

const ButtonGroup = Button.Group;

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
      dataSource: [],
      columns: [],
      total: 0,
      isLoading: false,
      offset: 0,
      limited: 10
    };
  }

  createColumns = columnKeys => {
    //为了最后添加一行编辑按钮，所以下面的直接return 改成了 const
    // return columnKeys.map(item => {
    const columns = columnKeys.map(item => {
      if (item === "amount") {
        return {
          title: displayTitle[item],
          key: item,
          render: (text, record, index) => {
            // console.log({ text, record, index });
            const { amount } = record;
            // console.log(text)
            // console.log(record)
            // console.log(index)
            // 总经理：'001'  经理：'002' 主管：'003'
            // const titleMap = {
            //   "001": "red",
            //   "002": "green",
            //   "003": "blue"
            // };
            // return <Tag color={titleMap[titleKey]}>{record.amount}</Tag>
            return (
              //根据数字的大小做一个状态的分隔
              <Tag color={amount > 210 ? "red" : "blue"}>{record.amount}</Tag>
            );
          }
        };
      }
      if (item === "createAt") {
        return {
          title: displayTitle[item],
          key: item,
          render: (text, record, index) => {
            const { createAt } = record;
            return (
              //根据时间戳返回时间格式显示
              //HH是24小时制 hh是12小时制
              moment(createAt).format("YYYY年MM月DD日 HH:mm:ss")
            );
          }
        };
      }
      return {
        title: displayTitle[item],
        dataIndex: item,
        key: item
      };
    });
    columns.push({
      title: "操作",
      key: "action",
      render: (text, record, index) => {
        console.log({ text, record, index });
        return (
          <ButtonGroup>
            <Button size="small" type="primary">
              编辑
            </Button>
            <Button size="small" type="danger">
              删除
            </Button>
          </ButtonGroup>
        );
      }
    });
    return columns;
  };

  getData = () => {
    this.setState({
      isLoading: true
    });
    getArticles(this.state.offset, this.state.limited)
      .then(resp => {
        console.log(resp);
        const columnKeys = Object.keys(resp.list[0]);
        console.log(columnKeys);
        const columns = this.createColumns(columnKeys);
        this.setState({
          total: resp.total,
          columns: columns,
          dataSource: resp.list,
          isLoading: false
        });
      })
      .catch(err => {
        //处理错误
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  onPageChange = (page, pageSize) => {
    console.log(page, pageSize);
    this.setState(
      {
        offset: pageSize * (page - 1),
        limited: pageSize
      },
      () => {
        this.getData();
      }
    );
  };
  onShowSizeChange = (current, size) => {
    //这里需要很仔细得参照需求，回到第一页还是留在当前页
    this.setState(
      {
        offset: 0,
        limited: size
      },
      () => {
        this.getData();
      }
    );
  };

  toExcel = () => {
    const data = [Object.keys(this.state.dataSource[0])];
    for (let i = 0; i < this.state.dataSource.length; i++) {
      // const values = Object.values(this.state.dataSource[i])
      //data.push(values)
      data.push([
        this.state.dataSource[i].id,
        this.state.dataSource[i].title,
        this.state.dataSource[i].author,
        this.state.dataSource[i].amount,
        moment(this.state.dataSource[i].createAt).format("YYYY年MM月DD日 HH:mm:ss")
      ]);
    }
    console.log(data);
    //在实际项目中这个功能是前端发送请求，后端返回文件下载的地址，生成的操作是后端实现的
    // console.log('toExcel')
    //创建一个工作区
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    //创建一个新问价 发送给客户
    XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
    XLSX.writeFile(wb, `test-${moment().format("YYYY-MM-DD-HH-mm-ss")}.xlsx`);
  };

  render() {
    return (
      <Card
        title="文章列表"
        bordered={false}
        extra={<Button onClick={this.toExcel}>导出excel</Button>}
      >
        {/* <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p> */}
        <Table
          loading={this.state.isLoading}
          rowKey={record => record.id}
          columns={this.state.columns}
          dataSource={this.state.dataSource}
          // loading={true}
          pagination={{
            current: this.state.offset / this.state.limited + 1,
            showQuickJumper: true,
            showSizeChanger: true,
            onShowSizeChange: this.onShowSizeChange,
            total: this.state.total,
            //单页的时候隐藏分页属性组件
            // hideOnSinglePage: true,
            onChange: this.onPageChange
          }}
        />
      </Card>
    );
  }
}
