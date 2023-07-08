const data = `{
  "order_id": 1,
  "bean_type": ["SomeBean", "AnotherBean", "DifferentBean"],
  "bean_amount": ["5kg", "10kg"],
  "user_address": "100/10, Apartment, Street, City, ..."
}`;

const parsedData = JSON.parse(data);

const orderId = parsedData.order_id;
const beanTypes = parsedData.bean_type;
const beanAmount = parsedData.bean_amount;
const userAddress = parsedData.user_address;

console.log(orderId);
console.log(beanTypes);
console.log(beanAmount);
console.log(userAddress);

// const order = await Order.create({
//   orderItems: cartEntries,
//   totalAmount: calculateTotalAmount(cartEntries),
// });

