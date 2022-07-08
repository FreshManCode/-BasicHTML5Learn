### 1.尺寸
* 1.获取和设置元素的尺寸
	* $(dom).width() /height() 获取元素的宽度/高度
	* $(dom).innerwidth()/innerheight() 获取包括padding的宽度/高度
	* $(dom).outerwidth()/outerheight() 获取包括padding和border 的宽度/高度
	* $(dom).outerwidth(true)/outerheight(true) 获取包括padding,border,margin的宽度/高度

* 2.获取相对页面的绝对位置
	* offset() 
* 3.获取浏览器可视区的宽高
	* $(window).width()
	* $(window).height()  
* 4.获取页面滚动距离
	* $(document).scrollTop()
	* $(document).scrollLeft()
* 5.获取页面文档的宽高
	* $(document).width()
	* $(document).height()

### 2.遍历DOM

	$(dom).each(function(index,item){
		//index 为下标
		//item 为遍历的每一个DOM元素
	
	})
### 3.事件
* blur() 失焦
* click() 单击
* mouseover()鼠标移入 (进入子元素也触发)
* mouseout() 鼠标离开 (离开子元素也触发)
* mouseenter() 鼠标进入 (进入子元素不触发)
* mouseleave()鼠标离开	(离开子元素不触发)
* keydown() 按下键盘键
* keyup() 松开键盘键
* keypress() 从键盘输入字符
* focus() 元素获得焦点
* submit() 提交
* hover(function1,function2) 为mouseentry 和mouseleave 事件的指定函数
* ready() DOM加载完成
* resize() 浏览器窗口大小改变 

		$(window).resize(function () {
	
	    }) 
	
### 4.动画
* 1. 显示/隐藏/切换)
	* show() 
	* hide()
	* toggle()	 
* 2.上下滑动
	* slideDown()
	* slideUp()
* 3.淡入淡出
	* fadeIn()
	* fadeOut()
	* fadeTo() 淡入到指定的不透明度
* 4.动画
	* animate()     
	
				