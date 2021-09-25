# Vue规范

## (一)Vue编码基础

vue项目规范以 [Vue官方规范(v2)](https://cn.vuejs.org/v2/style-guide/) 中的A规范为基础，在其上面进行项目开发，故所有代码均遵守该规范。

请仔仔细细阅读Vue官方规范，切记，此为第一步。

### 1、组件规范

1)组件名为多个单词

组件名应该始终是多个单词组成（大于等于2），且命名规范为kebab-case格式。

这样做可以避免跟现有的以及未来的HTML元素相冲突，因为所有的HTML元素名称都是单个单词的。

正例：<Badge type="tip" text="good" vertical="middle" />

```js
export default {
  name:'TodoItem'
  //...
};
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```js
export default {
  name:'Todo',
  //...
}
export default {
  name:'todo-item',
  //...
}
```

2)组件文件名为pascal-case格式

正例：<Badge type="tip" text="good" vertical="middle" />

```js
components/
|- my-component.vue
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```js
components/
|- myComponent.vue
|- MyComponent.vue
```

3)基础组件文件名为base开头，使用完整单词而不是缩写

正例：<Badge type="tip" text="good" vertical="middle" />

```js
components/
|- base-button.vue
|- base-table.vue
|- base-icon.vue
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```js
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
```

4)和父组件紧密耦合的子组件应该以父组件名作为前缀命名

正例：<Badge type="tip" text="good" vertical="middle" />

```js
components/
|- todo-list.vue
|- todo-list-item.vue
|- todo-list-item-button.vue
|- user-profile-options.vue（完整单词）
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```js
components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue
|- UProfOpts.vue（使用了缩写）
```

5)在Template模版中使用组件，应使用PascalCase模式，并且使用自闭合组件

正例：<Badge type="tip" text="good" vertical="middle" />

`在单文件组件、字符串模板和JSX中`

```html
<MyComponent />
<Row><table :column="data"/></Row>
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```html
<my-component />
<row><table :column="data"/></row>
```

6)组件的data必须是一个函数

当在组件中使用 `data` 属性的时候（除了 `new Vue` 外的任何地方），它的值必须是返回一个对象的函数。因为如果直接是一个对象的话，子组件之间的属性值会互相影响。

正例：<Badge type="tip" text="good" vertical="middle" />

```js
export default {
  data () {
    return {
      name:'jack'
    }
  }
}
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```js
export default { 
  data: {
    name:'jack'
  }
}
```

7)Prop定义应该尽量详细

* 必须使用camelCase驼峰命名
* 必须指定类型
* 必须加上注释，表明其含义
* 必须加上required或者default，两者二选其一
* 如果有业务需要，必须加上validator验证

正例：<Badge type="tip" text="good" vertical="middle" />

```js
props: {
  //组件状态，用于控制组件的颜色
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return[
        'succ',
        'info',
        'error'
      ].indexOf(value) !== -1
    }
  },
  //用户级别，用于显示皇冠个数
  userLevel: {
    type: String,
    required: true
  }
}
```

8)为组件样式设置作用域

正例：<Badge type="tip" text="good" vertical="middle" />

```html
<template>
  <button class="btn btn-close">X</button>
</template>

<!--使用`scoped`特性-->
<style scoped>
  .btn-close{
    background-color:red;
  }
</style>
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```html
<template>
  <button class="btn btn-close">X</button>
</template>

<!--没有使用`scoped`特性-->
<style>
  .btn-close{
    background-color:red;
  }
</style>
```

9)如果特性元素较多，应该主动换行

正例：<Badge type="tip" text="good" vertical="middle" />

```html
<MyComponent foo="a" bar="b" baz="c"
    foo="a" bar="b" baz="c"
    foo="a" bar="b" baz="c" 
/>
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```html
<MyComponent foo="a" bar="b" baz="c" foo="a" bar="b" baz="c" foo="a" bar="b" baz="c" foo="a" bar="b" baz="c" />
```

### 2、模板中使用简单的表达式

组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。

正例：<Badge type="tip" text="good" vertical="middle" />

```js
<template>
  <p>{{normalizedFullName}}</p>
</template>

//复杂表达式已经移入一个计算属性
computed:{
  normalizedFullName:function(){
    return this.fullName.split('').map(function(word){
      return word[0].toUpperCase() + word.slice(1)
    }).join('')
  }
}
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```js
<template>
  <p>
    {{
      fullName.split('').map(function(word){
        return word[0].toUpperCase()+word.slice(1)
      }).join('')
    }}
  </p>
</template>
```

### 3、指令都使用缩写形式

指令推荐都使用缩写形式，(用 `:` 表示 `v-bind:` 、用 `@` 表示 `v-on:` 和用 `#` 表示 `v-slot:`)

