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