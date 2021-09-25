# 编程规约

规范的目的是为了增强团队开发协作、提高代码质量、降低程序出错概率。

以下规范是团队基本约定的内容，必须严格遵循。

## (一)命名规范

### 1、项目命名

全部采用小写方式，以中线分隔。

正例：`tt-super-player`<Badge type="tip" text="good" vertical="middle" />

反例：`tt_super_player / ttSuperPlayer`<Badge type="danger" text="bad" vertical="middle" />

### 2、目录命名

全部采用小写方式，以中划线分隔，有复数结构时，要采用复数命名法，缩写不用复数。

正例：`scripts/styles/components/images/utils/layouts/demo-scripts/img/doc`<Badge type="tip" text="good" vertical="middle" />

反例：`script/style/demo_scripts/demoStyles/imgs/docs`<Badge type="danger" text="bad" vertical="middle" />

【特殊】VUE的项目中的components中的组件目录，使用kebab-case命名。

正例：`head-search/page-loading/authorized/notice-icon`<Badge type="tip" text="good" vertical="middle" />

反例：`HeadSearch/PageLoading`<Badge type="danger" text="bad" vertical="middle" />

【特殊】VUE的项目中的除components组件目录外的所有目录也使用kebab-case命名。

正例：`page-one/shopping-car/user-management`<Badge type="tip" text="good" vertical="middle" />

反例：`ShoppingCar/UserManagement`<Badge type="danger" text="bad" vertical="middle" />

### 3、JS、CSS、SCSS、HTML、PNG文件命名

全部采用小写方式，以中划线分隔。

正例：`render-dom.js/signup.css/index.html/company-logo.png`<Badge type="tip" text="good" vertical="middle" />

反例：`renderDom.js/UserManagement.html`<Badge type="danger" text="bad" vertical="middle" />

### 4、命名严谨性

代码中的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。

说明：正确的英文拼写和语法可以让阅读者易于理解，避免歧义。

注意，即使纯拼音命名方式也要避免采用

正例：`henan/luoyang/rmb`<Badge type="tip" text="good" vertical="middle" /> 国际通用的名称，可视同英文

反例：`DaZhePromotion[打折]/getPingfenByName()[评分]/int 某变量=3`<Badge type="danger" text="bad" vertical="middle" />

杜绝完全不规范的缩写，避免望文不知义：

反例：`AbstractClass` 缩写命名成 `AbsClass`；`condition` 缩写命名成 `condi`，此类随意缩写严重降低了代码的可阅读性。<Badge type="danger" text="bad" vertical="middle" />

## (二)HTML规范（Vue Template 同样适用）

### 1、HTML类型

推荐使用HTML5的文档类型申明：

建议使用text/html格式的HTML。避免使用XHTML。XHTML以及它的属性，比如application/xhtml+xml在浏览器中的应用支持与优化空间都十分有限。

* 规定字符编码
* IE兼容模式
* 规定字符编码
* doctype大写

正例：<Badge type="tip" text="good" vertical="middle" />

```html
<!DOCTYPEhtml>
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
    <meta charset="UTF-8"/>
    <title>Pagetitle</title>
  </head>
  <body>
    <img src="images/company-logo.png" alt="Company">
  </body>
</html>
```

### 2、缩进

缩进使用2个空格（一个tab）；

嵌套的节点应该缩进。

### 3、分块注释

在每一个块状元素，列表元素和表格元素后，加上一对HTML注释。

### 4、语义化标签

HTML5中新增很多语义化标签，所以优先使用语义化标签，避免一个页面都是div或者p标签。

正例：<Badge type="tip" text="good" vertical="middle" />

```html
<header></header>
<footer></footer>
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```html
<div>
  <p></p>
</div>
```

### 5、引号

使用双引号("")而不是单引号(’')。

正例：<Badge type="tip" text="good" vertical="middle" />

```html
<div class="box"></div>
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```html
<div class='box'></div>
```

## (三)CSS规范

### 1、命名

* 类名使用小写字母，以中划线分隔
* id采用驼峰式命名
* less中的变量、函数、混合、placeholder采用驼峰式命名

ID和class的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和晦涩难懂的名称。

推荐：<Badge type="tip" text="good" vertical="middle" />

```css
.heavy{
  font-weight:800;
}
.important{
  color:red;
}
```

不推荐：<Badge type="danger" text="bad" vertical="middle" />

```css
.fw-800{
  font-weight:800;
}
.red{
  color:red;
}
```

### 2、选择器

1)css选择器中避免使用标签名

从结构、表现、行为分离的原则来看，应该尽量避免css中出现HTML标签，并且在css选择器中出现标签名会存在潜在的问题。

