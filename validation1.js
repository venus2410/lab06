(function(){
    var number =document.getElementById("phone-number");
    var checkNumberValidity=function(){
        if(number.innerHTML.length>10){
            number.setCustomValidity('Phone number must valid.');
        }else{
            number.setCustomValidity('');
        }
    };
    number.onchange=checkNumberValidity;
}());