正例：<Badge type="tip" text="good" vertical="middle" />

```html
<input
  @input="onInput"
  @focus="onFocus"
>
```

反例：<Badge type="danger" text="bad" vertical="middle" />

```html
<input
  v-on:input="onInput"
  @focus="onFocus"
>
```

### 4、标签顺序保持一致

单文件组件应该总是让标签顺序保持为

正例：<Badge type="tip" text="good" vertical="middle" />

```html
<template> </template>
<script> </script>
<style> </style>
```

反例：<Badge type="danger" text="bad" vertical="middle" />


```html
<template> </template>
<style> </style>
<script> </script>
```

### 5、必须为 v-for 设置键值 key

在组件内必须用 `key` 配合 `v-for` ，以便维护内部组件及其子树的状态。

### 6、v-show 与 v-if 选择

如果运行时，需要非常频繁地切换，使用 `v-show` ；如果在运行时，条件很少改变，使用 `v-if` 。

### 7、script标签内部结构顺序

```
name >  
components >  
mixins >  
props >  
data >  
computed >  
watch >  
filter >  
钩子函数（钩子函数按其执行顺序）>  
methods
```  

### 8、Vue Router 规范

1)页面跳转数据传递使用路由参数

页面跳转，例如A页面跳转到B页面，需要将A页面的数据传递到B页面，推荐使用路由参数进行传参，而不是将需要传递的数据保存vuex，然后在B页面取出vuex的数据，因为如果在B页面刷新会导致vuex数据丢失，导致B页面无法正常显示数据。

正例：<Badge type="tip" text="good" vertical="middle" />

```js
let id = '123';
this.$router.push({name:'userCenter', query:{id:id}});
```

2)使用路由懒加载（延迟加载）机制

```js
{
  path:'/uploadAttachment',
  name:'uploadAttachment',
  meta:{
    title:'上传附件'
  },
  component:()=>import('@/view/components/uploadAttachment/index.vue')
},
```

3)router 中的命名规范

path、childrenPoints命名规范采用kebab-case命名规范（尽量vue文件的目录结构保持一致，因为目录、文件名都是kebab-case，这样很方便找到对应的文件）

name命名规范采用kebab-case命名规范且和component组件名保持一致！（因为要保持keep-alive特性，keep-alive按照component的name进行缓存，所以两者必须高度保持一致）

```js
//动态加载
export const reload = [{
  path:'/reload',
  name:'reload',
  component:Main,
  meta:{
    title:'动态加载',
    icon:'iconiconfont'
  },
  children:[{
    path:'/reload/smart-reload-list',
    name:'SmartReloadList',
    meta:{
      title:'SmartReload',
      childrenPoints:[{
        title:'查询',
        name:'smart-reload-search'
      },
      {
        title:'执行reload',
        name:'smart-reload-update'
      },
      {
        title:'查看执行结果',
        name:'smart-reload-result'
      }]
    },
    component:()=>import('@/views/reload/smart-reload/smart-reload-list.vue')
  }]
}];
```

4)router中的path命名规范

path除了采用kebab-case命名规范以外，必须以 `/` 开头，即使是children里的path也要以 `/` 开头。

目的：

经常有这样的场景：某个页面有问题，要立刻找到这个vue文件，如果不用以 `/` 开头，path为parent和children组成的，可能经常需要在router文件里搜索多次才能找到，而如果以 `/` 开头，则能立刻搜索到对应的组件。

```js
{
  path:'/file',
  name:'File',
  component:Main,
  meta:{
    title:'文件服务',
    icon:'ios-cloud-upload'
  },
  children:[{
    path:'/file/file-list',
    name:'FileList',
    component:()=>import('@/views/file/file-list.vue')
  },
  {
    path:'/file/file-add',
    name:'FileAdd',
    component:()=>import('@/views/file/file-add.vue')
  },
  {
    path:'/file/file-update',
    name:'FileUpdate',
    component:()=>import('@/views/file/file-update.vue')
  }]
}
```

## (二)Vue项目目录规范

### 1、基础

vue项目中的所有命名一定要与后端命名统一。

比如权限：后端privilege,前端无论 router , store , api 等都必须使用 privielege 单词！

### 2、使用Vue-cli脚手架

使用 vue-cli3 来初始化项目，项目名按照上面的命名规范。

### 3、目录说明

目录名按照上面的命名规范，其中 components 组件用大写驼峰，其余除 components 组件目录外的所有目录均使用 kebab-case 命名。

