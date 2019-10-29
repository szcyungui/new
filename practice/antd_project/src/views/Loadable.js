import React, { Component } from "react";

//这个文件只是用于解释react-loadable原理用的，当然可以无缝切换
const Loadable = ({ loader, loading: Loading }) => {
  return class LoadableComponent extends Component {
    state = {
      LoadedComponent: null
    };
    componentDidMount() {
      loader().then(resp => {
        // console.log(resp.default)
        this.setState({
            LoadedComponent: resp.default
        });
      });
    }
    render() {
        const {
            LoadedComponent
        } = this.state
      return LoadedComponent ? <LoadedComponent /> : <Loading />;
    }
  };
};

export default Loadable;
