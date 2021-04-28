before = function () {
    window.open('./index2.html', '_self')
}
buttonnext = document.querySelector('.btn')
buttonnext.onclick = () => {
    window.open('./popup4.html', '_self')
}

input = document.querySelector('.hitachi')
input2 = document.querySelector('.hitachi2')
input3 = document.querySelector('.hitachi3')
var letters = "qwertyuioplkjhgfdaszxcvbnməıöğçşü"
placeholder=localStorage.getItem("Placeholder")
input2.setAttribute("placeholder",placeholder)
next = function () {
    console.log(placeholder)
    
    for (c of input2.value) {
        if(placeholder=="Telephone"){
        if (letters.indexOf(c) !== -1) {
            input2.value = ""
        }}
    }
    for (c of input3.value) {
        if (letters.indexOf(c) !== -1) {
            input3.value = ""
        }
    }
    $(function () {
        $('input[type="text"]').change(function () {
            this.value = $.trim(this.value);
        });
        $('input[type="tel"]').change(function () {
            this.value = $.trim(this.value);
        });
    });
    if (input.value.length > 0 && input2.value.length > 0 && input3.value.length > 0) {
        buttonnext.disabled = false
        buttonnext.style.opacity = 1
    }
    else {
        buttonnext.disabled = true
        buttonnext.style.opacity = 0.5
    }


}
var storeName = localStorage.getItem("Name")
var storePhone = localStorage.getItem("Phone")
var storeYear  = localStorage.getItem("Year")
var storeMonth  = localStorage.getItem("Month")
var storeDay  = localStorage.getItem("Day")
$('.hitachi').val(storeName)
$('.hitachi2').val(storePhone)
$('.hitachi3').val(storeYear+"/"+storeMonth+"/"+storeDay)