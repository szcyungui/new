import { Button, Radio, Icon } from 'antd';
import React,{Component, Fragment} from 'react'

export default class ButtonStyle extends Component {
  state = {
    size: 'large',
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <Fragment>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Normal</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <Button type="danger" size={size}>
          Danger
        </Button>
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <Button type="primary" icon="download" size={size} />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" shape="round" icon="download" size={size} />
        <Button type="primary" shape="round" icon="download" size={size}>
          Download
        </Button>
        <Button type="primary" icon="download" size={size}>
          Download
        </Button>
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />
            Backward
          </Button>
          <Button type="primary">
            Forward
            <Icon type="right" />
          </Button>
        </Button.Group>
      </Fragment>
    );
  }
}