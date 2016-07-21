/*
created by Ipo
2016/07/19/version1.2
add button validate finally
 */
(function (window, document) {
    var defaults = {
        msgs: {
            required: "不能为空",
            min_length: "数值太小",
            max_length: "数值太大",
            CHS: "请输入汉字",
            number: "请输入数字",
            email: "无效email",
            username: "用户名只允许汉字、英文字母、数字及下划线",
            password: "密码只能输入6-20个字母、数字、下划线"
        },
        callback: function (errors) {
            alert(errors);
        },
        input_arr: ''
    };
    var CHS_rule = /^[\u0391-\uFFE5]+$/,//汉字
		name_rule = /^[\u0391-\uFFE5\w]+$/,//登录名只允许汉字、英文字母、数字及下划线
		pwd_rule = /^(\w){6,20}$/,//6-20个字母、数字、下划线
		email_rule = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
		number_rule = /^\d+$/;
    function validate(id, typeInfo, callback) {
        var element = document.getElementById(id),
			_value = element.value,
			callbackfn = callback || defaults.callback;
        switch (typeInfo.type) {
            case 'required': {
                if (isNull(_value)) {
                    callbackfn(defaults.msgs['required']);
                    return false;
                }
            };
                break;
            case 'min_length': {
                if (!number_rule.test(_value)) {
                    callbackfn(defaults.msgs['number']);
                    return false;
                } else if (Number(_value) < typeInfo.value) {
                    callbackfn(defaults.msgs['min_length']);
                    return false;
                }
            };
                break;
            case 'max_length': {
                if (!number_rule.test(_value)) {
                    callbackfn(defaults.msgs['number']);
                    return false;
                } else if (Number(_value) > typeInfo.value) {
                    callbackfn(defaults.msgs['max_length']);
                    return false;
                }
            };
                break;
            case 'CHS': {
                if (!CHS_rule.test(_value)) {
                    callbackfn(defaults.msgs['CHS']);
                    return false;
                }
            }
                break;
            case 'number': {
                if (!number_rule.test(_value)) {
                    callbackfn(defaults.msgs['number']);
                    return false;
                }
            };
                break;
            case 'email': {
                if (!email_rule.test(_value)) {
                    callbackfn(defaults.msgs['email']);
                    return false;
                }
            };
                break;
            case 'username': {
                if (!name_rule.test(_value)) {
                    callbackfn(defaults.msgs['username']);
                    return false;
                }
            };
                break;
            case 'password': {
                if (!pwd_rule.test(_value)) {
                    callbackfn(defaults.msgs['password']);
                    return false;
                }
            };
                break;
        };
        return true;
    };
    //show error filed and when click again will disappear
    function showAndHideErrorField(info_field, info_error) {
        //the style of the error message/how to display
        let error_field = info_field.nextSibling.nextSibling;
        error_field.innerHTML = info_error;
        error_field.style.color = 'red';
        //this way is better than display or deal with the dom with''
        error_field.style.visibility = 'visible';
        info_field.onclick = function () {
            error_field.style.visibility = 'hidden';
        };
    }
    //input value is null and then return true
    function isNull(_value) {
        if (_value == null || _value == undefined || _value == '') {
            return true;
        } else {
            return false;
        }
    }
    //only the formid;to validate all inputs that need to validate
    var inputValidate = function (module_id) {
        /*
		***set a flag to check if the first/second/... validation is tested or not,and decide whether to vaidate the next one;
		***get the form id;set the field to validate
		***get all input in this form to check its validate attribute
		 */
        var result = true,
			_module = document.getElementById(module_id),
			input_arr = _module.getElementsByTagName('input');
        defaults.input_arr = input_arr;
        for (let i = 0; i < input_arr.length; i++) {
            //check to validate or not
            let isvalidate = input_arr[i].getAttribute('validate');
            if (isvalidate) {
                /*get the validation type;it is a string like{"":""},{"":""}...
				***@validate_id:get the inputid to validate
				***@type_arr:define typeJSON array like [{"":""},{"":""}...]
				***@defaults_msgs:define the errormessage; it may be yours or defafults.msgs
				*/
                let arr = input_arr[i].getAttribute('validateInfo').split(';'),
					validate_id = input_arr[i].id,
					type_arr = [],
					defaults_msgs = [];
                //string to json
                for (let j = 0; j < arr.length; j++) {
                    let elem = JSON.parse(arr[j]);
                    type_arr.push(elem);
                    elem2 = elem.type;
                    defaults_msgs.push(defaults.msgs[elem2]);
                }
                //error message can be yours/defaults
                let my_err_msgs = input_arr[i].getAttribute('error_message').split(','),
					err_msgs = my_err_msgs != "" ? my_err_msgs : defaults_msgs;
                //bind onblurEvent for every input in this 'demo' form
                input_arr[i].addEventListener('blur', function () {
                    for (let n = 0; n < type_arr.length; n++) {
                        result = validate(validate_id, type_arr[n], function () {
                            //show error filed and when click again will disappear
                            return showAndHideErrorField(input_arr[i], err_msgs[n]);
                        });
                        //decide to check the next step or not;the result is the validate's return
                        if (!result) {
                            break;
                        }
                    }
                });
            }
        }
    };
    inputValidate.prototype.btnValidateRequired = function (btn_id) {
       var btn = document.getElementById(btn_id);
       btn.addEventListener('click', function () {
           var inputs = defaults.input_arr;
            for (let i = 0; i < inputs.length; i++) {
                let isRequired = inputs[i].getAttribute('isRequired'),
					input_value = inputs[i].value;
                if (isRequired && isNull(input_value)) {
                    //show error filed and when click again will disappear
                    showAndHideErrorField(inputs[i], '*必填');
                }
            }
       });
    };
    //estimate the required input is null?do not submit the data to end:do submit
    inputValidate.prototype.hasNull = function () {
        var inputs = defaults.input_arr;
        for (let i = 0; i < inputs.length; i++) {
            let isRequired = inputs[i].getAttribute('isRequired'),
                input_value = inputs[i].value;
            if (isRequired && isNull(input_value)) {
            	//return true =>reuired has null
                return true;
            }
        }
        return false;
    };
    //the API
    window.inputValidate = inputValidate;
})(window, document);