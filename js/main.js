function getFormInput(){
    var date = document.getElementById('dateInput').value
    const male = document.getElementById("maleRadio");
    const female = document.getElementById("femaleRadio");

    if(male.checked){
        var gender = 'Male'
    }else if(female.checked){
        var gender = 'Female'
    }

    var gender =  alert(date+gender);
}