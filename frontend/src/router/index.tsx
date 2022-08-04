import React, {lazy, LazyExoticComponent} from 'react';

// 声明类型
export namespace SyncRoute{
    export type Routes = {
        path: string,
        component: LazyExoticComponent<any>,
        children?: Routes[]
    }
}

const routerConfig: SyncRoute.Routes[] = [
    {
        path: '/',
        component: lazy(() => import("@/views/layout")),
        children: [
            {
                path: '/home',
                component: lazy(() => import("@/views/home"))
            }
        ]
    }
];

export default routerConfig;
