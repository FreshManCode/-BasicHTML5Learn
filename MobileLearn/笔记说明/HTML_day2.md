* iframe框架

### 1.iframe
> 框架集,是用来将多个网页文件组合成一个文件;常用属性如下:

* 1.name:框架名
* 2.scr:引入外部的html文件
* 3.scrolling:滚动条(yes/no/auto)
* 4.width:宽度
* 5.height:高度
* 6.frameborder:是否有边框(1/0)
* 7.marginheight:框架离顶部和底端的距离(%/px)
* 8.marginwidth:框架离左右的距离(%/px)


		注意:
			在实际开发中,尽量减少使用iframe,因为它破坏了前进和后退功能,且不利于SEO
			(搜索引擎优化)

### 2.CSS学习
##### 1.css 层叠样式表,用来优化网页的,做到结构(HTML)和表现(css)分离

##### 2.基本语法:

		选择器 {
		    属性:属性值
		}
#####  3. CSS引用方式:
	* 1.行间样式: 直接在标签上书写样式
	* 2.内部样式: 在文件内部书写样式 
		
			<style>
				样式内容
			</style>
	* 3.外部样式:
	
		* 1.先创建一个CSS文件;
		* 2.用**link** 标签引入这个文件
	* 4.导入外部样式:
		* 1.先创建一个CSS文件
		* 2.在style标签中用**import**导入这个样式文件
		
> 以上四种CSS引用样式的区别:

*  行间样式只作用于当前标签;而内部样式作用于当前文件;外部样式可以被多个HTML文件引用;

*  在实际项目开发中,最好使用外部样式.

*  外部样式分为link引入和import引入两种方式;这两种方式区别:
	* 1.link是XHTML标签,除了加载CSS外,还可以定义RSS等其他事务;@import属于CSS范畴,只能加载CSS
	* **2.**link引入CSS时,在页面载入时同时加载(异步的);@import需要等页面完全载入以后加载
	* 3.link是XHTML标签,无兼容性问题;@import是在CSS2.1提出来的,低版本的浏览器不支持
	* **4.**link支持使用Javascript控制DOM去改变样式;而@import不支持

#####  4.1CSS选择器分类:
* 1. * 星号:匹配html中所有元素(注意: * 号的性能差,因为它要匹配所有元素,所以在开发时不建议使用)
* 2.标签选择器:用来匹配所对应的标签
* 3.类选择器:用来选择class命名的标签
* 4.ID选择器:用来选择用id命名的标签
* 5.派出选择器:根据上下文确定选择的标签
* 6.伪类选择器:参考下面
* 7.伪元素选择器:参考下面

##### 5.选择器的分组
> 让多个选择器(元素)具有相同的样式,一般用于设置公共样式;

##### 6.选择器的继承
> 子元素可以继承父元素的

#####  7.CSS样式优先级
* !important (权重10000)>内联样式(1000)>id选择器(100)>类/伪类选择器(10)>标签选择器(1)

##### 8. CSS字体
* 1.font-size:字号 (px/%)
* 2.font-family : 字体
* 3.font-style : 样式 (normal/italic/oblique)
* 4.font-weight:加粗(normal/bold/bolder/lighter/100-900)
* 5.line-height:行高(px/数字/em等)
* 6.color:文字颜色 (颜色的单词/rgb->r/g/b:0-255)/16进制(以#开头,后跟6位(#rrggbb)/3位(rgb))
* 7.text-decoration:文字修饰 (none/underline/overline/line-through)
* 8.text-align:对齐方式
* 9.text-transform :字母大小写 (capitalize/uppercase/lowercase/none)
* 10.text-indent:文本缩进(px/em

##### tips: font 复合属性
* font:font-style font-variant font-weight fontsize/line-height font-family
* 注意:
	* 1)属性值的位置顺序  
	* 2)除了font-size和font-family之外,其它任何一个属性都可以省略
	* 3)font-variant:normal/small-caps(让大写字母变得小一些)
##### 9.CSS背景
* 1.background-color:背景色(transparent/color)
* 2.background-image: 背景图(url/none)
* 3.background-repeat: 背景图像的铺排方式(repeat/no-repeat/repeat-x/repeat-y)
* 4.background-postion:背景图像位置
* 5.background-attachment:背景图像滚动位置(scroll/fixed)
* 6.background :设置背景的复合写法。color image repeat attachment position
	 	
##### 10.CSS伪类选择器
> 伪类:专门用来表示元素的一种特殊状态;

常用伪类选择器:

* a标签的伪类
	* 1. :link/:vistied/:hover/:active
	* 2. focus 获得焦点
	* 3. first-child/:last-child/:nth-child(number)

##### 11.属性选择器
* [属性名]:包含有指定属性名的元素 (常用)
	
		 /*   div标签中class为content的并且包含title的div */
	        div.content[title] {
	            font-weight: bold;
        	}
        	
	
* [属性名=值]:属性名的值为指定的元素 (常用)

		/*寻找input中,name属性为user的组件*/
	        input[name=user] {
	            background-color: blue;
	        }
	
* [属性名~=值]:属性名的值包含指定元素的值
	
		/* 只要class中含有box1 就能生效 */
	        div[class~=box1] {
	            background-color: olive;
	        }

	

* [属性名^=值]:属性名的值已指定值的开头的元素

		 /*寻找div中class以content2 开头的*/
	        div[class^=content2] {
	            color: blue;
	        }
		
	
* [属性名$=值]:属性名的值已指定值的结尾的元素

		/*寻找div中 class 以tail结尾的div*/
	        div[class$=tail] {
	            font-style: italic;
	        }
	
##### 	12.关系选择器
* 1.空格: 后代选择器
* 2.> : 只选择儿子元素
* 3.+ : 兄弟选择器

##### 13.CSS 伪元素
> 1. CSS伪元素与伪类区别:

* css引入伪类和伪元素的概念是为了格式化文档树以外的信息。也就是说,伪类和伪元素是用来修饰不在文档数中的部分。
* 伪类用于当已有元素处于的某个状态时,为其添加相应的样式,这个状态是根据用户行为而动态变化的。它只有处于dom树无法描述的状态下才能为元素添加样式,所以将其称为伪类。
* 伪元素用于创建一些不在文档中的元素,并为其添加样式。比如说,我们可以通过:before来在一个元素前增加一些文本并为这些文本添加样式.虽然用户可以看到这些文本,但是这些文本实际上不在文档上中。

> 2.伪元素&伪类的特点:

* 伪元素和伪类都不会出现在源文档或者文档树中
* 伪类允许出现在选择器的任何位置,而一个伪元素只能跟在选择器的最后一个简单选择器后面
* 伪元素名和伪类名都是大小写不敏感的
* 有些伪类是互斥的,而其它的可以同时用在一个元素上。(在规则冲突的情况下,常规层叠顺序决定结果)

>3.:before/:after/:first-letter/:first-line:前面可以是1个冒号也可以是双冒号
	
> 	::selection/::placeholder/::backdrop 前面只能是双冒号 	



	