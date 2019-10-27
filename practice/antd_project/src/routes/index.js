import { Dashboard, 
    Login, 
    NotFound, 
    Settings,
    Ariticlelist,
    AriticleEdit,
} from '../views'

export const mainRouter = [{
    pathname:'/login',
    component:Login
},{
    pathname:'/404',
    component:NotFound
},
] 

export const adminRouter = [{
    pathname:'/admin/dashboard',
    component:Dashboard
},{
    pathname:'/admin/settings',
    component:Settings
},{
    pathname:'/admin/ariticle',
    component:Ariticlelist,
    exact: true
    // 具有引申的较短的那一条路径需要用exact来进行限定
    // 不然类似于下面那台路由无法执行
},{
    pathname:'/admin/ariticle/edit/:id',
    component:AriticleEdit
},]