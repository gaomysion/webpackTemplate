###启动方式
- 首先下载对应的npm包    npm install
- 启动      npm run start
- 即可启动，当前项目是通过nodejs的express启动http服务，触发webpack，编译后的文件都在内存中。。。


###推荐工具
- redux-devtools
- react-devtools
- 这两个工具支持chrome和firefox


###推荐文档
-[redux中文文档](http://cn.redux.js.org//docs/introduction/ThreePrinciples.html "redux")
-
-[腾讯团队的一篇文章，简洁概练](http://www.alloyteam.com/2015/09/react-redux/ "redux")
-http://react-china.org/t/redux/2687


### 每个文件夹里有个一个readme，说明当前文件夹是什么作用

-开发复杂的应用时，不可避免会有一些数据相互引用。建议你尽可能地把 state 范式化，不存在嵌套