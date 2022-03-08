var date = document.getElementById("dt");
var month = document.getElementById("mm");
var year = document.getElementById("yyy");
var gender = document.getElementById("gender");
var form = document.getElementById("form");
// function getAge(dateString)
// {
// //     var today = new Date();
//     var birthDate = new Date(dateString);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
//     {
//         age--;
//     }
//     return age;
// }
// var d = new Date();
// var n = d.getFullYear();
// function getAge(birthYear){
// 	var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     age = currentYear - birthYear;
//     return age;
// }
// calculatedAge = getAge(year_born);
// alert("Hello, " + "you are " + calculatedAge + " years old!");
// var myDate = new Date(2019, 11, 06, 10, 45);
// var dayInYear = Math.floor((myDate - new Date(myDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));

form.addEventListener("submit", function(e){
  e.preventDefault()
  console.log(date.value, month.value, year.value, gender.value)
})
