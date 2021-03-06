> 简介

* 定位 (position)
* 网站整体布局
* BFC
* IFC

### 1.定位(position)
> 设定元素在文档中的位置。会将标签(元素)转换为块级。

### 2.定位分类(属性值)
* 1.static:静态定位,默认值,没有定位,不能设置偏移值(left/top/right/bottom),占用标准流(文档流)

* 2.relative:相对定位
	* 占用标准流(文档流),它会出现在文档流中它该出现的位置;可以通过设置偏移值改变其位置。它相对于自身所占的位置做偏移。
* 3.absolute:绝对定位
	* **脱离文档流,相对于body做偏移**。
	* 绝对定位一般与相对定位结合使用,它相对的父级是relative定义的元素。relative的元素是absolute的父级。
	* 在项目开发中,一般用relative+absolute结合使用。
* 4.fixed:固定定位
	* **脱离文档流**,相对于浏览器窗口左上角(0,0)进行偏移,它与relative设定的对象没有关系,也就是说它跟父级的定位没有任何关系。
	* 一般在开发中用来固定导航栏。 

### 3.z-index 
> 当多个元素添加绝对定位,元素将会叠加在一起,使用z-index可以设置元素显示的层次。

* 文档流默认的z-index的值为0。
* 用在static和relatice元素上将无效。

#### 网站开发策略 :*先整体再局部,至顶向下,逐步细化*。
#### 布局1:双飞翼布局
* 1.双飞翼布局:由三列组成,两端固定,中间自适应。
* 2.双飞翼布局的优点
	* 1.兼容性好,兼容所有主流的浏览器,包括万恶的IE6
	* 2.因为在DOM中,center_panel在三列结构最前面,因此可以实现主要内容的优先加载 

#### 布局2:圣杯布局
* 由三列组成,两端固定,中间自适应。外观与双飞翼布局一样。
* 布局时与双飞翼比增加了定位和偏移设置

#### 布局3: 侧边栏固定布局
##### 1.侧边栏固定布局
* 左侧固定,右侧自适应
* 左侧自适应,右侧固定
* 左右都固定

##### 2.三栏布局

* 左侧固定,中间自适应,右侧固定
* 左侧自适应,中间和右侧固定
* 左侧和中间固定,右侧自适应

### 5.BFC & IFC
> FC:Formatting Context (格式上下文)。它是CSS2.1规范中的一个概念。它是页面中的一块渲染区域,并且有一套渲染规则,它决定了其子元素将如何定位,以及和其他元素的关系和相互作用。

>分为:BFC和IFC

#### 5.1 BFC:块级格式上下文
* 1) 形成BFC的条件
	* 1.浮动元素(float除none一外的值)
	* 2.定位元素(position(absolute/fixed)) 
	* 3.display(值为:inline-block/table-cell/table-caption)
	* 4.overflow(值为hidden/auto/scroll时)
* 2) BFC特性
	* 1.内部的盒子会在垂直方向一个接一个的放置
	* 2.垂直方向上的距离会叠加,(距离塌陷)值由最大margin值决定 (如果不要叠加,就需要将该盒子变成一个独立的盒子)
	* 3.BFC的区域不会与float元素区域重叠
	* 4.计算BFC的高度时,浮动元素也参与计算
	* 5.BFC就是页面上一个独立的容器,容器里面的元素不会影响到外面的元素 
* 3) BFC的作用:
	* 1. 解决margin重叠的问题 (添加独立BFC)
	* 2. 解决浮动高度塌陷的问题(在父级添加overflow:hidden)
	* 3. 解决侵占浮动元素的问题(在父级添加overflow:hidden清除浮动)

#### 5.2 IFC:内联(行级)格式上下文
* 1.) 形成IFC的条件
	* 1. font-size
	* 2. line-height
	* 3. height
	* 4. vertical-align
* 2.) IFC特定(规则)
	* 1.IFC的元素会在一行中,从左至右排列
	* 2.在一行上的所有元素会在该区域形成一个行框
	* 3.行宽的高度为包含框的高度,高度为行框中最高元素的高度
	* 4.浮动的元素不会在行框中,并且浮动元素会压缩行框的高度
	* 5.行框的宽度容纳不下子元素时,子元素会自动换下一行显示,并且会产生新的行框
	* 6.行框的元素内遵循text-alight和vertical-align
	* 7.容器的高度: height = line-height + vertical-align

