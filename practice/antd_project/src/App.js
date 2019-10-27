import React, { Component, Fragment } from "react";
import { Button } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";
import { adminRouter } from "./routes";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>这是公共组件的部分</div>
        <Switch>
          {adminRouter.map(route => {
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
          <Redirect to={adminRouter[0].pathname} from='/admin' exact />
          <Redirect to='/404'/>
        </Switch>
      </div>
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