```
src   源码目录
|--api    所有api接口
|--assets   静态资源，images,icons,styles等
|--components   公用组件
|--config   配置信息
|--constants    常量信息，项目所有Enum,全局常量等
|--directives   自定义指令
|--filters    过滤器，全局工具
|--datas    模拟数据，临时存放
|--lib    外部引用的插件存放及修改文件
|--mock   模拟接口，临时存放
|--plugins    插件，全局使用
|--router   路由，统一管理
|--store    vuex,统一管理
|--themes   自定义样式主题
|--views    视图目录
|  |--role    role模块名
|  |--|--role-list.vue    role列表页面
|  |--|--role-add.vue   role新建页面
|  |--|--role-update.vue    role更新页面
|  |--|--index.less   role模块样式
|  |--|--components   role模块通用组件文件夹
|  |--employee    employee模块
```

1)api目录

* 文件、变量命名要与后端保持一致。
* 此目录对应后端API接口，按照后端一个controller一个api.js文件。若项目较大时，可以按照业务划分子目录，并与后端保持一致。
* api中的方法名字要与后端apiurl尽量保持语义高度一致性。
* 对于api中的每个方法要添加注释，注释与后端swagger文档保持一致。

正例：<Badge type="tip" text="good" vertical="middle" />

```js
后端url：EmployeeController.java
/employee/add
/employee/delete/{id}
/employee/update
前端：employee.js
//添加员工
function addEmployee(data){
  returnpostAxios('/employee/add',data)
}
//更新员工信息
function updateEmployee(data){
  returnpostAxios('/employee/update',data)
}
//删除员工
function deleteEmployee(employeeId){
  returnpostAxios('/employee/delete/'+employeeId)
}
//获取员工信息
function getEmployee(data){
  returnpostAxios('/employee/get/',data)
}
//获取员工信息列表
function getEmployeeList(data){
  returnpostAxios('/employee/getlist/',data)
}
```

2)assets目录

assets 为静态资源，里面存放 images , styles , icons 等静态资源，静态资源命名格式为 kebab-case

```
|assets
|--icons
|--images
|  |--background-color.png
|  |--upload-header.png
|--styles
```

3)components目录

此目录应按照组件进行目录划分，目录命名为 kebab-case ，组件命名规则也为 kebab-case

```
|components
|--error-log
|  |--index.vue
|  |--index.less
|--markdown-editor
|  |--index.vue
|  |--index.js
|--kebab-case
```

4)constants目录

此目录存放项目所有常量，如果常量在vue中使用，请使用vue-enum插件[https://www.npmjs.com/package/vue-enum](https://www.npmjs.com/package/vue-enum)

```js
目录结构：
|constants
|--index.js
|--role.js
|--employee.js

例子：employee.js

export const EMPLOYEE_STATUS = {
  NORMAL:{
    value:1,
    desc:'正常'
  },
  DISABLED:{
    value:1,
    desc:'禁用'
  },
  DELETED:{
    value:2,
    desc:'已删除'
  }
};

export const EMPLOYEE_ACCOUNT_TYPE = {
  QQ:{
    value:1,
    desc:'QQ登录'
  },
  WECHAT:{
    value:2,
    desc:'微信登录'
  },
  DINGDING:{
    value:3,
    desc:'钉钉登录'
  },
  USERNAME:{
    value:4,
    desc:'用户名密码登录'
  }
};

export default{
  EMPLOYEE_STATUS,
  EMPLOYEE_ACCOUNT_TYPE
};
```

5)router与store目录

这两个目录一定要将业务进行拆分，不能放到一个js文件里。

router尽量按照views中的结构保持一致

store按照业务进行拆分不同的js文件

6)views目录

命名要与后端、router、api等保持一致

components 中组件要使用 PascalCase 规则

```
--views   视图目录
|  |--rolerole   模块名
|  |  |--role-list.vue   role列表页面
|  |  |--role-add.vue    role新建页面
|  |  |--role-update.vue   role更新页面
|  |  |--index.less    role模块样式
|  |  |--components    role模块通用组件文件夹
|  |  |  |--role-header.vue    role头部组件
|  |  |  |--role-modal.vue   role弹出框组件
|  |--employee   employee模块
|  |--behavior-log   行为日志log模块
|  |--code-generator   代码生成器模块
```

### 4、注释说明

整理必须加注释的地方

* 公共组件使用说明
* api 目录的接口 js 文件必须加注释
* store 中的 state , mutation , action 等必须加注释
* vue 文件中的 template 必须加注释，若文件较大添加 startend 注释
* vue 文件的 methods ，每个 method 必须添加注释
* vue 文件的 data ,非常见单词要加注释

### 5、其他

1)尽量不要手动操作 DOM

因使用 vue 框架，所以在项目开发中尽量使用 vue 的数据驱动更新 DOM ，尽量（不到万不得已）不要手动操作 DOM ，包括：增删改 dom 元素、以及更改样式、添加事件等。

2)删除无用代码

因使用了 git/svn 等代码版本工具，对于无用代码必须及时删除，例如：一些调试的 console 语句、无用的弃用功能代码。
