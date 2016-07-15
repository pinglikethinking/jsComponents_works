(function(window,document){
	var defaults={
		msgs:{
			required:"不能为空",
			min_length:"数值太小",
			max_length:"数值太大",
			invalid_CHS:"请输入汉字",
			invalid_number:"请输入数字",
			invalid_email:"无效email",
			invalid_username:"用户名只允许汉字、英文字母、数字及下划线",
			invalid_pwd:"密码必须由字母和数字组成，至少6位"
		},
		callback:function(errors){
			alert(errors);
		}
	};
	var CHS_rule=/^[\u0391-\uFFE5]+$/,//汉字
		name_rule=/^[\u0391-\uFFE5\w]+$/,//登录名只允许汉字、英文字母、数字及下划线
		pwd_rule=/^(([A-Z]*|[a-z]*|\d*|[-_\~!@#\$%\^&\*\.\(\)\[\]\{\}<>\?\\\/\'\"]*)|.{0,5})$|\s/,//由字母和数字组成，至少6位
		email_rule=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
		number_rule=/^\d+$/;
	var validate=function(id,type,callback){
		var element=document.getElementById(id),
			_value=element.value,
			callbackfn = callback || defaults.callback;
		console.log(typeof _value);
		for(let i=0;i<type.length;i++){
			switch(type[i].type){
				case 'required':{
					if(_value==null||_value==undefined||_value==''){
						callbackfn(defaults.msgs['required']);
					}
				};
				break;
				case 'min_length':{
					if(!number_rule.test(_value)){
						callbackfn(defaults.msgs['invalid_number']);
					}else if(_value<type[i].val){
						callbackfn(defaults.msgs['min_length']);
					}
				};
				break;
				case 'max_length':{
					if(!number_rule.test(_value)){
						callbackfn(defaults.msgs['invalid_number']);
					}else if(_value>type[i].val){
						callbackfn(defaults.msgs['max_length']);
					}
				};
				case 'CHS':{
					if(!CHS_rule.test(_value)){
						callbackfn(defaults.msgs['invalid_CHS']);
					}
				}
				break;
				case 'number':{
					if(!number_rule.test(_value)){
						callbackfn(defaults.msgs['invalid_number']);
					}
				};
				break;
				case 'email':{
					if(!email_rule.test(_value)){
						callbackfn(defaults.msgs['invalid_email']);
					}
				};
				break;
				case 'username':{
					if(!name_rule.test(_value)){
						callbackfn(defaults.msgs['invalid_username']);
					}
				};
				break;
				case 'password':{
					if(!pwd_rule.test(_value)){
						callbackfn(defaults.msgs['invalid_pwd']);
					}
				};
				break;
			};
		}
	};
	window.validate=validate;
})(window,document);