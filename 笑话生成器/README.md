# 笑话生成器

## 项目简介

​	该项目是[MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/Silly_story_generator)的一个练习。在练习的基础上，自行实现完成。

1. 实现功能

   - 点击文字、输入框及选项，均可选中
   - 在文本框中，有提示语（李雷）
   - 可以通过输入的姓名，选择公制或美制，点击按钮随机生成笑话

2. 项目主要搭建

   - HTML

     - 主要使用了`<div> <label> <input> <button> <p>`标签。由于除了`<div>`标签外，全部都是行内标签，所以为了方便，将后面四个标签都嵌套在`<div>`标签内。
     - `<label>`的作用就是点击其内部的文字，就能选中对应的输入框。其中，==for属性需要设置为对应`<input>`标签的id==。
     - `<input>` 标签的功能强大，通过type属性可以实现不同功能，name属性指明该`<input>`标签，常用于表单。
       - *text*为文本框，可以在里面输入字符。
       - *radio*为单选框，要实现点击另外一个单选框，本单选框就不被选中，需要将name属性设置为相同值。checked属性表明默认选中

   - CSS

     - general_style.css 通用样式中，修改默认的margin和padding，均修改为0。
     - 去掉`<a>`标签的下划线和默认轮廓（其实这轮廓也不明显）。
     - `border-style`属性盒子模型的边框，solid表示实线，有很多种线可供选择。
     - ==属性选择器==。`<input>`标签的type有多种属性，每个属性对应不同的功能。如果一个属性的`<input>`标签都设置一个类名或者id，当项目大了后，都会不方便，所以可以通过属性选择器，直接选择匹配的`<input>`属性元素。语法格式`标签名[属性 = “属性值”]`。

   - JS

     - 获取元素

       ```javascript
       document.getElementById() //直接在括号内写id名，不需要加#
       document.getElementByTagName() //通过标签名选择元素，注意：选择的结果是HTMLCollection也就意味着是一个数组（尽管数组内可能只有一个元素），因此需要想数组一样通过下标去选择。这个也很好理解，通过标签名去选择元素，很可能HTML中有多个相同的标签
       document.querySelector() //这是CSS选择器选择元素。括号内可以完全像CSS选择器的方式填写。注意：该方式只能选择匹配的第一个元素。如果要选择全部，document.querySelectorAll()
       ```

       注意：`document.querySelector()`与`document.getElementByTagName() `的区别。前者只能选择匹配的第一个元素，后者选择匹配的所有元素。

     - 函数分析

       ```javascript
       function randomize(array) {
           return array[Math.floor(Math.random() * array.length)];
       }
       ```

       `Math.random()`：返回一个0-1的随机数。该随机数乘以数组长度也就是0-3的随机数。

       `Math.floor()`：向下取整。

       ```JavaScript
       function result() {
           let x = randomize(insertX);
           let y = randomize(insertY);
           let z = randomize(insertZ);
       
           let newStory = storyText.replaceAll(":insertx:", x);
           newStory = newStory.replace(":inserty:", y);
           newStory = newStory.replace(":insertz:", z);
           if (customName !== null) {
               newStory = newStory.replace("李雷", customName.value);
           }
           if (document.getElementById("a_metric").checked) {// 选择美制
               newStory = newStory.replace(" 35 摄氏度", " 95 华氏度").replace("140 公斤", "309 磅")
           }
           story.textContent = newStory;
           story.style.visibility = "visible";
       }
       
       ```

       1. 判断单选框是否被选中。`document.getElementById("a_metric").checked`，首先先获取该元素，再查看checked属性，如果被选中，会返回true，反之，则会返回false。
       2. JS修改样式。获取元素.style.样式 = “属性值”。
       3. 获取标签内的文字。如果是输入框一类的，用.value。如果是文段一类的，用.innerHTML或者.textContent。查询资料后，发现两者并没有本质区别，但后者是更新的，推荐用后者。

   ## 问题与解决

- 获取HTML元素，但全为NULL。

原因：JS脚本比HTML先执行，导致需要获取的元素还没有生成。

解决方法：

1. 将`<script></script>`放在最后，这样就能保证JS脚本是在HTML执行完后再执行。
2. 为`<script></script>`添加defer属性，如`<script src = “#” defer></script>`。defer属性表示推迟，相似的还有async表示异步。两者均能使HTML和JS异步执行，在大项目上有更好的用户体验。但是async是异步下载JS脚本，一旦下载完成，就终止HTML，执行JS。在多个JS脚本的情况下，谁先下载好，谁先执行。defer则是异步下载JS脚本，无论下载是否完成，都要等HTML执行完成后，再按顺序执行JS脚本。

- 无法添加监听器

原因：btn这个标签为null，则对应第一个问题。还有一个就是btn是一个数组，需要通过下标选择后才能添加监听器。
