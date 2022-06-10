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