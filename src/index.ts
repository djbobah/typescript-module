import { totalPrice } from "./task1";

//task 1
const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
const price2 = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: false,
  months: 12,
});

const price3 = totalPrice({
  price: 100000,
  discount: 25,
});

const price4 = totalPrice({
  price: 100000,
});
console.log(price); // 6250
console.log(price2); // 75000
console.log(price3); // 75000
console.log(price4); // 100000
