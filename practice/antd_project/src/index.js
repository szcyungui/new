import React, { Fragment } from 'react'
import {render} from 'react-dom'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
//一个会带有#在路由中HashRouter 一个不会BrowserRouter
import { mainRouter } from './routes'

import App from './App'
import './index.less'

render(
    <Router>
        <Switch>
            {/* 外部路由 */}
            <Route path='/admin' render={(routerProps)=>{
                //TODO 后期需要设置权限 需要登录才能访问/admin
                return <App {...routerProps}/>
            }}></Route>
            {
                mainRouter.map(route => {
                    return <Route key={route.pathname} path={route.pathname} component={route.component}></Route>
                })
            }
            <Redirect to='/admin' from='/' exact></Redirect>
            <Redirect to='/404'></Redirect>
        </Switch>
    </Router>,
    document.querySelector('#root')
)