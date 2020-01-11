function generatePassword(){

    //set password length/complexity
    let lengthPassword = $('#slider').val();
    $('#length').text(lengthPassword);

    //possible password values
    let valuesInputs = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= lengthPassword; i++){
        password = password + valuesInputs.charAt(Math.floor(Math.random() * Math.floor(valuesInputs.length - 1)));
    }

    let totalNumberOfPass = [];
    
    if (totalNumberOfPass.length > 5){
        totalNumberOfPass.pop();
        totalNumberOfPass.push(password)
    } else {
        totalNumberOfPass.push(password)
    }

    //add password to textbox/display area
    for (let i in totalNumberOfPass){

    document.getElementById("lastPasswords").innerHTML += password + "<br />";
    }

    $('#passwordDisplay').text(password)

    //add password to previously generated passwords section

}

$(function () {
    var clipboard = new ClipboardJS('#copy');
    tippy('#copy', {
        content: "Copied!",
        trigger: 'click'
    });
    $('input[type=range]').on('input', function () {
        $('#length').text($(this).val());

    });

});


// var data = {
//     init: function(){
//         // first, create the 4 character sets
//         this.numChar = [1,2,3,4,5,6,7,8,9,0];
//     },
//     get:function(x){
//         if(x==='number'){
//             console.log(this.numChar);
//             return data.numChar
//         }
//     },
//
// };



// var controler = {
//     init:function(){
//         // console.log(data);
//         console.log(view);
//         // data.init();
//         view.init();
//     },
//     get:function(x){
//         if (x === 'number'){
//             return data.get('number')
//         }
//     }
// };
//
//
// var view = {
//     init: function(){
//         this.but = document.getElementById('butttt');
//         this.but.addEventListener('click',function(){view.render()})
//     },
//     render:function(){
//         let a = controler.get('number');
//         console.log(a)
//     },
//
// };
//
// controler.init();