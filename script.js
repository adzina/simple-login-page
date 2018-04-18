function isWhiteSpace(str){
  var ws = "\t\n\r ";
  for (var i=0; i<str.length; i++){
    var c = str.charAt(i);
    if(ws.indexOf(c) == -1){
      return false;
    }
  }
  return true;
}

function validate(form){
 if(checkEmailRegEx(form.elements["email"])){
   try{
	   document.getElementById("email").className = "form-control";
	   document.getElementById("emailErr").className = "";
	   document.getElementById("emailLabel").className = "";

   }
   catch(error){}
		checkString(form.elements["password"])

 }
}
function checkString(obj){

  var str = obj.value;
  if (isWhiteSpace(str) || isEmpty(str)){
	document.getElementById(obj.id).className = "wrong";
	document.getElementById(obj.id+"Label").className = "wrong";
	document.getElementById(obj.id+"Err").className = "active";
	obj.focus();
	return false;
  }
  else{
    return true;
  }
}
function checkEmailRegEx(obj){
  var email = /[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+/;
  if(email.test(obj.value))
    return true
  else{
    document.getElementById(obj.id).className = "wrong";
    document.getElementById(obj.id+"Label").className = "wrong";
    document.getElementById(obj.id+"Err").className = "active";
    return false
  }
}
function goBack(){
  window.location.href = 'index.html';
  return false;
}
