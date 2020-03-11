
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
	
}





function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var password = document.forms["myForm"]["password1"].value;
    var repassword = document.forms["myForm"]["password2"].value;
    //alert(pass);
    if (password != repassword){
        var form = document.getElementById("errormsg");
        form.innerHTML = "password error";
        
        return false;
    }
    else{
        return true;
    }


}



