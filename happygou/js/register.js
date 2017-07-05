function $i(id){
        return document.getElementById(id);
 };	
window.onload=function(){
	$i("tel_enter").onclick=function(){
		 $i("encroll_form1").style.display="block";
		 $i("encroll_form2").style.display="none";
	}	
	$i("name_enter").onclick=function(){
		 $i("encroll_form2").style.display="block";
		 $i("encroll_form1").style.display="none";
	}
		//招商菜单显示
	var aside_img=$(".aside_img")[0];
	var down_app=$(".down_app")[0];
	aside_img.onmouseover=function(){
		down_app.style.display="block";
	}	
	aside_img.onmouseout=function(){
		down_app.style.display="none";
	}

}