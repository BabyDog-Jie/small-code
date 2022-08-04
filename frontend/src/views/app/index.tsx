import React, {Suspense} from "react";
import {useRoutes} from "react-router-dom";
import routerConfig, {SyncRoute} from "@/router";
import {RouteObject} from "react-router/lib/router";
import {Spin} from "antd";

const app: React.FC = () => {

    /**
     * 路由过滤器
     * @param {Array} routeConfig
     */
    const syncRouter = (routeConfig: SyncRoute.Routes[]): RouteObject[] => {
        return routeConfig.map(route => {
            return {
                path: route.path,
                element: (
                    <Suspense fallback={<Spin />}>
                        <route.component/>
                    </Suspense>
                ),
                children: route.children && syncRouter(route.children)
            }
        });
    }

    return useRoutes(syncRouter(routerConfig));
};

export default app;
