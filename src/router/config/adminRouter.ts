import type { RouteRecordRaw } from "vue-router";

export const adminRouter: RouteRecordRaw[] = [
	{
		path: "/admin",
		component: () => import("@/views/admin/index.vue"),
		meta: {},
		children: [
			{
				path: "/admin/index",
				component: () => import("@/views/admin/index.vue"),
				meta: {}
			}
		]
	}
];
