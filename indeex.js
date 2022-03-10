// // assignment operators

// let x = 10;
// let y = 3;
// console.log((x += y));
// console.log(x);
// console.log((x -= y));
// console.log((x *= y));
// console.log((x /= y));
// console.log((x %= y));
// console.log((x **= y));

// console.log(2 === 4);
// console.log(2 != 2);
// console.log(2 !== 3);
// console.log(2 < 3);
// console.log(2 > 3);
// console.log(2 >= 2);
const name = () => {};

const items = [
  { name: 'shirt', price: 45 },
  { name: 'shoe', price: 80 },
  { name: 'car', price: 500 },
  { name: 'apple', price: 15 },
  { name: 'kettle', price: 25 },
  { name: 'phone', price: 125 },
  { name: 'shirt', price: 45 },
];

// // filters and return a new array
// const filterItems = items.filter((item) => {
//   return item.price <= 50;
// });

// console.log(filterItems);
// console.log(items);

// //map

// maps and return a new array
// const itemNames = items.map((item) => {
//   return item.name;
// });

// console.log(itemNames);

// // find allows you tofind a single element in an array

// const findItem = items.find((item) => {
//   return item.name === 'shirt';
// });

// console.log(findItem);

// // forEach doesn't return anything
// items.forEach((item) => {
//   console.log(item.name);
// });

// // checks the entire array and returns true.
// const lessExpensive = items.some((item) => {
//   return item.price <= 10;
// });

// console.log(lessExpensive);
// // checks the entire array and returns true.
// const strictLessExpensive = items.every((item) => {
//   return item.price <= 501;
// });

// console.log(strictLessExpensive);

// //reduce does a total combination of the entire array

// const totalPrice = items.reduce((currentTotal, item) => {
//   return item.price + currentTotal;
// }, 0);

// console.log(totalPrice);

// // includes

const item2 = [23, 34, 56, 76, 87];

const includesNum = item2.includes(4);
console.log(includesNum);
