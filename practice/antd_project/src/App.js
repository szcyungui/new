import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { adminRoutes } from "./routes";
import {Frame} from './components'

const menus = adminRoutes.filter(route => route.isNav === true)

export default class App extends Component {
  render() {
    return (
      <Frame menus={menus}>
        {/* <div>这是公共组件的部分</div> */}
        <Switch>
          {adminRoutes.map(route => {
            return (
              <Route
                key={route.pathname}
                path={route.pathname}
                exact={route.exact}
                render={(routeProps) => {
                  return <route.component {...routeProps} />;
                }}
              />
            );
          })}
          <Redirect to={adminRoutes[0].pathname} from='/admin' exact />
          <Redirect to='/404'/>
        </Switch>
      </Frame>
    );
  }
}

// const testHOC = WrappedComponent => {
//   return class HOCComponent extends Comment {
//     render() {
//       return (
//         <Fragment>
//           <WrappedComponent />
//           <div>这是高阶组件的信息</div>
//         </Fragment>
//       );
//     }
//   };
// };

// // @testHOC
// class App extends Component {
//   render() {
//     return (
//       <div>
//         App<Button type="primary">Default</Button>
//       </div>
//     );
//   }
// }

// export default App;
