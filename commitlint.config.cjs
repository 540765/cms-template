module.exports = {
	extends: ["@commitlint/config-conventional"],
	// 以下时我们自定义的规则
	/**配置package.json的path为下面才会生效：
	 * "path": "node_modules/cz-conventional"
	 */
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"bug", // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
				"feat", // 新功能（feature）
				"style", //style: 代码格式（不影响功能，例如空格、分号等格式修正）
				"fix", // 修补bug
				"docs", // 文档（documentation）
				"style", // 格式（不影响代码运行的变动）
				"refactor", // 重构（即不是新增功能，也不是修改bug的代码变动）
				"test", // 增加测试
				"chore", // 构建过程或辅助工具的变动
				"revert", // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
				"merge" // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
			]
		]
	},
	//配置中文
	// type 类型（定义之后，可通过上下键选择）
	/** 需要配置package.json的path才会生效
   *  "commitizen": {
      "path": "node_modules/cz-customizable"
    },bug，feat，style，fix，docs，style、refactor，test，chore，revert，merge
   */
	types: [
		{ value: "bug", name: "debug使用" },
		{ value: "feat", name: "feat: 新增功能" },
		{ value: "fix", name: "fix: 修复 bug" },
		{ value: "docs", name: "docs: 文档变更" },
		{ value: "style", name: "style: 代码格式（不影响功能，例如空格、分号等格式修正）" },
		{ value: "refactor", name: "refactor: 代码重构（不包括 bug 修复、功能新增）" },
		{ value: "merge", name: "merge: 分支合併操作：慎重" },
		{ value: "test", name: "test: 添加、修改测试用例" },
		{ value: "chore", name: "chore: 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）" },
		{ value: "revert", name: "revert: 回滚 commit" }
	],
	// scope 类型（定义之后，可通过上下键选择）
	scopes: [
		["components", "组件相关"],
		// ["hooks", "hook 相关"],
		["utils", "utils 相关"],
		["styles", "样式相关"],
		["deps", "项目依赖"],
		["auth", "对 auth 修改"],
		["other", "其他修改"],
		// 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
		["custom", "以上都不是？我要自定义"]
	].map(([value, description]) => {
		return {
			value,
			name: `${value.padEnd(30)} (${description})`
		};
	}),

	// 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。
	// allowCustomScopes: true,

	// allowTicketNumber: false,
	// isTicketNumberRequired: false,
	// ticketNumberPrefix: 'TICKET-',
	// ticketNumberRegExp: '\\d{1,5}',

	// 针对每一个 type 去定义对应的 scopes，例如 fix
	/*
  scopeOverrides: {
    fix: [
      { name: 'merge' },
      { name: 'style' },
      { name: 'e2eTest' },
      { name: 'unitTest' }
    ]
  },
  */
	// 交互提示信息
	messages: {
		type: "请选择提交类型(必填)",
		scope: "选择一个 scope (可选)",
		// 选择 scope: custom 时会出下面的提示
		customScope: "请输入文件修改范围(可选)",
		subject: "请简要描述提交(必填)",
		body: "请输入详细描述(可选)",
		breaking: "列出任何BREAKING CHANGES(破坏性修改)(可选)",
		footer: "请输入要关闭的issue(可选)",
		confirmCommit: "确认提交？"
	},

	// 设置只有 type 选择了 feat 或 fix，才询问 breaking message
	allowBreakingChanges: ["feat", "fix"],

	// 跳过要询问的步骤
	// skipQuestions: ['body', 'footer'],

	// subject 限制长度
	subjectLimit: 100,
	breaklineChar: "|" // 支持 body 和 footer
	// footerPrefix : 'ISSUES CLOSED:'
	// askForBreakingChangeFirst : true,
};
