### 1.JSON 
* JSON(JavaScript Object Notation:JS对象表达法)是一种轻量级的数据交换格式;用独立的编程语言的文本格式来存储和表示数据。
* 1:优点:
	* 1.易于阅读和编写,同时也易于浏览器解析和生成,并有效的提升网络传输效率;
* 2:与XML比较:
	* 1.JSON书写或解析时是一个对象,更容易解析,而XML是用用户自定义标签存储数据的,对于前端来说不容易书写且解析起来比较困难。  

* 3.解析JSON数据
	* 1.JS中的JSON
		* 如果是JSON数据,可以直接访问;如果是JSON格式的字符串需要用JSON.parse() 的方法进行转换
		* JSON.parse()    :JSONString->json对象
		* JSON.stringify():json对象->json对象
	* 2.解析JSON文件
		* JSON文件必须用ajax(异步请求)技术去获取

* 4.ajax请求操作
	
		 //1.创建请求对象
	    var XHR = new XMLHttpRequest();
	    //2.建立请求链接
	    XHR.open('get','url',true) 
	    //get:请求方式 url:表示请求路径 true:表示异步操作,false:同步操作
	    //4.前端对请求的结果进行处理
	    XHR.onreadystatechange = function () {
	        //如果请求成功
	        if (XHR.readyState == 4 && XHR.status == 200) {
	            //responseText 获取请求的结果
	            console.log(JSON.parse(XHR.responseText))
	        }
	    }
	    //3.向后台发送请求
	    XHR.send();    
	注意: 如果发送ajax请求,必须以http(服务端)的方式启动文件,不能在本地直接打开
	
### 3.DOM操作
> DOM(Document Object Model:文档对象模型):如果是HTML和XML文档的编程接口,定义了访问和操作HTML和XML文档的标准方法。

* 1.DOM 以树型目录结构表达HTML和XML文档的,每一个节点就是一个DOM元素。
	* document->html->head/body->.... 
* 2.节点层次
	* 1.父子节点和同胞节点  
		* 在节点数中,顶端节点被称为根(root) 
		* 在每个节点都有父节点,除了根(没有父节点)
		* 一个节点可拥有任意数量的子节点
		* 同胞节点是拥有相同父节点的节点,也叫兄弟节点
	* 2.节点分类
		* 元素节点:标签
		* 属性节点:标签的属性
		* 文本节点:标签后的换行符
		* 文档节点:document
	* 3.节点的名称(nodeName)
	* 4.节点的值(nodeValue) 
	* 5.节点的类型(nodeType)
		* 元素 1
		* 属性 2
		* 文本 3
		* 注释 8
		* 文档 9

### 4.节点操作
*  a.)获取节点
	* document.getElementByID('id')  	
		* 根据id获取  [返回具体某个节点] 
	* document.getElementsByTagName() 
		* 根据标签获取 [返回节点数组] 
	* document.getEelmentsByName 
		* 根据标签name获取 [返回节点数据]
	* document.getEelmentsByClassName 
		* 根据classname 获取 [返回节点数据]
	* document.querySelector (值查询到第一个)
		*  document.querySelector('p')    p标签
		*  document.querySelector('.box') 类
* b.) 创建节点
	
		 //1.创建元素节点
	    var  element = document.createElement('p')
	
	    //2.创建文本节点
	    var  txt = document.createTextNode('创建文本节点是动态的')
	
	    //3.创建属性节点
	    var attr = document.createAttribute('class') //添加属性名
	    attr.value = 'wrapper' //为属性设置值
	
	    //关联以上三个节点
	    element.appendChild(txt) //在元素节点上添加文本节点
	    element.setAttributeNode(attr) //在元素节点上添加属性节点
	    
	    //将创建的节点添加到文档中
	    document.body.appendChild(element)  
	    
* c.)创建节点简洁写法:
	
		//写法2 (简洁写法)
	    var oDiv = document.createElement('div') //床架元素节点
	    oDiv.setAttribute('class','wrapper box') //为元素节点添加属性及属性值
	    oDiv.innerHTML = '创建DOM元素的简洁写法' //为元素节点设置文本内容
	    document.body.appendChild(oDiv) 	    
	    
### 5.插入节点
* 1. 插入内部的尾部
	* 父节点.appendChild(创建的节点)
* 2. 插入内部的某个前面 
	* 父节点.insertBefore(创建的节点,已知的子节点)  

### 6.替换节点
* 父节点.replaceChild(新节点,老节点) 	    

### 7.克隆节点
* 深度克隆:包含子节点一起克隆。
* 浅克隆:只克隆父节点


		box.cloneNode(true/false) 
		//true/false 深/浅克隆
		
### 8.删除节点
* 1.删除当前节点以及子节点
	* 节点.remove(); 
* 2.删除子节点:
	* 父节点.removeChild(子节点)

### 9.节点属性操作
* 1.获取属性值
	* DOM节点.属性名  //不能获取用户自定义的属性
	* DOM节点.getAttribute(属性名) //获取所有属性包括自定义的属性值
* 2.设置属性值	
	*  DOM节点.属性名 = 表达式|值 //不能设置用户自定义的属性
	*  DOM节点.setAttribute(属性名) //设置所有属性包括自定义的属性值
* 3.删除属性值
	*  DOM节点.属性名 = '' //不能删除用户自定义的属性
	*  DOM节点.removeAttribute(属性名) //删除所有属性包括自定义的属性值

### 	10. 节点文本操作
* 1.获取文本
	* 节点.innerHTML //获取双标签的文本内容
	* 节点.innerText //获取单标签的文本内容
	* 节点.value //获取input输入框等表单控件的内容
* 2.设置文本
	* 节点.innerHTML = '内容'
	* 节点.innerText = '内容'
	* 节点.value = '内容'
* 3.删除文本
	* 节点.innerHTML = ''
	* 节点.innerText = ''
	* 节点.value = ''

	
### 11.DOM节点样式操作
* 1.操作样式class	
	* i)获取class 
		* 节点.className 获取节点的所有class
		* 节点.getAttraibute("class") 获取节点的所有class
	* ii).设置class
		* 节点.className = 值
		* 节点.setAttribute("class",值)
	* iii) 其它方法
		* 节点.classList.add(value)   //为元素添加指定的类
		* 节点.classList.contains(value) //判断元素是否含有指定的类,如果存在返回true
		* 节点.classList.remove(value) //删除指定的类
		* 节点.classList.toggle(value) //有就删除,没有就添加指定类
* 2.操作内联样式
	* i.获取内联样式
		* 节点.style.样式属性名 //获取某个具体的内联样式
		* 节点.style.cssText //获取某个节点的所有内联样式,返回字符串
	* ii.) 设置内联样式
		* 节点.style.样式属性名 = 属性值 //设置某个具体的内联样式
		* 节点.style.cssText = 属性值或属性值列表 //设置某个节点的所有内联样式 
### 12.事件
* onload
* onClick
* ondblclick
* onmouseover 鼠标移入
* onmouseout
* onmousemove
* onkeydown
* onkeyup
* onkeypress
* onblur
* onfocus
* onresize 
* console.dir(document) 查看相关API
		  