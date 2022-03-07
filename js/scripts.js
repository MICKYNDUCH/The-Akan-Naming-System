//
// var days = {"sunday","monday","tuesday","wednesday","thursday","friday","saturday"};
// var maleNames = {"kwasi","kwando","kwabena","kwaku","yaw","kofi","kwame"};
// var femaleNames ={"akosua","adwoa","abena","akua","yua","afua","ama"};
// var weekNumder = {"0","1","2","3","4","5","6","7"};
//
// day===maleNames===femaleNames===weekNumder;



// function calculate_age(dob) {
//     var diff_ms = Date.now() - dob.getTime();
//     var age_dt = new Date(diff_ms);
//
//     return Math.abs(age_dt.getUTCFullYear() - 1970);
// }
//
// console.log(calculate_age(new Date(1991, 11, 29)));

function calculate_age(dob) {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
var input = prompt("please input date = (yyyy mm dd)")
console.log(calculate_age(new Date(input)));
