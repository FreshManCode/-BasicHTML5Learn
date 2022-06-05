### 1.CSS 浮动介绍
> float 

#### 1.什么是浮动?
* 1.浮动就是让块级标签不独占一行。目的(使用场景):把块级元素标签可以排在一行上。

#### 2.浮动的原来
* 就是让元素脱离文档流,不占用标准流。

#### 3.float的属性值
* left: 左浮动
* right:右浮动
* none: 不浮动,默认值

> 浮动后,后面的元素不管是块级还是行级元素,不会显示在下一行

#### 5.清除浮动
> 目的:让后面的元素自动掉到下一行。

* 方案1.添加空标签,并设置样式:clear:both
	* clear:left;清除左浮动
	* clear:right:清除右浮动
	* clear:both:清除左右浮动
	* clear:none :不清除浮动
	
* 方案2.在要清除浮动的父级添加样式:overflow:hidden;
	*  overflow:hidden 超出部分隐藏,也可以用来清除浮动
	
* 方案3.在要清除浮动的父级添加伪元素,并设定样式:
		
		父元素:after {
		 	  content: '';
            display: block;
            clear: both;
		}
> **注意**:在实际项目开发中,我们一般首选第二种方案


#### 6.CSS盒子模型
> 每个元素都是一个盒子,一个盒子有margin(外边距),border(边框线),padding(内边距),content(内容)组成;

* 区别外边距和内边距是以边框为参照物
* 系统默认外边距为8px
	* 1.外边距(margin):指元素边框线之外的距离
		* margin
		* margin-left
		* margin-right
		* margin-top
		* margin-bottom
		* margin:可用来设置任意一个边的边距,可以带1至个参数
			* 1个(apx):表示上下左右都有这样的外边距apx
			* 2个(apx bpx) :表示上下边距为apx,左右外边距为bpx
			* 3个(apx bpx cpx):表示上外边距为apx,左右边距为bpx,下边距为cpx
			* 4个 (apx,bpx,cpx,dpx):表示为上,右,下,左
	* 2.内边距(padding):指元素的文本内容与边框之间的距离,它的用法与margin完全一样

#### 7.盒子的真实尺寸
* 盒子宽度 = width +padding左右+border 左右
* 盒子高度 = width +padding上下+border 上下
		 	
		 
	
#### 8.display 属性 用来设置元素的显示方式。
> 属性值

	 none:不显示元素
	 
	 block:块显示,在元素后设置换行符,目的:将行级标签转换为块级标签  (因为行级标签不识别宽高,而块级标签识别,转换后,块级标签也可以设置宽高了)
	 
	 inline:行内显示,将块级标签转换为行级标签。
	 
	 inline-block:将块级或行级标签转换为行内块级标签。
	 
#### 9.table样式
> table一般不用来布局,主要用来格式化数据

>属性

	* width:宽度
	* height:高度
	* border-collapse:collapse 单线边框
	* border:边框线
	
>tr,td属性

	* width:宽度
	* height:高度	 
	* border:边框线
	* text-align:文本左右对齐(left(默认)/center/right)
	* vertical-align:文本垂直对齐(top/middle(默认)/bottom)
#### 10.列表样式
> 不是描述性的文本的任何内容都可以人为是列表。比如:菜单,商品列表等。

*  1.无序列表
	* 1. 无序(ul),有序(ol)和自定义列表(dl)  
	* 2. ul和ol的列表项都是用li表示的,而dl是由一个dt和一个或多个dd组成的
	* 3. dl一般用来设定一个定义,比如名称解释等。dt:标题,dd:描述;用来对dt的内容进行解释说明的。

* 2.样式(用来修改标识类型)
	* list-style-image:用图像表示标识
	* list-style-position:标识的位置
	* list-style-type:标识类型
		* 1) 无序 disc (默认值)/circle (默认outside)/square
		* 2) 有序 decimal/decimal-leading-zero/lower-roman/upper-roman/lower-alpha/upper-alpha

	* 简写:list-style: list-style-image list-style-position list-style-type
		* list-style 的值可以按任意顺序列出,而且可以任意省略,只要提供一个值,其它的都自动默认
	* 有序和无序: none

#### 11. 轮播图
组成:

* 1.轮播的组图(至少两张以上,不能太多)
* 2.控制器
* 3.计数器
 