2)使用直接子选择器

很多前端开发人员写选择器链的时候不使用直接子选择器（注：直接子选择器和后代选择器的区别）。有时，这可能会导致疼痛的设计问题并且有时候可能会很耗性能。然而，在任何情况下，这是一个非常不好的做法。如果你不写很通用的，需要匹配到DOM末端的选择器，你应该总是考虑直接子选择器。

推荐：<Badge type="tip" text="good" vertical="middle" />

```css
.content>.title{
  font-size:2rem;
}
```

不推荐：<Badge type="danger" text="bad" vertical="middle" />

```css
.content.title{
  font-size:2rem;
}
```

### 3、尽量使用缩写属性

推荐：<Badge type="tip" text="good" vertical="middle" />

```css
.box{
  border-top:0;
  font:100%/1.6 palatino,georgia,serif;
  padding:0 1em 2em;
}
```

不推荐：<Badge type="danger" text="bad" vertical="middle" />

```css
.box{
  border-top-style:none;
  font-family:palatino,georgia,serif;
  font-size:100%;
  line-height:1.6;
  padding-bottom:2em;
  padding-left:1em;
  padding-right:1em;
  padding-top:0;
}
```

### 4、每个选择器及属性独占一行

推荐：<Badge type="tip" text="good" vertical="middle" />

```css
button{
  width:100px;
  height:50px;
  color:#fff;
  background:#00a0e9;
}
```

不推荐：<Badge type="danger" text="bad" vertical="middle" />

```css
button{
  width:100px;height:50px;color:#fff;background:#00a0e9;
}
```

### 5、省略0后面的单位

推荐：<Badge type="tip" text="good" vertical="middle" />

```css
div{
  padding-bottom:0;
  margin:0;
}
```

不推荐：<Badge type="danger" text="bad" vertical="middle" />

```css
div{
  padding-bottom:0px;
  margin:0em;
}
```

### 6、避免使用ID选择器及全局标签选择器防止污染全局样式

推荐：<Badge type="tip" text="good" vertical="middle" />

```css
.header{
  padding-bottom:0;
  margin:0;
}
```

不推荐：<Badge type="danger" text="bad" vertical="middle" />

```css
#header{
  padding-bottom:0;
  margin:0;
}
```

## (四)LESS规范

### 1、代码组织

1)将公共less文件放置在style/less/common文件夹

例: `//color.less,common.less`

2)按以下顺序组织

1、@import;  
2、变量声明;  
3、样式声明;  

```css
@import "mixins/size.less";

@default-text-color:#333;

.page{
  width:960px;
  margin:0 auto;
}
```

### 2、避免嵌套层级过多

将嵌套深度限制在3级。对于超过4级的嵌套，给予重新评估。这可以避免出现过于详实的CSS选择器。避免大量的嵌套规则。当可读性受到影响时，将之打断。推荐避免出现多于20行的嵌套规则出现。

推荐：<Badge type="tip" text="good" vertical="middle" />

```css
.main-title{  
  .name{
    color:#fff;
  }
}
```

不推荐：<Badge type="danger" text="bad" vertical="middle" />

```css
.main{
  .title{
    .name{
      color:#fff;
    }
  }
}
```

## (五)JavaScript规范

### 1、命名

1)采用小写驼峰命名lowerCamelCase，代码中的命名均不能以下划线，也不能以下划线或美元符号结束

反例：`_name/name_/name$`<Badge type="danger" text="bad" vertical="middle" />

2)方法名、参数名、成员变量、局部变量都统一使用lowerCamelCase风格，必须遵从驼峰形式

正例：`localValue/getHttpMessage()/inputUserId`<Badge type="tip" text="good" vertical="middle" />

* 其中 method 方法命名必须是 动词 或者 动词+名词 形式

正例：`saveShopCarData/openShopCarInfoDialog`<Badge type="tip" text="good" vertical="middle" />

反例：`save/open/show/go`<Badge type="danger" text="bad" vertical="middle" />

* 特此说明，增删查改，详情统一使用如下5个单词，不得使用其他（目的是为了统一各个端）

`add / update / delete / detail / get`

* 附：函数方法常用的动词:

