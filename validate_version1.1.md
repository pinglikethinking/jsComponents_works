# 更新validate version1.1 [源码](https://github.com/pinglikethinking/jsComponents_works/blob/master/js/validate_version1.1.js)
##### 为了方便使用，现更新版本，主要变更如下
* JS代码不用自己设置太多，是需要new validate('formid')
* 错误信息提示一律显示在验证框下面，以红色字体标出
* 错误信息可以自己设置，也可以设置为空，为空时显示默认提示
* html页面需要给form添加ID，给INPUT添加一些属性，INPUT下面添加标签label。详情如下：

```html
    <h2>version2 validate</h2>
    <h5>随意组合，目前总共分为以下几个规则</h5>
    <form id="demo">
        用户名：<input type="text" name="" id="username" validate="true" validateInfo='{"type":"username"}' error_message="">
        <label></label>
        <br><br>
        密码  ： <input type="password" name="" id="password" validate="true" validateInfo='{"type":"password"}' error_message="">
        <label></label>
        <br><br>
        不能为空：<input type="text" name="" id="requ" validate="true" validateInfo='{"type":"required"}' error_message="">
        <label></label>
        <br><br>
        数值不能小于10：<input type="text" name="" id="min" validate="true" validateInfo='{"type":"min_length","value":"10"}' error_message="">
        <label></label>
        <br><br>
        数值最大不能超过100：<input type="text" name="" id="max" validate="true" validateInfo='{"type":"max_length","value":"100" }' error_message="">
        <label></label>
        <br><br>
        数字：<input type="text" name="" id="num" validate="true" validateInfo='{"type":"number"}' error_message="">
        <label></label>
        <br><br>
        汉字：<input type="text" name="" id="chs" validate="true" validateInfo='{"type":"CHS"}' error_message="">
        <label></label>
        <br><br>
        Email：<input type="text" name="" id="email" validate="true" validateInfo='{"type":"number"};{"type":"email"}' error_message="">
        <label></label>
        <br><br>
        <button>刷新</button>
    </form>
    <script type="text/javascript" src="../js/validate_version1.1.js"></script>
    <script type="text/javascript">
        new inputValidate("demo");
    </script>
```

是不是很简单，有疑问欢迎留言
**想要使用的同学，请注明版权@Ipo**
**转发请注明版权@Ipo**