const groupAdultsByAgeRange = [
    { name: "pete", age: 10 },
      { name: "dove", age: 17 },
      { name: "dave", age: 18 },
      { name: "hall", age: 19 },
      { name: "donn", age: 20 },
      { name: "trey", age: 21 },
      { name: "hann", age: 29 },
      { name: "chew", age: 30 },
      { name: "cloe", age: 31 },
      { name: "dart", age: 39 },
      { name: "this", age: 40 },
      { name: "dame", age: 41 },
      { name: "henk", age: 49 },
      { name: "anna", age: 50 },
      { name: "olga", age: 51 },
      { name: "bert", age: 52 },
      { name: "oldd", age: 120 },
];

groupAdultsByAgeRange.forEach(function (adults) {
console.log(adults);
});

const result = groupAdultsByAgeRange.filter(adults => (adults.age < 21))
const result2 = groupAdultsByAgeRange.filter(adults => (adults.age >= 21))

const groupAge = groupAdultsByAgeRange.reduce((currentTotal, groupAdultsByAgeRange)=>{
    return groupAdultsByAgeRange.age + currentTotal
}, 0)

console.log(groupAge);

// const result3 = groupAdultsByAgeRange.filter(adults => (adults.age >= 31 && adults.age <= 40 ))
// const result4 = groupAdultsByAgeRange.filter(adults => (adults.age >= 41 && adults.age <= 50 ))
// const result5 = groupAdultsByAgeRange.filter(adults => (adults.age >= 51))


console.log(result);
console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);




// const groupAdults = groupAdultsByAgeRange.filter(adult => adult.name.age);

module.exports.groupAdultsByAgeRange = function groupAdultsByAgeRange() {
    groupAdultsByAgeRange
}