# jQuery-plugins
这是一个jQuery插件集合, 包括 回到顶部插件、搜索插件、轮播插件、瀑布流布局插件、tab切换插件。


###jQuery Plugins

这是一个jQuery插件集合, 包括 回到顶部插件、懒加载插件、轮播插件、stickUp插件、瀑布流布局插件、tab切换插件。

所有的插件都采用面向对象的方式编写，使用方便，有一定的扩展性。

**1、回到顶部**
 预览：回到顶部效果

Usage
在要包含回到顶部元素的容器上调用gotop方法即可，该插件会自动添加目标元素，可以自己定制样式。
```
$('body').gotop();
```
**2、图片懒加载**
预览：懒加载效果

Usage
在需要lazyload的img元素中，src使用占位图片的url，data-src使用真实图片的url， 然后选中需要懒加载的图片元素, 调用lazyLoad方法。
```
$(".container").find('img').lazyLoad();
```
**3、轮播**
预览：轮播效果

简介
无限滚动的轮播插件，支持点击跳转，自动滚动。需要使用和Demo同样的HTML结构以及一些必要的CSS。

Useage
在轮播容器上调用slide方法即可。
```
$(".carousel").slide();
```
**4、tab切换**

预览：tab切换效果

Usage
在指定容器上调用switchTab方法即可。

```
// 全部启动
$(".wrap").switchTab();

// 单个启动
$(".wrap1").switchTab();
$(".wrap2").switchTab();
```