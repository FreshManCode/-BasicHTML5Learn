### 1.CSS3是CSS2/CSS1的一个升级版,它是对CSS的一个扩展。
### 2.CSS3的主要新特性:
* 1.选择器
* 2.阴影
* 3.形状转换(2d->3d)
* 4.变形
* 5.动画(过渡动画,帧动画)
* 6.边框
* 7.多重背景
* 8.反射
* 9.文字
* 10.颜色函数(rgba/hsl/hsla)
* 11.滤镜(filter)
* 12.弹性布局
* 13.多列布局
* 14.盒模型(box-sizing)
* 15.Web字体
* 16.媒体查询

### 3.CSS3不是所有浏览器或同一浏览器的不同版本都支持,所以要做兼容处理,通常的做法就是加厂商前缀
* 1.主流浏览器内核 (面试点)
	* 1.Trident:IE 内核
	* 2.WebKit:Chrome 和Safari内核
	* 3.Gecko:FireFox内核
	* 4.Blink(是Webkit的一个分支): Chrome 和Opera内核
	
	
	* Tips:
		* 目前国内浏览器大多都是双核的(IE内核+Chrome内核)  
* 2.厂商前缀:
	* IE:-ms-
	* Chrome&Safari: -webkit-
	* Gecko :-moz-
	* Opera :-o-
### 4.CSS3选择器

> 丰富选择器的目的:在标签中减少class和id的使用

* 1.属性选择器
	* [属性名]
	* [属性名=属性值] 
	* [属性名^=属性值]
	* [属性名$=属性值]
	* [属性名*=属性值]
* 2.结构性伪类
	* :first-child
	* :last-child
	* :nth-child(n)
	* :nth-last-child(n)
	* :nth-of-type(n)
	* :nth-last-of-type(n) 
	* :only-child
	* :only-of-type
	* :empty
* 3.目标伪类
	* :target 
* 4.UI元素状态伪类
	* :checked (只在Opera浏览器中有效)
	* :disabled
	* :enabled 
	* :selection
* 5.否定伪类
	* :not() 	
* 6.通用兄弟元素选择器
	* ~

### 5. CSS3文本
* 1.文本阴影:(主流浏览器都支持)
	* text-shaow:水平偏移 垂直偏移 模糊 颜色 
* 2.文本自动换行 (主流浏览器都支持)
	* word-wrap  :normal|break-word
* 3. 单词拆分 (主流浏览器都支持)
	* word-break:noral|break-all|keep-all 
* 4. 文本拆分 (所有主流浏览器都不支持)
* 5. 文本溢出(重要!!)
	* 1.单行文本溢出(重要) 
		* text-overflow:clip|ellipsis|string
		* 处理文字溢出样式:
			
			 	width: px/%/em/rem;
			  	/*禁止换行*/
            	white-space: nowrap;
            	/* 兼容IE浏览器*/
            	-ms-text-overflow: ellipsis;
            	text-overflow: ellipsis;
            	overflow: hidden;
		
	* 2.多行文本溢出 (IE9以下的版本不支持,主要是谷歌支持)
		* width: px/%/em/rem;
		* display:-webkit-box;
		* -webkit-box-orient:vertical
		* -webkit-line-clamp:行数
		* overflow:hidden 
	
### 6.CSS3边框
* 1.圆角边框
	* border-radius:1-4 length|% / 1-4 length|%
	* 四个方位的值:top-left/top-right/bottom-left/bottom-right
* 2.边框阴影 (IE9以上支持)
	* box-shadow:水平偏移距离 垂直方向偏移距离 模糊距离 阴影的尺寸 颜色 [inset]  
* 3.边框图片  (IE11.0及以后的版本)
	* border-image:图片 向内偏移距离 宽度图像超出边框的距离 重复效果 
	* 重复效果 :round/strech/repeat
### 7.CSS3背景
* 1.多重背景
	* background:背景色 背景图片 平铺方式 位置
* 2.background-size:设定背景图片的尺寸
	*  background-size:固定长度|百分比值|cover|contain
	
* 3.background-origin:paddding-box|border-box|content-box
* 4.background-clip:设定背景的绘制区域
	* background-clip:border-box|padding-box|content-box 
* 5.渐变背景
	* background-image:线性渐变|径向渐变 

### 8.C33颜色函数
* 1.rgba(r,g,b,a)  
	* r :红色 取值范围 0-255/0-100%
	* g: 绿色 取值范围 0-255/0-100%
	* b: 蓝色 取值范围 0-255/0-100%
	* a: 不透明度 取值范围 0-1的一个小数
* 2. HSL (h,s,l)
	* h: 色调 取值范围0-360
	* s: 饱和度 取值范围0-100%
	* l: 亮度  取值范围0-100%
*  3. HSLA 
	* h: 色调 取值范围0-360
	* s: 饱和度 取值范围0-100%
	* l: 亮度  取值范围0-100%
	* a: 不透明度
	
### 9.Opacity
> 调整元素的不透明度,大多数情况下用于做元素的遮罩效果.取值范围:0-1的一个小数

* IE8及以下版本不支持,opacity ,处理兼容的方式,再添加一行代码来处理不透明度:
	* filter:alpha(opacity=数值) 数值的范围:0-100之间

### 10 CSS3渐变
> 渐变主要用来设置背景或制作三维图。

*  1.线性渐变
	* background:line-gradient(方向|角度,颜色1,颜色2,...)  
	* 方向:
		* to left: 从右向左渐变
		* to right:从左向右渐变
		* to top:从下向上渐变
		* to bottom :从上向下渐变
		* to top left:从右下角向左上角渐变
		* to top right:从左下角向右上角渐变
		* to bottom left:从右上角到左下角渐变
		* to bottom right:从左上角向右下角渐变
	* 角度:
		* 比如45度角,应该标识为45deg
	* 颜色取值:
		* 表示颜色的单词
		* 16进制颜色
		* 表示颜色的函数(rgb,rgba,hsl,hsla)    
*  2.径向渐变 (沿半径方向渐变)
	* background:radial-gradient(形状 渐变大小 位置 颜色1,...,颜色n)  
	* 形状:
		* ellipse :椭圆径向渐变(默认)
		* circle  :圆径向渐变
	* 渐变大小:
		* farthest-corner: 渐变的半径长度为从圆心到离圆心最远的角(默认)
		* closest-side:渐变的半径长度为从圆心到离圆心最近的边
		* closest-corner:渐变的半径长度为从圆心到离圆心最近的角
		* farthest-side: 渐变的半径长度为从圆心到离圆心最远的边
	* 位置:
		* center: 设置圆心在中心位置
		* top:设置圆心在顶部位置
		* bottom:设置圆心在底部位置
		* at 圆心横坐标 圆心纵坐标: 设定圆心的位置在制定的(横坐标,纵坐标)处 
* 3.文字渐变 代码如下:

		 background-image:linear-gradient(30deg,#50baff,#ff4bcc);
	    -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
	    
### 11.box-sizing
> 允许你以某种方式定义某种元素,以适应指定的区域

* box-sizing:content-box/border-box (火狐和谷歌低版本-webkit-需要厂商前缀)

### 12.引入外部字体
	
	/*引入外部字体 */
        @font-face {
            font-family:AlexBrush-Regular;
            /* 注意以.otf结尾的 */
            src: url("./font/AlexBrush-Regular-OTF.otf") format("opentype");
        }
        
        @font-face {
            /* 注意.ttf 结尾 */
            font-family:BEBAS;
            src: url("./font/BEBAS___.ttf") format("truetype");
        }