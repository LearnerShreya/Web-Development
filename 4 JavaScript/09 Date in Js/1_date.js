
const d = new Date();
console.log(d)
console.log(d.toString())
console.log(d.toDateString())

console.log(typeof d)

// ye time kaha se nikal raha hai : hamare syastem se, hardware se
// time value milisecond me aata hai, it helps in micro comparison ( Eg: 2 person booked ticket at a time, the one whose micro second is less will get ticket )
const e = new Date(1);  // 1 is time in milisecond starting from 1970-01-01T00:00:00.001Z
console.log(e)


const f = new Date(1800000000000);
console.log(f)


// Create a date object using milisecond
// 1 second = 1k milisecond
const g = new Date(1730486400000); // Milliseconds 
console.log(g.toLocaleString()); 


console.log(d.getDate())
console.log(d.getDay())
// Day : Sun = 0, Mon = 1, Tue = 2, Wed = 3, 
// Day in case of string : Sun = 1, Mon = 2, Tue = 3, Wed = 4, 
console.log(d.getMonth())
// Month : jan = 0, Feb = 1, March = 2, 
// Month in case of string : jan = 1, Feb = 2, March = 3, 
console.log(d.getFullYear())
console.log(d.getMilliseconds())
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())

console.log(d.getTime())

const now = Date.now();
console.log(now);

const da = new Date("2022-10-20");
console.log(da);

const dat = new Date("2022-10-20T10:10:12");
console.log(dat);

const de = new Date();
de.setDate(20);
de.setFullYear(2021);
de.setMonth(3);
console.log(de);
console.log(de.toString())
console.log(de.toLocaleDateString())