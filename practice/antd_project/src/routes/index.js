import { Dashboard, 
    Login, 
    NotFound, 
    Settings,
    Ariticlelist,
    AriticleEdit,
} from '../views'

export const mainRoutes = [{
    pathname:'/login',
    component:Login
},{
    pathname:'/404',
    component:NotFound
},
] 

export const adminRoutes = [{
    pathname:'/admin/ariticle',
    component:Ariticlelist,
    exact: true,
    Icon:"menu-unfold",
    title:'文章管理',
    isNav:true
    // 具有引申的较短的那一条路径需要用exact来进行限定
    // 不然类似于下面那台路由无法执行
},{
    pathname:'/admin/ariticle/edit/:id',
    component:AriticleEdit,
    title:'文章编辑',
    Icon:"edit",
    isNav:true
},{
    pathname:'/admin/dashboard',
    component:Dashboard,
    Icon:"issues-close",
    title:'仪表盘',
    isNav:true
},{
    pathname:'/admin/settings',
    component:Settings,
    title:'设置',
    Icon:"number",
    isNav:true
},]