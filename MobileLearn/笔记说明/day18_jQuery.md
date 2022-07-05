### 1.jQuery
> jQ 是js库,是对JavaScript的一个封装,有大量的API;

### 2.学习文档
* jq中文文档 jquery123.com 
* API学习/查询 jquery.cuishifeng.cn
* https://www.bootcdn.cn/ cdn镜像网站

### 3.JQ功能:
* 1.控制页面样式
* 2.访问和操作DOM
* 3.事件处理
* 4.提供了大量的插件
* 5.Ajax技术的封装
* 6.提供了动画处理
* .....

### 4.使用JQ
* 1.本地引入
* 2.CDN引入
* 注意:JQ必须先引入,然后才能调用它的API.可以在head标签中引入,也可以在最后引入

### 5.选择器
* 1.基本选择器
	* id : #
	* class  : .
	* elment : elment
	* * :选择所有标签(项目开发时不使用,要匹配所有标签,性能差)
	* , :选择多个DOM
* 2.层次选择器
	* (空格选择器) 选择器1 选择器2:选择选择器1的所有后代元素(选择器2) 
	* (>) 选择器1 > 选择器2:只选择选择器1 的子元素
	* (+) 选择器1 + 选择器2:选择紧挨着选择器1 的相邻元素(兄弟元素)
	* (~) 选择器1 ~ 选择器2:选择选择器1的所有兄弟元素
* 3.过滤选择器
	* 1.简单过滤器
		* :first或first() 第一个元素
		* :last或last() 最后一个元素
		* :not(selector) 除selector 之外的元素
		* :even 偶数
		* :odd  奇数
		* :eq(index) 第n个元素
		* :gt(index) 大于第n个元素
		* :lt(index) 小于第n个后的元素
		* :header   选择h1-h6所有标题元素
	* 2.内容过滤选择器
		* :container(text)-> 获取包含指定文本内容的元素
		* :empty -> 获取不包含子元素和文本内容的元素
		* :has(selector) -> 获取含有选择器所匹配的元素
		* :parent -> 获取含有子元素或文本的元素
	* 3.可见性过滤器
		* :hidden  ->选择display:none或隐藏文本域(hidden)
		* :visable ->选择display:block 的元素
	* 4.属性过滤器 
		* [attr] -> 获取含有指定属性的元素
		* [attr=value] -> 获取属性值为value的元素
		* [attr != value] ->获取属性值不为value的元素
		* [attr ^=value]->属性值以value开头的元素
		* [attr $=value] ->属性值以value结尾的元素
		* [attr *=value] ->属性值含有value的元素
		* [attr1][attr2][attr3]->获取含有指定多个属性的元素
		 
* 4.表单选择器
	* :input
	* :button
	* :submit
	* :text
	* :password
	
### 6.DOM操作
* 1.属性操作
	* a. 获取属性值
		* attr(属性名) 
	* b. 设置属性  
		* attr(属性名,属性值) 
	* c. 删除属性
		* removeAttr(属性名)

* 2.内容操作
	* a. 获取文本及表单组件内容
		* html() ->可以操作标签
		* text() ->只能操作文本内容,不操作标签
		* val() 只能操作表单组件
	* b.设置/修改文本内容
		* html(内容)
		* text(内容)
		* val(内容) 
	* 3.删除文本及表单组件内容 
		* html("")
		* text("")
		* val("") 操作表单组件

* 3.元素样式操作
	* a.设置样式
		* css('属性名','属性值')  设置一个样式
		* css({'属性名':'属性值','属性名':'属性值'}) 设置多个样式
	* b.操作类
		* i)添加类
			* addClass('类名') / addClass('类名1 类名2 ...')   
		* ii)删除类
			*removeClass('类名') / removeClass('类名1 类名2 ...')  
			
* 4.页面元素操作
	* a. 创建DOM节点
		* $(dom节点内容) 
		
				 let dom =  $('<p><span>这是添加的内容</span> 	<p/>'); 
	* b. 在内部添加DOM节点
		* append() ->  尾部添加DOM
		* appendTo() -> 把DOM添加到某个节点最后
		* prepend()->  首部添加DOM
		* prependTo() -> 把DOM添加到某个节点上面
	* c. 在外部添加DOM节点
		* before() ->在当前DOM前添加 (同级添加)
		* insertBefore()->把DOM前添加到当前元素之前 (同级添加)
		* after() ->在当前DOM后添加 (同级添加)
		* insertAfter() ->把DOM添加到当前元素之后 (同级添加)
	* d. 复制DOM节点
		* clone() ->只复制DOM元素
		* clone(true) ->复制DOM元素及绑定的相关事件
	* e. 删除DOM节点	
		* remove() ->删除当前DOM及子元素
		* remove(dom节点) ->在同级DOM中删除指定的DOM
		* empty() ->只删除当前DOM的子元素
		 	 