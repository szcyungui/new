// import Dashboard from "./Dashboard";
// import Login from "./Login";
// import NotFound from "./NotFound";
// import Settings from "./Settings";
// import Ariticlelist from "./Ariticle";
// import AriticleEdit from "./Ariticle/Edit";

//下面这个就是一个简易的loadable的原理
import {Loading} from "../components";
import Loadable from "react-loadable";
//下面这个就是一个简易的loadable的原理
// import Loadable from './Loadable'
//下面是懒加载
const Dashboard = Loadable({
  loader: () => import("./Dashboard"),
  loading: Loading
});

const Login = Loadable({
  loader: () => import("./Login"),
  loading: Loading
});

const NotFound = Loadable({
  loader: () => import("./NotFound"),
  loading: Loading
});

const Settings = Loadable({
  loader: () => import("./Settings"),
  loading: Loading
});

const AriticleEdit = Loadable({
  loader: () => import("./Ariticle/Edit"),
  loading: Loading
});

const Ariticlelist = Loadable({
  loader: () => import("./Ariticle"),
  loading: Loading
});

export { Dashboard, Login, NotFound, Settings, Ariticlelist, AriticleEdit };

// -Login
// -404
// -admin
//     -dashboard
//     -aritical
//         -list
//         -edit
//     -settings
