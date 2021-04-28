
var user1={
    email : "sadekullanici33@gmail.com",
    phone : "+994557553155",
    newpass : "jamil12345"
}
var user2={
    email : "cavad.pashayev98@gmail.com",
    phone : "+994702518313",
    newpass : "javad12345"
}
var user3={
    email : "nazrintagizade2001@mail.ru",
    phone : "+994553604958",
    newpass : "nazrin12345"
}
var user4={
    email : "pervizrzazade2@mail.ru",
    phone : "+994503992450",
    newpass : "perviz12345"
}
$(".button").on('click',function(){
    searchUser =$("#himbil").val()
    if(searchUser == user1.email || searchUser==user1.phone ){
        alert("Your new pass: " + user1.newpass +" Dont forget change password")
    }
    else if(searchUser == user2.email || searchUser==user2.phone ){
        alert("Your new pass: " + user2.newpass +" Dont forget change password")
    }
    else if(searchUser == user3.email || searchUser==user3.phone ){
        alert("Your new pass: " + user3.newpass +" Dont forget change password")
    }
    else if (searchUser == user4.email || searchUser==user4.phone ){
        alert("Your new pass: " + user4.newpass +" Dont forget change password")
    }
    else{
        alert("Dont find any user")
    }

})
