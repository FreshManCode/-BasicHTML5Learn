### 1.HTML实体转义符
> 以&符号开头.;结尾的,常见的如下

* 实体字符: `&lt;` ->小于号(<)
* 实体字符: `&gt;` ->大于号(>)
* 实体字符: `&smp;`->与号(&)
* 实体字符:  `&nbsp;` -> 空格
* 实体字符: `&copy;` ->版权(©️)
* 实体字符: `&times;`->乘号(x)
* 实体字符: `&divide;`->除号(&divide;)

### 2.标签嵌套规则
* 1.块级元素可以包含内联元素或某些块元素,单内联元素缺不能包含块元素,它只能包含其它的内联元素.

		    <div><h1></h1><p></p></div> -正确
		    <span><div></div></span> - 错误
* 2.块级元素不能放在p标签里面
		
		
		  <p><ol><li></li></ol></p> -错误
   		  <p><div></div></p> -错误
 
* 3.有几个特殊的块级元素只能包含内嵌元素,不能再包含块级元素,这几个特殊的标签是:
	
		h1->h6,p,dt 标签
	
* 4.块级元素与块级元素并列,内嵌元素与内嵌元素并列

		 <div><h2></h2><p></p></div> -✅
	    <div><a href="#">11</a><span>121</span></div> -✅
	    <div><h2>122</h2><span>hehe</span></div> -❎
	    
### 3. 属性
#### 1.通用属性:所有标签都具有的属性 (br标签除外)
> **通用属性**

* id :用来给标签取一个唯一的名称. id名称在一个网页内必须是唯一的
* class:用来给标签取一个类名.
* style:用来设置该标签的行内样式.
* title:当鼠标移动到该标签时,所显示的提示内容

#### 2. **自定义标签属性**
	
	通常用来传值或用于图片懒加载等方面
	格式:data-* 
	<img data-src="图片地址" alt="图片加载失败的提示"/>
	<p data-id="goodsid"> .... </p>
	
### 4.table --> 主要用于呈现格式化据
> 表格是由行和列组成.
	
	 <table border="1px" width="400px" cellspacing="0"  cellpadding="5px" align="center">
        <tr>
            <td>内容1</td>
            <td>内容2</td>
            <td>内容3</td>
        </tr>
        <tr>
            <td>内容1</td>
            <td>内容2</td>
            <td>内容3</td>
        </tr>
    </table>
  	
##### 1.表格属性
* border :设置表格边框,默认单位是像素
* width:  设置表格宽度,默认单位是像素
* align:  设置表格对齐,(left默认,center,right)
* cellpadding: 设置单元格间距 (单元格文本与边框的距离)
* cellspacing: 设置像素间隙 (单元格边框间距)

##### 2.table 跨行/跨列属性,主要用来绘制复杂表格
> 用于合并某些单元格,减少单元格的行数/列数

* rowspan:跨行 
* colspan:跨列 

##### 3.完整表格组成
> caption (标题),thead(表头),tbody(表体),tfoot(表尾) 四部分

### 5.form表单
> 表单标签是所有标签最核心标签之一.它是用来实现前后端交互的一个重要标签

##### 1 form表单常用属性
* name   :表单名称
* action :表单数据提交的地方(通常是一个后台文件名(.jsp/.php/.asp/.aspx/.py),或者网址).如果是**#**,表示提交到当前文件

* method :前端提交数据到后端的方法,主要有:get和post,默认是get

##### 2.表单元素
#####  2.1 input 类
	 input类主要用来输入,选择/发出指令
	 type:text/password/radio/checkbox/file/button/image/submit/reset
* 1) text:单行文本输入框,type="text"可以不写,默认值
	* 	属性:placeholder(提示),
	*  name(命名),
	*  minLength/maxLength(最少/最多输入字符的个数),
	*  disabled(失效),
	*  readyonly(只读)
	*  value 默认值
	*  pattern 正则匹配
* 2) password:密码框,属性与text一样

* 3) radio:单选框,通常是两项以上.常用属性有name(必须要有,根据name进行相关单选匹配),value/checked (选中)/disable(失效)/readyonly(只读)

* 4) checkbox:复选框,可以用来选择0项,1项或者多项
	* 常用属性:name(必须要有),value/checked(选中)/disabled(失效)/readyonly(只读)
	
* 5) file :文件上传按钮

* 6) button:普通按钮,通常用它去调用脚本代码;

	* 常用属性 :value(按钮标题)/disabled(失效)
	
* 7) image:图片按钮,用法与button一样,有一个特殊属性:src(用来加载提示图片,用它替换了value);它有提交功能,与submit功能一样

* 8) submit:提交按钮,用来将表单数据提交到后台

* 9) reset按钮:重置按钮,将表单所有组件输入的内容全部清空,还原为初始状态
#####  2.2 textarea类
> 文本域(多行文本框),主要用于输入大量的内容
* 常用属性:name/id/cols(列数)/rows(行数)/placeholder/minLength/maxLength/required(必须输入)/value

#####  2.3 select类
> 下列列表框,默认用于单项选择;用option呈现每个选项

* multiple属性:表示多选,这时下拉的列表框,变成多选列表框
* size:最多显示的行数

#####  2.4 button类
> 普通按钮,具有提交功能;可以单独使用,不写在form元素中;如果写在form中,有提交功能.









