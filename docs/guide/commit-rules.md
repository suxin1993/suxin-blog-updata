# 提交规范

## 代码提交规范

每个人都有自己的书写风格，一致的代码提交规范及说明，有几个好处

* 提供更多的历史信息，方便快速浏览。

* 可以过滤某些commit（比如文档改动），便于快速查找信息。

* 可以直接从commit生成Change log。

##  commit类型规则

团队只允许使用以下9个类型标识

| code | info |
| --- | --- |
| feat: msg | 新功能 |
| fix: msg | 修复bug |
| docs: msg | 文档修改 |
| style: msg | 代码格式改变，不影响代码运行的变动 |
| perf: msg | 性能优化 |
| refactor: msg | 重构，既不是新增功能，也不是修改bug的代码变动 |
| test: msg | 增加测试 |
| revert: msg | 回滚，撤销上一次的 commit |
| chore: msg | 构建过程或辅助工具的变动 |

提交代码时，需要写清楚是哪一种类型，格式：code:+空格+msg ，例如：`feat: 新增支付按钮`

如果不符合以上格式，代码将不允许提交推送。

*注：代码提交规范，适用于Commit message。遵循该规则，可以使用 Commitizen 和 validate-commit-msg 来自动生成 Change log*