window.onload = function(){
	var a = document.getElementById('captcha_refresh');
  if(a) {
		a.onclick = function(){
		  var b = document.getElementById('captcha_image');
		  var c = document.getElementById('captcha_input');
			var d = new Date();
			var e = d.getTime();
			b.src =  _URL + 'includes/lib/captcha/captcha.php?' + e;
			c.value='';
		};
	}
};