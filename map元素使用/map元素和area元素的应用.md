# map元素和area元素的应用

## 语义化

```html
<figure>
    <a href="https://zh.wikipedia.org/wiki/太阳系" target="_blank">
        <!--img的原点是在图片的左上角-->
        <img usemap="#solar" src="solar.jpg" alt="太阳系">
    </a>
    <figcaption>
        <h2>太阳系</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, praesentium.</p>
    </figcaption>
</figure>
```

人能很轻易的分辨上面的图片和下面的文字是配对的，但是计算机不能。因此，把两者都放在`<figure></figure>`元素中，能让计算机知道文字和图片是配对的，有利于搜索引擎进行搜索。`<figcaption></figcaption>`用于存放其中的所有对图片的文字描述，应该是`<figure>`元素中第一个或者最后一个元素

## lorem

lorem+tab键可以随机生成无语义的文字，主要就是用于查看文字排版。是Emmet的语法。

lorem100：表示随机生成100个无语义的文字。

## map元素与area元素

map元素：将图片视作地图，可以在图片上点击一个区域跳转到站外网页。

area元素：就是来划分区域的。shape有三种属性，circle、rect（rectangle）、poly分别对应圆形、矩形、多边形。如果是圆形，坐标就是圆心坐标 + 半径。如果是矩形，左上角坐标 + 右下角坐标。如果是多边形，以顺时针方向写出每一顶点的坐标。

target属性是规定打开新页面的方式：__blank_表示在新窗口上打开， _self_在自己的窗口上打开。

**注意：坐标的逗号是英文下的逗号，而不是中文。看上去很像，但是计算机无法识别，也不会给出报错。**