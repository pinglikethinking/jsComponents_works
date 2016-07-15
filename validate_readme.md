# js/validate.js是封装好的验证
**目前支持的验证类型：**
* 数字类型(number)：包括验证是否为数字，数值的范围是否符合设定的范围包括不能超过(max_length)和不能小于(min_length)
* 汉字类型(CHZ)：验证输入是否是汉字
* 密码类型(password)：验证密码是否符合rule，目前设置为：字母和数字组成，至少6位
* 用户名类型(username)：目前设置rule为：只允许汉字、英文字母、数字及下划线
* email类型(email)：通用rule
* 必须填写(required)：验证是否为空
**验证类型慢慢会增加**
##### 如何使用呢
* 通用的方法，验证信息不用自己设置

以验证数值不能小于10为例，如下：
其中demoo为input框的id

```javascript
function validateMin(){
        var isnumber=new validate('demoo',[{type:'number'},{type:'min_length',val:10}]);//其实不用验证是否为数字了，验证大小的时候会验证是否为数字，这里只是举个例子可以组合验证
    }
```

* 自己设置信息如何显示，定义一个callback函数返回

以验证信息需为数字为例，如下：

```html
        验证输入的是否为数字：
        <input type="text" name="number" id="demo" onblur="validateNumber()">
        <label id="erroInfo"></label>
    <script type="text/javascript" src="../js/validate.js"></script>
    <script type="text/javascript">
        function _callback(erroField,erroinfo){
            var _html=document.getElementById(erroField);
            _html.innerText=erroinfo;
        }
        function notvisible(infoField,erroField){
            var _input=document.getElementById(infoField);
            _input.addEventListener('click',function(){
                var _html=document.getElementById(erroField);
                _html.innerHTML='';
            });
        }
        function validateNumber(){
            var validator=new validate('demo',[{type:'number'}],function(){return _callback('erroInfo','请输入数字...姐！');});//验证信息自己设定
            notvisible('demo','erroInfo');
        }
    </script>
```


* 绑定事件可以这样自定义属性

```html
    <h2>
        第二种方式，自定义属性
        <input type="text" name="" id="info" validate="true">
    </h2>
    <script type="text/javascript" src="../js/validate.js"></script>
    <script type="text/javascript">
    //自定义属性
    function demo(){
        var info=document.getElementById('info');
        if(info.attributes["validate"].nodeValue){
            info.addEventListener('blur',function(){
                var isnum=new validate('info',[{type:'number'}]);
            });
        }
    }
    demo();
    </script>
```

不需要验证只需要改一处，设置为false即可。上面绑定事件删除onblur即可。

**注意**

* 类型要按我上面的传参
* 回调callback函数须以我的demo为准，否则无效
* 回调函数callback参数ID必须以双引号括起"id"或者单引号'id'，否则无效
* 默认显示错误提示是弹出框的形式，建议按照我的上面
* 默认显示错误提示是弹出框的形式，建议按照我的上面demo设置显示，最好可以结合css调整样式，建议用visibility:visible/hidden，这样减少reflow时间