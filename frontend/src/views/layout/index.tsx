import React from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

const layout: React.FC<{}> = () => {
    // 返回一个当前的路由对象
    // const location = useLocation();
    // const { key, pathname } = location

    // 返回一个NavigateFunction，可以利用返回的函数进行编程式导航，相当于Navigate组件
    // const navigate = useNavigate()
    // navigate('/home',{replace:true,state:{name:'zwc666'}})

    // useParams 用来获取当前路由的params

    return (
        <div>
            <span>layout</span>
            <Outlet/>
        </div>
    )
}

export default layout;
