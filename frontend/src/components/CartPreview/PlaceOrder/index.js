import CartContents from "./CartContents.js";
import PlaceOrderBtn from "./PlaceOrderBtn.js";

function PlaceOrder() {
  return (
    <div className="bg-transparent">
      <CartContents />
      <PlaceOrderBtn />
    </div>
  );
};

export default PlaceOrder;