`get 获取/set 设置`  
`add 增加/remove 删除`  
`create 创建/destory 销毁`  
`start 启动/stop 停止`  
`open 打开/close 关闭`  
`read 读取/write 写入`  
`load 载入/save 保存`  
`begin 开始/end 结束`  
`backup 备份/restore 恢复`  
`import 导入/export 导出`  
`split 分割/merge 合并`  
`inject 注入/extract 提取`  
`attach 附着/detach 脱离`  
`bind 绑定/separate 分离`  
`view 查看/browse 浏览`  
`edit 编辑/modify 修改`  
`select 选取/mark 标记`  
`copy 复制/paste 粘贴`  
`undo 撤销/redo 重做`  
`insert 插入/delete 移除`  
`add 加入/append 添加`  
`clean 清理/clear 清除`  
`index 索引/sort 排序`  
`find 查找/search 搜索`  
`increase 增加/decrease 减少`  
`play 播放/pause 暂停`  
`launch 启动/run 运行`  
`compile 编译/execute 执行`  
`debug 调试/trace 跟踪`  
`observe 观察/listen 监听`  
`build 构建/publish 发布`  
`input 输入/output 输出`  
`encode 编码/decode 解码`  
`encrypt 加密/decrypt 解密`  
`compress 压缩/decompress 解压缩`  
`pack 打包/unpack 解包`  
`parse 解析/emit 生成`  
`connect 连接/disconnect 断开`  
`send 发送/receive 接收`  
`download 下载/upload 上传`  
`refresh 刷新/synchronize 同步`  
`update 更新/revert 复原`  
`lock 锁定/unlock 解锁`  
`checkout 签出/checkin 签入`  
`submit 提交/commit 交付`  
`push 推/pull 拉`  
`expand 展开/collapse 折叠`  
`enter 进入/exit 退出`  
`abort 放弃/quit 离开`  
`obsolete 废弃/depreciate 废旧`  
`collect 收集/aggregate 聚集`  

3)常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长

正例：`MAX_STOCK_COUNT`<Badge type="tip" text="good" vertical="middle" />

反例：`MAX_COUNT`<Badge type="danger" text="bad" vertical="middle" />

4)布尔值变量命名技巧

布尔类型只能包含2个值，即  `true` 或 `false`

使用 `is` , `has` , `can` 之类的谓词前缀将有助于读者推断变量类型

正例：<Badge type="tip" text="good" vertical="middle" />

```js
const isOpen = true;
const canWrite = true;
const hasFruit = true;
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```js
const open = true;
const write = true;
const fruit = true;
```

### 2、代码格式

1)使用2个空格进行缩进

正例：<Badge type="tip" text="good" vertical="middle" />

```js
if(x<y){
  x+=10;
}else{
  x+=1;
}
```

2)不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以提升可读性

说明：任何情形，没有必要插入多个空行进行隔开。

### 3、字符串

统一使用单引号(' ')，不使用双引号(" ")。这在创建HTML字符串非常有好处：

正例：<Badge type="tip" text="good" vertical="middle" />

```js
let str = 'foo';
let testDiv = '<divid="test"></div>';
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```js
let str = "foo";
let testDiv = "<divid='test'></div>";
```

### 4、对象声明

1)使用字面值创建对象

正例：<Badge type="tip" text="good" vertical="middle" />

```js
let user = {};
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```js
let user = new Object();
```

2)使用字面量来代替对象构造器

正例：<Badge type="tip" text="good" vertical="middle" />

```js
var user = {
  age:0,
  name:1,
  city:3
};
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```js
var user = new Object();
user.age = 0;
user.name = 0;
user.city = 0;
```

### 5、使用ES6+

必须优先使用 ES6+ 中新增的语法糖和函数。这将简化你的程序，并让你的代码更加灵活和可复用。比如箭头函数、await/async，解构，let，for...of等等。

### 6、括号

下列关键字后必须有大括号（即使代码块的内容只有一行）：`if` , `else` , `for` , `while` , `do` , `switch` , `try` , `catch` , `finally` , `with`

正例：<Badge type="tip" text="good" vertical="middle" />

```js
if(condition){
  doSomething();
}
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```js
if(condition) doSomething();
```

### 7、undefined判断

永远不要直接使用 `undefined` 进行变量判断；使用 `typeof` 和字符串 `'undefined'` 对变量进行判断。

正例：<Badge type="tip" text="good" vertical="middle" />

```js
if(typeof person === 'undefined'){
  ...
}
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```js
if(person === undefined){
  ...
}
```

### 8、条件判断和循环最多三层

条件判断能使用三目运算符和逻辑运算符解决的，就不要使用条件判断，但是谨记不要写太长的三目运算符。如果超过3层请抽成函数，并写清楚注释。

### 9、this的转换命名

对上下文 `this` 的引用只能使用 `self` 来命名。

### 10、慎用console.log

因 `console.log` 大量使用会有性能问题，所以在非webpack项目中谨慎使用log功能。
