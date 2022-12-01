require("dotenv").config();
console.log(`My env value is ${process.env.API_ENDPOINT}`);

var moment = require("moment");
var date = moment().format("LL");

console.log(date);
