### 1.JSON
*  JSON是ECMA制定的一个数据表示规范,是ECMASCript的一个子集;采用独立于编程语言的文本格式来存储和表示数据;
*  表示数据结构清晰,简洁,易于阅读和解析。
*  逐渐取代了XML数据格式。
*  它是一个对象/数组,或对象中含有数组,或数组中含有对象

### 2.JSON的表示方式
* 1.对象表示
	
		var obj = {
	        name :'Libai',
	        age : '18',
	    } 
* 2.数组
	
		 var sex = [
	        "男",
	        "女",
	    ] 
* 3.对象 + 数组
	
		var students = [
	        {
	            name :'Libai',
	            age : '18',
	        },
	        {
	            name :'Libai',
	            age : '18',
	        },
	        {
	            name :'Libai',
	            age : '18',
	        }
	    ]
###  4.Ajax 
>ajax (asynchronous javascript and xml):异步的Javascript和XML,目的是让JavaScript发送http请求与后台通信,获取数据和信息

* Ajax 的技术原理是实例化xmlhttp对象,使用此对象与后台通信.在通信过程中不会影响后续的js执行,从而实现异步操作。
* 同步与异步
	* 同步就是做完一件事之后再做另一件事,后一件的执行依赖于前一件事件的完成;同步会影响到后续的js代码执行时间
	* 异步就是可以同时执行多个任务(事情),不会影响后面js代码的执行时间
* 局部刷新和无刷新
	* ajax 可以实现局部刷新,也叫无刷新,就是整个页面不刷新,只是局部刷新而已;ajax可以自己发送请求,不用通过浏览器地址栏,所以页面不会刷新;

### 5. 用ajax 发送请求
* 写法1


		$.ajax({
			type: 'get/post' //请求方式默认为post
			url: '请求的文件名/后台的接口地址'
			async:'true/false' //异步/同步
			data:{} //数据对象 上传到服务器端的数据
			dataType:'json/jsonp/xml/text/javascript' //返回的数据类型/解决跨域(jsonp)
			success:function(res){ } 成功回调的处理
			error:function(res){ } 失败回调的处理
			timeout:时间(ms) //设置请求超时时间
		})  
		
* 2 写法2:

		$.ajax({
				type: 'get/post' //请求方式默认为post
				url: '请求的文件名/后台的接口地址'
				async:'true/false' //异步/同步
				data:{} //数据对象 上传到服务器端的数据
				dataType:'json/jsonp/xml/text/javascript' //返回的数据类型/解决跨域(jsonp)
				timeout:时间(ms) //设置请求超时时间
			}).done(function(res){
				//成功回调
			}).fail(unction(res){
				//失败回调			
			})  	
* 3.写法3 (推荐写法)		

	
		$.ajax({
					type: 'get/post' //请求方式默认为post
					url: '请求的文件名/后台的接口地址'
					async:'true/false' //异步/同步
					data:{} //数据对象 上传到服务器端的数据
					dataType:'json/jsonp/xml/text/javascript' //返回的数据类型/解决跨域(jsonp)
					timeout:时间(ms) //设置请求超时时间
				}).then(function(res){
					//成功回调
				}).catch(unction(res){
					//失败回调			
				})  	
### 6.JSONP
> 同源策略

> 同源:指的是协议,域名,端口相同;只要协议,域名/端口中任意一个不相同,就会出现跨域情况;

* 2.在JQ中解决跨域
	
		$.ajax({
					dataType:'jsonp'
					timeout:时间(ms) //设置请求超时时间
				}).then(function(res){
					//成功回调
				}).catch(unction(res){
					//失败回调			
				})  
