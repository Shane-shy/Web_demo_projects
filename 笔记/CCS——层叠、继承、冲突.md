# CCS——层叠、继承、冲突

## 层叠

层叠（冲突），也就是元素样式存在冲突，比如一个元素的一个样式多次被赋予属性值。

例如：

```html
<body>
  <div class = 'myDiv' id = 'thisDiv'>
    lorem.
  </div>
</body>
```



```css
div{
  color:blue;
}
.myDiv{
  color:green;
}
#thisDiv{
  color:red;
}
div.myDiv{ /*这表明：选中div元素并且其类名为myDiv*/
  color:orange;
}
```





