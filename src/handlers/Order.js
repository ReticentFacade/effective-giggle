const file = require("fs");
const path = require("path");
const { v4 : uuidv4 } = require("uuid");

class OrderDetails {
  constructor(coffee_bean, amount, address) {
    this.coffee_bean = coffee_bean;
    this.amount = amount;
    this.address = address;
    this.order_id = ""; // Initialize order_id property
  }

  generateOrderID() {
    try {
      // 1. Generate a random 14-digit number (IDK IF THIS IS OPTIMAL!?). 
      const order_id = uuidv4();

      return order_id;

      // 2. Search for this number in database (i.e. json file as of now) if it's unique or not. Make a new function for searching order using orderNumber. 
      // 3. If not unique, try another number. If unique, keep it.
    } catch (err) {
      console.error("There was an error generating the order_id: ", err);
    }
  }

  placeOrder() {
    const filepath = path.join(__dirname, "orders.json");
    try {
      // Read the current content of the file:
      let orderList = [];
      if (file.existsSync(filepath)) {
        console.log("File exists!");
        const fileContent = file.readFileSync(filepath, "utf-8");
        orderList = JSON.parse(fileContent);
      } else {
        console.log("File not found!");
      }

      // Generate order_id
      this.order_id = this.generateOrderID();

      // Push newOrder into orderList
      const newOrder = {
        order_id: this.order_id,
        coffee_bean: this.coffee_bean,
        amount: this.amount,
        address: this.address,
      };
      orderList.push(newOrder);

      // Serialize
      const updatedOrdersJSON = JSON.stringify(orderList);
      // Write the newOrder in the file:
      file.writeFileSync(filepath, updatedOrdersJSON, "utf-8");

      console.log("Details of your order: ", newOrder);
      console.log("Order status: Successfully placed!");
    } catch (err) {
      console.error("There was an error while placing the order: ", err);
    }
  }

  searchOrder(order_id){
    prompt("Please enter your Order ID: " + order_id);
    
  }
  
  cancelOrder() {
    const filepath = file.existsSync(__dirname, "orders.json");
    try {
      // Read the content of the file:
      let orderList = [];
      if (file.existsSync(filepath)) {
        console.log("File exists!");
        const fileContent = file.readFileSync(filepath, "utf-8");
        orderList = JSON.parse(fileContent);
      }
    } catch (err) {
      console.error("There eas an error while cancelling the order: ", err);
    }
  }
}

const testOrder = new OrderDetails("Arabica", "15 kg", "123 Main Street");
testOrder.placeOrder();
