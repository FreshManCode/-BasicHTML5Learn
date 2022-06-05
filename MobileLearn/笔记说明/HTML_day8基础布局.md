### 1.多列(分栏)
* 1.column-count 规定元素应该被分割的列数(栏数)
	* column-count :number|auto
* 2.column-gap 设置栏间距
	* column-gap: length|normal
* 3.column-rule 设置栏间分割线
	* column-rule-style:设置线型
		* none   没有分割线
		* hidden 隐藏线
		* dotted 电线
		* dashed 虚线
		* solid  实线
		* double 双线
		* groove 3D沟槽效果
		* ridge  3D脊状效果
		* inset  3D左上角阴影效果
		* outset 3D右下角阴影效果
		
		> 注意:3D线型在分栏中没有3d效果,当实线处理了
* 4.column-rule-width 设置线宽
* 5.column-rule-color 设置分割线颜色
* 6.复合(简洁)写法 
	* column-rule:width style color
* 7.column-width 设置栏宽  
	* column-width: length|auto
* 8.columns:是  column-width 和column-count的简写方式
	* columns: width count

### 2.flex 弹性布局	
> CSS3 弹性盒子(Flexible Box 或flexbox),是一种页面需要适应不同的屏幕大小以及设备元素拥有恰当的行为的布局方式。

> 目的是提供一种更加有效的方式来对一个容器中的子元素进行排列,对齐和分配空白空间。

* 常用的属性
	*  1.flex-dirction 指定子元素在父容器中位置;此属性作用于父容器
		* 语法:flex-direction: row|row-reverse|column|column-reverse
			
	*  2.justify-content:把弹性项沿着弹性容器的主轴方向对齐;此属性作用于父容器
		* 语法: justify-content:flex-start|flex-end|center|space-between|space-around
			* flex-start:紧凑方式左对齐
			* flex-end:紧凑方式右对齐
			* center:紧凑方式居中对齐
			* space-between:除了第一个和最后一个子元素外,其它子元素等分空白区域
			* space-around:所有子元素等分空白区域
	*  3.align-items :子元素在侧轴(纵轴)方向上的对齐方式;此属性作用于父容器
		* align-items:flex-start|flex-end|center|baseline|strech  
			* flex-start:沿纵轴顶端对齐 (默认值)
			* flex-end:沿纵轴底端对齐
			* center:沿纵轴垂直居中对齐
			* baseline:沿纵轴基线对齐
			* strech:沿纵向拉伸对齐
	*  4.flex-grow :子元素放大比例,默认为0;如果存在剩余空间,也不放大.此属性作用于子元素
		*  语法: flex-grow :number
	*  5.flex  应用于子元素
		* 用于指定弹性子元素空间分配
		* 语法:
			* flex:auto|initial|none|inherit|[flex-grow]||[flex-shrink]||[flex-basis]  
			* 参数:
				* auto:等价于 1 1 auto
				* initial:等价于0 1 auto
				* none:等价于 0 0 auto
				* inherit:从父元素继承 
			* 	Tips: 
				* flex可以带1-3个参数
				* 1)带1个参数
					* a)无单位,这个值会被当做flex-grow(放大的)的值 
					* b)带单位,这个数值会被当作flex-basis(基本宽度)的值 
					* c)auto(自动宽度)|initial(初始宽度)|none(无)
				* 2)带2个参数
					* 第1个参数必须是一个无单位的数值,它会被当作flex-grow的值。
					* 第2个参数:
						* 1.无单位时,这个值会被当做flex-shrink(收缩比率)的值
						* 2.带单位时,这个数值会被当作flex-basis(基本宽度)的值  
				* 3)带3个参数
					* 第1个参数必须是一个无单位的数值,它会被当作flex-grow的值。
					* 第2个参数必须是一个无单位的数值 ,它会被当做flex-shrink(收缩比率)的值
					* 第3个参数必须是一个有效的宽度值(带单位),会被当作flex-basis(默认的基本宽度)的值
				
### 3.响应式布局
* 1.响应式布局概念
	* Responsive Design 在实现不同屏幕分辨率的终端上浏览网页的不同展示方式。通过响应式设计能使网站在手机和平板电脑上有更好的阅读体验 	
* 2.响应式布局和自适应布局的区别: (面试问题)
	* 响应式布局只开发一套代码,通过检测视口的分辨率,针对不同客户端在客户端做代码处理,来展现不同的内容和布局;
	* 自适应需要开发多套界面,通过检测视口的分辨率,来判断当前访问的设备是PC端,平板,手机等从而请求服务层返回不同的页面
	
	* 响应式布局等同于流动网格布局,而自适应等同于使用固定分割点来进行布局。   
	* 自适应布局给出了更多的设计空间,只用考虑几种不同的状态就可以了;而响应式布局要考虑上百种不同的动态,虽然在有些状态差异较小,但也要考虑到。

