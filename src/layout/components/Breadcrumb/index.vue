<!--
 * @Description:
 * @User: Chen
 * @Date: 2022-10-27 13:35:52
-->
<script lang="ts">
export default {
	name: "Breadcrumb"
};
</script>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { RouteLocationMatched, useRoute, useRouter } from "vue-router";
import { compile } from "path-to-regexp";

const route = useRoute();
const router = useRouter();

const breadcrumbs = ref<RouteLocationMatched[]>([]);

const getBreadcrumb = () => {
	breadcrumbs.value = route.matched.filter((item) => {
		return item.meta && item.meta.title && item.meta.breadcrumb !== false;
	});
};

const pathCompile = (path: string) => {
	const { params } = route;
	const toPath = compile(path);
	return toPath(params);
};

const handleLink = (item: RouteLocationMatched) => {
	const { redirect, path } = item;
	if (redirect) {
		router.push(redirect as string);
		return;
	}
	router.push(pathCompile(path));
};

watch(
	() => route.path,
	(path) => {
		if (path.startsWith("/redirect/")) {
			return;
		}
		getBreadcrumb();
	}
);

getBreadcrumb();
</script>

<template>
	<el-breadcrumb class="app-breadcrumb">
		<el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
			<span v-if="item.redirect === 'noRedirect' || index === breadcrumbs.length - 1" class="no-redirect">
				{{ item.meta.title }}
			</span>
			<a v-else @click.prevent="handleLink(item)">
				{{ item.meta.title }}
			</a>
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<style lang="scss" scoped>
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
	font-weight: 400 !important;
}

.app-breadcrumb.el-breadcrumb {
	display: inline-block;
	margin-left: 8px;
	font-size: 14px;
	line-height: var(--v3-navigationbar-height);

	.no-redirect {
		color: #97a8be;
		cursor: text;
	}
}
</style>
