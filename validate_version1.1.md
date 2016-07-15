# 更新validate version1.1 [源码](https://github.com/pinglikethinking/jsComponents_works/blob/master/js/validate_version1.1.js)
##### 为了方便使用，现更新版本，主要变更如下
* JS代码不用自己设置太多，是需要new validate('formid')
* 错误信息提示一律显示在验证框下面，以红色字体标出
* 错误信息可以自己设置，也可以设置为空，为空时显示默认提示
* html页面需要给form添加ID，给INPUT添加一些属性，INPUT下面添加标签label。详情如下：

```html
    <form id="demo">
        <input type="text" name="" id="info" validate="true" validateInfo='{"type":"number"},{"type":"email"}' error_message="非数字,非email">
        <label></label>
    </form>
    <script type="text/javascript" src="../js/validate_version1.1.js"></script>
    <script type="text/javascript">
        new inputValidate("demo");
    </script>
```

是不是很简单，有疑问欢迎留言
