##clearfix技巧
“clearfix”技巧是基于在父元素上使用“:before”和“:after”两个伪类。使用这些伪类，可以在浮动元素的父容器前面和后面创建隐藏元素(或空元素)。“:before”伪类是用来防止子元素顶部的外边距塌陷。“:after”伪类是用来防止子元素的底部的外边距塌陷，以及用来清除元素的浮动。

	.box-set:before,
	.box-set:after { 
		content: "";
		display: block;
	}
	.box-set:after { 
		clear: both;
	}