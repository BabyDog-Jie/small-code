import React from "react";
import {Navigate, useLocation} from 'react-router-dom';

/**
 * 组件相当于一个拦截器，是否返回被拦截的组件要听他的
 * @param {*} children
 */
const interceptor: React.FC<{children: React.ReactElement}> = ({children}) => {
    const {pathname} = useLocation();
    return (
        pathname === '/home' ? ( // 判断 localstorage 中登录状态是否为 true
            children
        ) : (
            <Navigate to="/home" replace /> // 跳转到登录
        )
    )
};

export default interceptor;
