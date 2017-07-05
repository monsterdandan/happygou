	function checkReg(type,value){
		switch(type){
			case "phone" : if((/^1\d{10}$/g).test(value)){
				return true;
			}else{
				return false;
			};break;
			case "password" : if((/^[a-zA-Z]\w{6,20}$/g).test(value)){
				return true;
			}else{
				return false;
			};break;

		}
	}

	//手机号验证
	$("#phoneNum").focus(function(){
		$("#teltest").html("请输入11位手机号码");
	})
	$("#phoneNum").blur(function(){
		if($("#phoneNum").value)
		$("#teltest").html("");
	})

	$("#codeMsg").focus(function(){
		$("#codetest").html("请输入发送到您手机上的验证码");
	})
	$("#codeMsg").blur(function(){
		$("#codetest").html("");
	})

	$("#psw_one").focus(function(){
		$("#pswtest").html("请输入您的密码,您的密码可能为字母、数字或符号组合");
	})
	$("#psw_one").blur(function(){
		$("#pswtest").html("");
	})

	$("#psw_two").focus(function(){
		$("#pswtest2").html("请再次输入您的密码");
	})
	$("#psw_two").blur(function(){
		$("#pswtest2").html("");
	})

	$("#V_code").focus(function(){
		$("#codetest2").html("请输入右侧验证码");
	})
	$("#V_code").blur(function(){
		$("#codetest2").html("");
	})


