import { format } from "date-fns";
let time1 = new Date();
let time2 = new Date();
let currentTime = format(new Date(), "yyyy-MM-dd HH:mm:ss");

console.log("time:", time1);
console.log("format:", currentTime);

console.log(time1.getTime());
console.log(time2.getTime());
