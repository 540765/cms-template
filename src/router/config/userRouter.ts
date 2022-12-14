import type { RouteRecordRaw } from "vue-router";

export const userRouter: RouteRecordRaw[] = [
	{
		path: "/user",
		redirect: "/user/index",
		name: "user",
		meta: {
			elIcon: "CirclePlus",
			title: "用户管理员",
			permissions: ["用戶管理"]
		},
		children: [
			{
				path: "/user/index",
				component: () => import("@/views/user/index.vue"),
				meta: {
					elIcon: "CirclePlus",
					title: "用户员",
					permissions: []
				}
			},
			{
				path: "/user/index2",
				component: () => import("@/views/user/index.vue"),
				meta: {
					elIcon: "CirclePlus",
					title: "用户",
					permissions: []
				}
			},
			{
				path: "/user/index3",
				component: () => import("@/views/user/index.vue"),
				meta: {
					// hidden: true,
					elIcon: "CirclePlus",
					title: "用户",
					permissions: []
				}
			},
			{
				path: "/user/center",
				component: () => import("@/views/user/center.vue"),
				meta: {
					hidden: true,
					elIcon: "CirclePlus",
					title: "用户信息",
					permissions: []
				}
			}
		]
	}
];
