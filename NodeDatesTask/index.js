//npm install moment --save
const moment = require("moment");

console.log(moment().format("LTS"));
console.log(moment("19761126", "YYYYMMDD").fromNow());
var current_date = '';
var num_of_years = 0;