* 3.响应式布局开发实现方法:
	* 1.媒体查询
	* 2.*百分比布局*
	* 3.*rem布局*(相对于根节点(元素)html中的字号布局)
	* 4.视口单位布局(vw/vh)	
* 4.响应式设计步骤
	* 1.设置meta标签
	* 2.通过媒体查询来设置样式
	* 3.设置多种视图的宽度
		* 1.宽度需要使用百分比/rem/vw$vh等
		* 2.处理图片缩放
		* 3.其它属性处理
			* 如pre/iframe/video等,都要缩放其大小,table建议不要增加padding属性,低分辨率下要使用内容居中操作
			
### 4.媒体查询
* 	步骤:
	* 1.  设置meta标签
	
				 <meta name="viewport"  content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
				 **说明:**以上的标签内容只能被移动设备识别
	 	
		* viewport:视口(移动端)
		* width=device-width:宽度等于当前设备的宽度
		* initial-scale=1.0:初始缩放比例(默认为1)
		* maximum-scale=1.0:允许用户缩放到的最大比例(默认1.0)
		* minimum-scale=1.0:允许用户缩放到的最小比例(默认1.0)
		* user-scalable=no :用户是否可以手动缩放(默认为no)
	* 2.设置IE渲染方式默认为最高版本
	
			 <meta http-equiv="x-ua-compatible" content="IE=Edge,chrome=1">  
	说明:
		* 以上代码表示如果浏览器有chrome插件,将以chrome提供的v8引擎渲染页面,如果没有,将以IE的最高版本渲染页面。		

	* 3 引入兼容的js文件	 
		
			<!--[if lt IE 9]>
		        <script src="https://cdn.staticfile.org/html5shiv/3.7.3/html5shiv.min.js"></script>
		        <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
		    <![endif]-->
		    
		   说明:
		   
			因为IE8及IE8以下版本既不支持html5,也不支持CSS3 Media,所以我们需要加载JS文件来处理这个兼容。上面的代码是一个注释语句,也就是说,IE9及以上的版本不会编译这几行代码 		  
* 	4 进入CSS3提供的媒体查询
	* a)引入外部CSS文件时使用
		
			  屏幕最大宽度不超过480px时加载这个css
			  <link rel="stylesheet" href="./css/screen480.css" media="screen and (max-width:480px)">
			  
			 屏幕最大宽度不超过800px,最小宽度大于480px时加载这个css 
			 <link rel="stylesheet" href="./css/screen600.css" media="screen and (min-width:480px) and (max-width:800px)">
			 
			屏幕最小宽度大于400时加载下面这个css
		    <link rel="stylesheet" href="./css/screen_over800.css" media="screen and (min-width:800px)">
		   
		设备:
		* all:所有设备   
		* screen:PC端显示器
		* print:打印机或打印预览图
		* handheld:便携设备
		* tv:电视
		* speech:音频合成器
		* braille:盲人点触设备 
		* embossed:盲人打印机
		* projection:投影设备
		* tty:固定密度字母栅格设备
		* only:用来排除不支持媒体查询的浏览器
	* b) 在style标签中用@media定义;如下事例
		
			@media screen and (max-width: 600px) {
	            .row2 div,.row3 div {
	                width: 100%;
	                margin-bottom: 10px;
	            }
	            .row3 div+div {
	                margin-left: 0;
	            }
	            .row4 div {
	                width: 48%;
	                margin-left: 0;
	                margin-right: 4%;
	                margin-top: 10px;
	            }
	            .row4 div:nth-child(2n) {
	                margin-right: 0;
	
	            }
        	} 
	
### 5.web字体
> 开发者引入外部字体。 
	
	 	@font-face {
            /* 定义引入字体的名称 */
            font-family: Awesome;
            /* 引入外部字体 */
            src: url("./file/font/fontawesome-webfont.ttf") format('truetype');
            src: url("字体文件") format("字体文件格式以处理浏览器兼容")
        }
     说明:
     	可以同时引入多个字体文件,字体一样,文件的扩展名不一样,目的是为了处理浏览器兼容。
     	
### 6.iconfont 图标字体
> 步骤:

* 1. 进入官网https://www.iconfont.cn,注册登录
* 2. 创建一个项目
* 3. 添加图标到购物车
* 4. 将购物车中的图标添加到项目中
* 5. 下载iconfont文件,解压后,将部分文件复制到我们的网页项目中
* 6. 使用字体图标前,先引入iconfont.css文件(本地引入/直接使用官网中url引入)
* 7. 使用字体图标方法:
	* 方法一 使用类名:  
		
			 <span style="font-size: 44px;" class="iconfont icon-shangchuan-icon-copy"></span>

	* 方法二 使用Unicode值(微信小程序不支持):   	
		
			<span class="iconfont">&#xe760;</span>
 
	     	
				   
