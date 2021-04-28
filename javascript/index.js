var link = document.querySelector('.use')
var span = document.querySelector('.span')
var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var month = document.querySelector('.month');
var day = document.querySelector('.day');
var year = document.querySelector('.year');
var button = document.querySelector('.next')
var saygac = document.querySelector('.saygac')
var letters = "qwertyuioplkjhgfdaszxcvbnməıöğçşü "


function ops() {

    saygac.innerHTML = input1.value.length + "/50"

    if (link.textContent == "Use Email") {
        for (c of input2.value) {
            if (letters.indexOf(c) !== -1) {
                input2.value = ""
            }
        }
    }
   
    $(function () {
        $('input[type="text"]').change(function () {
            this.value = $.trim(this.value);
            console.log(this.value)
        });
        $('input[type="tel"]').change(function () {
            this.value = $.trim(this.value);
        });
    });


    if ((year.value.length > 0) && (input2.value.length > 0) && (month.value.length > 0) && (day.value.length > 0) && (input1.value.length > 0)) {

        button.disabled = false
        button.style.opacity = 1


    }
    else {
        button.disabled = true
        button.style.opacity = 0.5
    }
    $('.next').on('click', function () {
        
        var userStoragedName = $('.input1').val()
        var userStoragedPhone = $('.input2').val()
        var userStoragedBirthYear = $('.year').val()
        var userStoragedBirthMonth = $('.month').val()
        var userStoragedBirthDay = $('.day').val()
        var spanValue =document.querySelector('.span').textContent

        localStorage.setItem("Name", userStoragedName)
        localStorage.setItem("Phone", userStoragedPhone)
        localStorage.setItem("Year", userStoragedBirthYear)
        localStorage.setItem("Month", userStoragedBirthMonth)
        localStorage.setItem("Day", userStoragedBirthDay)
        localStorage.setItem("Placeholder",spanValue)
        console.log(spanValue)
        window.open("./Sign_Up/Signup/index2.html","_self")
    })


}

$('.use').on('click', function () {
    changeMail = link.textContent
    span = document.querySelector('.span')

    if (changeMail == "Use Email") {

        link.innerText = "Use Telephone"
        input2.value=""
        span.textContent = "Email"
        link.textContent="Use Telephone"
        
    }
    else {
        link.innerHTML = "Use Email"
        span.innerText = "Telephone"
        input2.classList.remove("wrinput")
        input2.value=""
        link.textContent="Use Email"
    }

})
rosford=()=>{
    if(link.textContent=="Use Telephone"){
    if(input2.value.indexOf("@")==-1){
     input2.classList.add("wrinput")       
    }
    else{
        input2.classList.remove("wrinput")
    }
    
}}



