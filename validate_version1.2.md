# validate version 1.2 [源码](https://github.com/pinglikethinking/jsComponents_works/blob/master/js/validate_version1.2.js)

##### version1.1提供的是进入表单又出来的及时验证
##### version1.2增加了button验证必填字段是否为空，因为用户并未进入表单所以无法触发验证，需要button触发
##### version1.2增加了提交数据到后台之前的判断，必填没填的都不能执行提交数据到后台

使用如下：
```html
    <form id="demo">
        不能为空：<input type="text" name="" id="requ" validate="true" validateInfo='{"type":"required"}' error_message="" isRequired="true">
        <label></label>
        <br><br>
    </form>
    <input type="button" name="" value="submit" id="btn_id">
    <script type="text/javascript" src="../js/validate_version1.2.js"></script>
    <script type="text/javascript">
        var validation=new inputValidate("demo");
        validation.btnValidateRequired("btn_id");
        var result=validation.hasNull();
        if(!result){
            //执行提交数据到后台或者与后台的其他数据交换
        }
    </script>
```

**如需BUTTON 进行验证只需给实例调用btnValidateRequired**
**input表单需要添加属性isRequired=true**

**想要使用的同学，请注明版权@Ipo**
**转发请注明版权@Ipo**