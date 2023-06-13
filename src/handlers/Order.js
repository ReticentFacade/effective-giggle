const file = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// For searchOrder (searchAndShowOrder actually):
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

  promptOrderID() {
    return new Promise((resolve, reject) => {
      reader.question("Please enter your orderID: ", (order_id) => {
        resolve(order_id);
      });
    });
  }
  readOrdersFromFile() {
    const filePath = path.join(__dirname, "orders.json");
    const fileContent = file.readFileSync(filePath, "utf-8");
    const orders = JSON.parse(fileContent);
    return orders;
  }
  searchOrder(order_id) {
    const orders = this.readOrdersFromFile();
    const foundOrder = orders.find((order) => order.order_id === order_id);
    return foundOrder || null;
  }
  async searchAndShowOrder() {
    try {
      const order_id = await this.promptOrderID();
      const foundOrder = this.searchOrder(order_id);
      if (foundOrder) {
        console.log("Order found: \n", foundOrder);
      } else {
        console.log("Order not found :(");
      }
    } catch (err) {
      console.log("Error occurred during order search: ", err);
    } finally {
      reader.pause();
    }
  }

  async cancelOrder() {
    try {
      reader.resume();
      // Prompt user to enter order_id to be cancelled:
      const order_id = await this.promptOrderID();
      const orders = this.readOrdersFromFile();
      const foundOrderIndex = orders.findIndex(
        (order) => order.order_id === order_id
      );
      if (foundOrderIndex !== -1) {
        // Remove the order:
        const removedOrder = orders.splice(foundOrderIndex, 1)[0];

        // Serialize the updated orders array:
        const updatedOrdersJSON = JSON.stringify(orders);

        // Write the updated orders array back to the file:
        const filepath = path.join(__dirname, "orders.json");
        file.writeFileSync(filepath, updatedOrdersJSON, "utf-8");

        console.log("\nOrder successfully cancelled! \n");
        console.log("Details of the cancelled order: ", removedOrder);
      } else {
        console.log("Order not found :(");
      }
    } catch (err) {
      console.error("There eas an error while cancelling the order: ", err);
    } finally {
      // Pause the reader again or better, close it if you don't need it in any upcoming methods:
      reader.pause();
      // reader.close();
    }
  }
}

const testOrder = new OrderDetails(
  "Idkidk Robusta ig",
  "30 kg",
  "123 iDk Street"
);
testOrder.placeOrder();

// testOrder.searchAndShowOrder();
testOrder.cancelOrder();
