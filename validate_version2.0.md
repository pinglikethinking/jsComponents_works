# validate_version2.0 [源码]()

##### 内部解决了下可能存在的闭包问题，当外部使用的时候，如下：

```html
    <form id="demo">
        不能为空：<input type="text" name="" id="requ" validate="true" validateInfo='{"type":"required"}' error_message="" isRequired="true">
        <label></label>
        <br><br>
    </form>
    <script type="text/javascript">
        define(['jquery','js/app/validate'],
            function ($,Validate) {
                console.log('login');
                var validation=new inputValidate("demo");//这里面就有闭包
            }
        );
    </script>
```