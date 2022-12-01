require("dotenv").config();
console.log(`My env value is ${process.env.SECRET_KEY}`);

var moment = require("moment");
var date = moment().format("LL");

console.log(date);
