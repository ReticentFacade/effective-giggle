export const calculateTotalAmount = (cartEntries) => {
  let totalAmount = 0;

  for (const cartEntry of cartEntries) {
    totalAmount += parseFloat(cartEntry.beanPrice);
  }

  return totalAmount;
};

export const calculateBeanPrice = (beanType, beanAmount) => {
  let beanPrice = 0;
  const numericAmount = parseFloat(beanAmount);

  if (isNaN(numericAmount)) {
    throw new Error("Invalid beanAmount: " + beanAmount);
  }

  if (beanType === "Arabica") {
    beanPrice = numericAmount * 20;
  } else if (beanType === "Robusta") {
    beanPrice = numericAmount * 25;
  } else if (beanType === "Liberica") {
    beanPrice = numericAmount * 30;
  }

  return beanPrice;
};

// export default { calculateTotalAmount, calculateBeanPrice };
