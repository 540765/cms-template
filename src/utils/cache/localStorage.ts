import CacheKey from "./cacheKey";
import { type ThemeName } from "@/hooks/useTheme";
import { userinfo } from "@/api/module/admin/dto";
import Logger from "@/utils/console/index";
export const suportLocalstorage = (): boolean => {
	return window.localStorage ? true : false;
};

export const getSidebarStatus = () => {
	if (suportLocalstorage()) {
		return localStorage.getItem(CacheKey.SIDEBAR_STATUS);
	}
};
export const setSidebarStatus = (sidebarStatus: "opened" | "closed") => {
	if (suportLocalstorage()) {
		localStorage.setItem(CacheKey.SIDEBAR_STATUS, sidebarStatus);
	}
};

export const getActiveThemeName = (): ThemeName => {
	if (suportLocalstorage() && typeof localStorage.getItem(CacheKey.ACTIVE_THEME_NAME) === "string") {
		return localStorage.getItem(CacheKey.ACTIVE_THEME_NAME) as ThemeName;
	} else {
		return "normal";
	}
};
export const setActiveThemeName = (themeName: ThemeName) => {
	if (suportLocalstorage()) {
		localStorage.setItem(CacheKey.ACTIVE_THEME_NAME, themeName);
	}
};

export const getUserInfo = (): userinfo => {
	if (typeof localStorage.getItem(CacheKey.USER_INFO) === "string") {
		return JSON.parse(localStorage.getItem(CacheKey.USER_INFO) as string) as userinfo;
	} else {
		return { id: 0, admin: false, avatar: "", email: "", nickname: "", permissions: [] };
	}
};

export const setUserInfo = (userInfo: userinfo) => {
	if (suportLocalstorage()) {
		localStorage.setItem(CacheKey.USER_INFO, JSON.stringify(userInfo));
	}
};

export const getAccessToken = () => {
	if (suportLocalstorage()) {
		return localStorage.getItem(CacheKey.ACCESS_TOKEN);
	} else {
		Logger.error("浏览器不支持localStorage", "getAccessToken", "getAccessToken()");
		return "Bearn NosuportLocalstorage";
	}
};

export const setAccessToken = (access_token: string) => {
	if (suportLocalstorage()) {
		localStorage.setItem(CacheKey.ACCESS_TOKEN, "Bearer " + access_token);
	}
};

export const getRefreshToken = () => {
	if (suportLocalstorage()) {
		return localStorage.getItem(CacheKey.REFRESH_TOKEN);
	}
};

export const setRefreshToken = (refresh_token: string) => {
	if (suportLocalstorage()) {
		localStorage.setItem(CacheKey.REFRESH_TOKEN, "Bearer " + refresh_token);
	}
};

export const getLang = (): string => {
	if (suportLocalstorage() && typeof localStorage.getItem(CacheKey.LANG) === "string") {
		return localStorage.getItem(CacheKey.LANG) as string;
	} else {
		return "zh_cn";
	}
};

export const setLang = (lang: string) => {
	if (suportLocalstorage()) {
		localStorage.setItem(CacheKey.LANG, lang);
	}
};

export const getIsLoged = (): boolean => {
	if (suportLocalstorage()) {
		if (localStorage.getItem(CacheKey.ISLOGED) === "1") {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};

export const setIsLoged = (isLoged: boolean) => {
	if (suportLocalstorage() && isLoged) {
		localStorage.setItem(CacheKey.ISLOGED, "1");
	} else if (suportLocalstorage() && !isLoged) {
		localStorage.setItem(CacheKey.ISLOGED, "0");
	}
};
