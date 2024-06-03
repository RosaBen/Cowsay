const information = require("./information");
const cowsay = require("cowsay");
console.log(cowsay.say({
    text: `My name is ${information.firstname}, I'm on the campus ${information.campus} ${information.promo}`,
    e: "oO",
    T: "U   "
}));
