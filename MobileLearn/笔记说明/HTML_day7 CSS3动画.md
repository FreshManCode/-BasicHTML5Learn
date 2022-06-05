### 1.变形(transform)
> 位移效果

*  translate(x,y) 沿着X和Y轴移动元素
*  translateX(n) 沿着X轴移动元素
*  translateY(n) 沿着Y轴移动元素

> 缩放效果

*  scale(x,y) 改变元素的宽度和高度
*  scaleX(n) 改变元素的宽度
*  scaleY(n) 改变元素的高度


>旋转效果

*  rotate(angle) 旋转,在参数中规定角度(-360deg - 360deg)

> 变形效果

* skew(x:angle,y:angle) 沿着x轴和Y轴倾斜
* skewX(angle):沿着X轴倾斜
* skewY(angle):沿着Y轴倾斜

* matrix(a,b,c,d,e,f) 定义2D变形,使用了6个值的矩阵.标识如下:
	* a c e
	* b d f
	* 0 0 1
* matrix 用一个3行3列的矩阵标识,a和b表示X轴,c和d表示y轴,e和f表示Z轴
	* a和d表示缩放(如果没有缩放,值设为1) 
	* b和c表示扭曲(如果没有扭曲,值为0)
	* e和f表示位移(如果没有位移,值为0)
	* 如果旋转角度为^,它会影响到a,b,c,d的值
		* a = cos^	 
		* b = sin^
		* c = -sin^
		* d = cos^
	* 如果扭曲skew(^1,^2) 会影响b和c的值:
		* b = tan^1 
		* b = tan^2
* 每次旋转和扭曲都会产生一个新矩阵,最终形成多个矩阵要做乘法运算。如果对一个元素同时有转转,扭曲,缩放和位移.这里需要用到多个矩阵相乘,要优先考虑旋转和缩放! 

### 2.transform-origin :调整元素的基点
* transform-origin:x-axis y-axis z-axis
* 属性值
	* x-axis:定义视图被放置于X轴的何处。可能的值:left,center,right,length,%
	* y-axis:定义视图被置于Y轴的何处。可能的值:top,center,bottom,length,%
	* z-axis:定义视图被置于Z轴的何处。可能的值:length

### 3. perspective 让子元素获得透视效果
* perspective:length|none
* 主流浏览器都不支持,谷歌要加-webkit-,或者在长度后加单位

### 4.transform-style
* 	在3D空间中呈现被嵌套的元素(必须与transform属性一同使用)
*  transform-style:flat|preserve-3d:

### 5.rotateZ
* 沿着Z轴的方向顺指针旋转

### 6.transition 过渡动画
* 1.常规用法
	* transition-property
	* transition-duration
	* transition-timing-function
	* transition-delay 	
* 2.简洁(复合)用法
	* transition: property-name-list|all duration timing-function delay:
* i) transition-property可以使用的属性有:
	*  1.)颜色:
		* color bgakground-color border-color outline-color
	*  2.)位置: 
		* background-postion left right top bottom
	*  3.)长度:
		* max-height min-height max-width min-width height width
		* border-width marigin padding outline-width outline-offset
		* font-size line-height text-indent vertical-align
		* border-spacing letter-spacing word-spacing
	* 4.) 数字: 
		* opcacity visibility z-index font-weight zoom 
	* 5.)组合
		* text-shadow transform box-shadow clip
	* 6.)其它
		* gradient    
* ii)duration:动画持续时间,一般以s或ms为单位
* iii)time-function:动画函数	
	* 1.linear:匀速
	* 2.ease变速:(先慢后快,最后再慢)  
	* 3.ease-in:变速(由慢到快)
	* 4.ease-out:变速(由快到慢)
	* 5.ease-in-out:变速(慢速开始,慢速结束)
	* 6.cubic-bezier(n,n,n,n):自行设定变速,n的值在0-1之间
* iiii)delay:动画延时时间,一般以s或ms为单位

### 7.关键帧动画
> 步骤:

* 1.设置关键帧
	* 1.如果只有两个关键帧: 
		
			 @keyframes 动画名{
			   0%:{样式表}
			   100%:{样式表}
			} 
			或
			 @keyframes 动画名{
			   from:{样式表}
			   to:{样式表}
			} 
	* 2.如果是多个关键帧 		
		
			@keyframes 动画名{
				   0%:{样式表}
				   25%:{样式表}
				   60%:{样式表}
				   ...
				   100%:{样式表}
			} 	
		注意:这里的百分比一般是升序值,可以是0%-100%之间的任意值,也可以是倒序。
		
* 2.实施动画
	* 1.常规用法)
		* animation-name:来自于@keyframes定义的动画名
		* animation-duration:动画持续时间,一般以s或ms为单位
		* animation-time-function:动画函数
			* 1.linear:匀速
			* 2.ease变速:(先慢后快,最后再慢)  
			* 3.ease-in:变速(由慢到快)
			* 4.ease-out:变速(由快到慢)
			* 5.ease-in-out:变速(慢速开始,慢速结束)
			* 6.cubic-bezier(n,n,n,n):自行设定变速,n的值在0-1之间
		* animation-delay:动画延时时间,一般以s或ms为单位
		* animation-iteration-count:动画循环播放的次数
			* 1.number:按设定次数循环播放(默认次数为1次)
			* 2.infinite :一直循环播放
		* animation-direction:动画播放完后是否反向播放
			* 1.normal:不反向(默认值)
			* 2.alternate :反向
		* animation-play-state:动画是否播放/暂停
			* 1.paused:停止播放
			* 2.running:播放(默认值 )
	* 2.简洁用法)
		* animation:name duration time-function delay iteration-count   direction	
		 
			



		  
   
		   
		